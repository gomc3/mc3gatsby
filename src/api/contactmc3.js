const { google } = require("googleapis");
import axios from "axios";

export default async function formHandler(req, res) {
  const { name, email, reason, question, timeStamp, token } = req.body;
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRETKEY}&response=${token}`;
  let gRc = false;
  async function getRecaptcha(url) {
    const axiosResponse = await axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // axiosResponse.success = false; // uncomment this line to simulate a failed recaptcha test
    gRc = axiosResponse.success;
    // if reCaptcha passes, write the form to a Google Sheet
    if (axiosResponse.success === true) {
      const keys = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEYS);
      const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
      const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        SCOPES
      );
      client.authorize((err, tokens) => {
        if (err) {
          console.log(err);
          return;
        }
      });
      const data = [[timeStamp, name, email, reason, question]];
      let today = new Date();
      const memberIds = {
        "Agenda Item": ["60ee3b02a70c66502f74972a", "60ee3b0210af375d669d7c4d"],
        Billing: ["60ee3b0290b94052ef2511c0", "60ee3b0303303083d5a2aaf9"],
        "Professional Development": [
          "60ee3b02a70c66502f74972a",
          "60ee3b0210af375d669d7c4d",
        ],
        "Volunteer to Write a Blog Post": [
          "60ee3b02a70c66502f74972a",
          "60ee3b0210af375d669d7c4d",
        ],
        "Volunteer to Present": [
          "60ee3b02a70c66502f74972a",
          "60ee3b0210af375d669d7c4d",
        ],
        Website: ["60ed997371e05577c0bb2ec9"],
        "Other...": ["60ee3b02a70c66502f74972a", "60ee3b0210af375d669d7c4d"],
      };
      const listIds = {
        "Agenda Item": "60ed99f9efb5dc10411d6351",
        Billing: "60ed99f9efb5dc10411d6352",
        "Professional Development": "60ed99f9efb5dc10411d6353",
        "Volunteer to Write a Blog Post": "60ed9a480120b927354896af",
        "Volunteer to Present": "60ed9a7e70f26f2c734c60b6",
        Website: "60ed9a8a0a7f247611069009",
        "Other...": "60ed9a8e7b89df0e1ca5cef1",
      };
      axios
        .post(
          `https://api.trello.com/1/cards?key=${process.env.TRELLO_API}&token=${process.env.TRELLO_TOKEN}&idList=${listIds[reason]}`,
          {
            name: `Question from ${name}: ${email}`,
            desc: question,
            pos: "bottom",
            idMembers: memberIds[reason],
            due: `${today.setDate(today.getDate() + 2)}`,
            idLabels: ["60ed99f9c824613830751364"],
          },
          {
            method: "POST",
          }
        )
        .then((response) => {
          //console.log(`Response: ${response.status} ${response.statusText}`);
          return JSON.stringify(response.data);
        })
        //.then((text) => console.log(text))
        .catch((err) => {
          console.error(err);
        });
      async function gsrun(client) {
        const gsapi = google.sheets({ version: "v4", auth: client });
        const request = {
          spreadsheetId: "1y_sMor7OYiU4rxGABQeXJbjvR3MDHNg6jaZ9xFTG-K0",
          range: "Sheet1!A1:E1",
          valueInputOption: "USER_ENTERED",
          insertDataOption: "INSERT_ROWS",
          resource: { values: data },
        };
        try {
          let googleResponse = await gsapi.spreadsheets.values.append(request);
          return googleResponse.status;
        } catch (err) {
          console.log("Errors in appending: ", err);
          return JSON.stringify(err);
        }
      }
      gsrun(client);
    }
  }
  await getRecaptcha(recaptchaUrl);
  if (gRc === false) {
    return res.status(422).json(`ReCaptcha Error`);
  }
  return res.json(`ok`);
}

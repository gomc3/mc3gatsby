const { google } = require("googleapis");
import axios from "axios";

export default function formHandler(req, res) {
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
    gRc = axiosResponse.success;
    //axiosResponse.success = false;
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
  getRecaptcha(recaptchaUrl);
  return res.json(`ok`);
}

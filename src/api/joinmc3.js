const { google } = require("googleapis");
import axios from "axios";

export default async function formHandler(req, res) {
  const {
    email,
    phone,
    memberPackage,
    registrantName1,
    registrantEmail1,
    registrantName2,
    registrantEmail2,
    registrantName3,
    registrantEmail3,
    registrantName4,
    registrantEmail4,
    registrantName5,
    registrantEmail5,
    leaName,
    billingAddress,
    purchaseOrder,
    accountsPayableName,
    accountsPayableEmail,
    memberEmails,
    timeStamp,
    token,
  } = req.body;
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
      const data = [
        [
          timeStamp,
          memberPackage,
          registrantName1,
          registrantEmail1,
          registrantName2,
          registrantEmail2,
          registrantName3,
          registrantEmail3,
          registrantName4,
          registrantEmail4,
          registrantName5,
          registrantEmail5,
          leaName,
          purchaseOrder,
          accountsPayableName,
          accountsPayableEmail,
          memberEmails,
        ],
      ];
      async function gsrun(client) {
        const gsapi = google.sheets({ version: "v4", auth: client });
        const request = {
          spreadsheetId: "1-_o0Gf6LgR_l0sTA0J9VtOve45z9egkv0DDfA6w47b8",
          range: "Sheet1!A1:L1",
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

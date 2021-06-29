import fetch from "node-fetch";
const { google } = require("googleapis");

export default function formHandler(req, res) {
  const {
    email,
    phone,
    memberPackage,
    registrantName,
    registrantEmail,
    leaName,
    billingAddress,
    purchaseOrder,
    accountsPayableName,
    accountsPayableEmail,
    memberEmails,
    timeStamp,
  } = req.body;
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
    } else {
      console.log("Connected!");
    }
  });
  const data = [
    [
      timeStamp,
      email,
      phone,
      memberPackage,
      registrantName,
      registrantEmail,
      leaName,
      billingAddress,
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
      console.log(googleResponse);
    } catch (err) {
      console.log(err);
    }
  }
  gsrun();
  // req.body has the form values
  //console.log(req.body);
  // Here is where you would validate the form values and
  // do any other actions with it you need (e.g. save it somewhere or
  // trigger an action for the user).
  //
  // e.g.
  //   if (!req.body.name) {
  //     return res.status(422).json("Name field is required");
  //   }
  return res.json(`OK`);
}

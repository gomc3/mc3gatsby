const { google } = require("googleapis");

export default function formHandler(req, res) {
  const { name, email, reason, question, timeStamp } = req.body;
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
  return res.json(`ok`);
}

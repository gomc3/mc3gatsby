const { google } = require("googleapis");
import axios from "axios";

export default async function formHandler(req, res) {
  const {
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
    billingAddress,
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
      const SCOPES = [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/documents",
      ];
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
          billingAddress,
        ],
      ];

      async function gsCopyInvoice(client) {
        const folderId = "1fhO4N7Mp4kIe25pke4YL687LSzBG019A";
        const templateId = "1sqnjygHb1XUhjSMGjYixuR7powPG1z4f86sojOmsg7k";
        const gsapi = google.drive({ version: "v3", auth: client });
        const request = {
          parents: [folderId],
          name: `Quote/Invoice for ${leaName} on ${timeStamp}`,
          fields: "id",
        };
        try {
          let googleResponse = await gsapi.files.copy(
            {
              fileId: templateId,
              requestBody: request,
              supportsAllDrives: true,
            },
            (err, file) => {
              if (err) {
                console.log("Error in the line files.copy: ", err);
              } else {
                gsInvoice(client, file.data.id);
              }
            }
          );
          return googleResponse;
        } catch (err) {
          console.log("Ther was an error copying: ", err);
        }
      }
      gsCopyInvoice(client);

      async function gsInvoice(client, newCopyId) {
        const gsapi = google.docs({ version: "v1", auth: client });
        const requests = [
          {
            replaceAllText: {
              containsText: {
                text: "{{purchaseOrder}}",
                matchCase: true,
              },
              replaceText: `${purchaseOrder === "Will Follow" && ""}`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{month}}",
                matchCase: true,
              },
              replaceText: `${new Date().toLocaleDateString("en-US", {
                month: "long",
              })}`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{year}}",
                matchCase: true,
              },
              replaceText: `${new Date().toLocaleDateString("en-US", {
                year: "numeric",
              })}`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{date}}",
                matchCase: true,
              },
              replaceText: `${new Date().toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{billToAddress}}",
                matchCase: true,
              },
              replaceText: `${
                billingAddress ? `${billingAddress}` : `Enter Billing Address`
              }`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{package}}",
                matchCase: true,
              },
              replaceText: `${
                memberPackage === "pd" ? "Professional Development" : "General"
              }`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{registrantName1}}",
                matchCase: true,
              },
              replaceText: registrantName1,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{additionalMemberDetails}}",
                matchCase: true,
              },
              replaceText: `${registrantName2 ? `, ${registrantName2}` : ``}${
                registrantName3 ? `, ${registrantName3}` : ``
              }${registrantName4 ? `, ${registrantName4}` : ``}${
                registrantName5 ? `, ${registrantName5}` : ``
              }`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{unitPrice}}",
                matchCase: true,
              },
              replaceText: `${
                memberPackage === "general" ? "$75.00" : "$375.00"
              }`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: "{{totalPrice}}",
                matchCase: true,
              },
              replaceText: `${
                memberPackage === "general" ? "$75.00" : "$375.00"
              }`,
            },
          },
        ];
        try {
          let googleResponse = await gsapi.documents.batchUpdate(
            {
              documentId: newCopyId,
              resource: {
                requests,
              },
            },
            (err, data) => {
              if (err) return console.log("The API returned an error:" + err);
              console.log(data);
            }
          );
          return googleResponse;
        } catch (err) {
          console.log("Errors in the catch");
        }
      }
      gsInvoice(client);
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

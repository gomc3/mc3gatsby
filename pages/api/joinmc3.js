const { google } = require('googleapis')
import axios from 'axios'

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
    registrantName6,
    registrantEmail6,
    registrantName7,
    registrantEmail7,
    registrantName8,
    registrantEmail8,
    registrantName9,
    registrantEmail9,
    registrantName10,
    registrantEmail10,
    registrantName11,
    registrantEmail11,
    registrantName12,
    registrantEmail12,
    county,
    leaName,
    purchaseOrder,
    accountsPayableName,
    accountsPayableEmail,
    billingAddress,
    token,
  } = req.body
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRETKEY}&response=${token}`
  let gRc = false

  async function getRecaptcha(url) {
    const axiosResponse = await axios
      .get(url)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })

    // axiosResponse.success = false; // uncomment this line to simulate a failed recaptcha test
    gRc = axiosResponse.success
    // if reCaptcha passes, write the form to a Google Sheet

    if (axiosResponse.success === true) {
      const keys = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEYS)
      const SCOPES = [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/documents',
      ]
      const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        SCOPES
      )
      client.authorize((err, tokens) => {
        if (err) {
          console.log(err)
          return
        }
      })
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
          registrantName6,
          registrantEmail6,
          registrantName7,
          registrantEmail7,
          registrantName8,
          registrantEmail8,
          registrantName9,
          registrantEmail9,
          registrantName10,
          registrantEmail10,
          registrantName11,
          registrantEmail11,
          registrantName12,
          registrantEmail12,
          leaName,
          purchaseOrder,
          accountsPayableName,
          accountsPayableEmail,
          billingAddress,
          county,
        ],
      ]

      /**
       * This function copies the invoice template from the Google Drive folder and creates a new
       * invoice with the name of the LEA and the date
       * @param client - The OAuth2 client that was created in the previous step.
       * @returns the googleResponse.
       */
      async function gsCopyInvoice(client) {
        const folderId = '1Cc5mjm_tSr5ZFZaqM8RdjoYyDDjXioUo';
        const templateId = '1sqnjygHb1XUhjSMGjYixuR7powPG1z4f86sojOmsg7k'
        const gsapi = google.drive({ version: 'v3', auth: client })
        const request = {
          parents: [folderId],
          name: `Quote/Invoice for ${leaName} on ${timeStamp}`,
          fields: 'id',
        }
        try {
          let googleResponse = await gsapi.files.copy(
            {
              fileId: templateId,
              requestBody: request,
              supportsAllDrives: true,
            }).then(response => {
              console.log('test')
              console.log(response)
              return response
            })
          console.log('Google Response');
          return googleResponse
        } catch (err) {
          console.log('Ther was an error copying: ', err)
        }
      }
      


      /**
       * This function takes in a client object, which is the result of the Google OAuth2.0
       * authentication process, and a newCopyId, which is the ID of the newly created Google Doc. It
       * then uses the Google Docs API to replace all instances of the text in the curly braces with
       * the corresponding data from the form
       * @param client - The Google API client
       * @param newCopyId - The ID of the new copy of the invoice template
       * @returns The googleResponse is being returned.
       */
      async function gsInvoice(client, newCopyId) {
        const gsapi = google.docs({ version: 'v1', auth: client })
        const requests = [
          {
            replaceAllText: {
              containsText: {
                text: '{{purchaseOrder}}',
                matchCase: true,
              },
              replaceText: `${
                purchaseOrder === 'Will Follow' ? '' : purchaseOrder
              }`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: '{{month}}',
                matchCase: true,
              },
              replaceText: `${new Date().toLocaleDateString('en-US', {
                month: 'long',
              })}`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: '{{year}}',
                matchCase: true,
              },
              replaceText: `${new Date().toLocaleDateString('en-US', {
                year: 'numeric',
              })}`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: '{{date}}',
                matchCase: true,
              },
              replaceText: `${new Date().toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
              })}`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: '{{leaName}}',
                matchCase: true,
              },
              replaceText: `${leaName ? `${leaName}` : `Enter LEA Name`}`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: '{{billToAddress}}',
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
                text: '{{package}}',
                matchCase: true,
              },
              replaceText: `${
                memberPackage === 'large'
                  ? 'Professional Development (6-12)'
                  : 'Professional Development (1-5)'
              }`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: '{{registrantName1}}',
                matchCase: true,
              },
              replaceText: registrantName1,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: '{{additionalMemberDetails}}',
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
                text: '{{unitPrice}}',
                matchCase: true,
              },
              replaceText: `${
                memberPackage === 'small' ? '$350.00' : '$500.00'
              }`,
            },
          },
          {
            replaceAllText: {
              containsText: {
                text: '{{totalPrice}}',
                matchCase: true,
              },
              replaceText: `${
                memberPackage === 'small' ? '$350.00' : '$500.00'
              }`,
            },
          },
        ]
        try {
          let googleResponse = await gsapi.documents.batchUpdate(
            {
              documentId: newCopyId,
              resource: {
                requests,
              },
            },
            (err, data) => {
              if (err) return console.log('The API returned an error: ' + err)
              console.log(data)
            }
          )
          return googleResponse
        } catch (err) {
          console.log('Errors in the catch')
        }
      }


      /**
       * It takes the data from the form and appends it to the Google Sheet
       * @param client - The client object returned by the Google API.
       * @returns The status of the request.
       */
      async function gsrun(client) {
        const gsapi = google.sheets({ version: 'v4', auth: client })
        const request = {
          spreadsheetId: '1-_o0Gf6LgR_l0sTA0J9VtOve45z9egkv0DDfA6w47b8',
          range: 'Sheet1',
          valueInputOption: 'USER_ENTERED',
          insertDataOption: 'INSERT_ROWS',
          resource: { values: data },
        }
        try {
          let googleResponse = await gsapi.spreadsheets.values.append(request)
          return googleResponse.status
        } catch (err) {
          console.log('Errors in appending: ', err)
          return JSON.stringify(err)
        }
      }
      console.log('running gsrun')

      const gsCopyInvoiceTest = await gsCopyInvoice(client)
      console.log(gsCopyInvoiceTest)

      const gsrunTest = await gsrun(client)
      console.log(gsrunTest)


      //const gsCopyInvoiceRunning = await gsCopyInvoice(client)
      //const gsInvoiceTest = await gsInvoice(client, gsCopyInvoiceRunning)
      //const gsrunTest = await gsrun(client)
    }
  }
  await getRecaptcha(recaptchaUrl)
  if (gRc === false) {
    return res.status(422).json(`ReCaptcha Error`)
  }

  return res.json(`ok`)
}

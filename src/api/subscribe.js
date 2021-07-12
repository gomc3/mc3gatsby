import axios from "axios";

export default async function formHandler(req, res) {
  console.log(req.body);
  const { name, email, token } = req.body;

  // const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRETKEY}&response=${token}`;
  // let gRc = false;
  // async function getRecaptcha(url) {
  //   const axiosResponse = await axios
  //     .get(url)
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // axiosResponse.success = false; // uncomment this line to simulate a failed recaptcha test
  //   gRc = axiosResponse.success;
  //   // if reCaptcha passes, write the form to a Google Sheet
  //   if (axiosResponse.success === true) {
  //     const mlUrl = `https://api.mailerlite.com/api/v2/groups/${process.env.MAILERLITE_MC3_GROUP_ID}/subscribers`;
  //     async function addToMailerLite(mlUrl) {
  //       const mlResponse = await axios
  //         .get(
  //           mlUrl,
  //           { email: email, name: name },
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //               "X-MailerLite-ApiKey": `${proccess.env.MAILERLITE_API_KEY}`,
  //             },
  //           }
  //         )
  //         .then((response) => {
  //           console.log(response);
  //           return response.data;
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //     let myvar = await addToMailerLite(mlUrl);
  //     console.log(myvar);
  //   }
  // }
  // await getRecaptcha(recaptchaUrl);
  // if (gRc === false) {
  //   return res.status(422).json(`ReCaptcha Error`);
  // }
  return res.json(`ok`);
}

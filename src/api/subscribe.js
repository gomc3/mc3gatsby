import axios from "axios";

export default async function formHandler(req, res) {
  const { name, email, token } = req.body;

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
      const mlUrl = `https://api.mailerlite.com/api/v2/groups/${process.env.MAILERLITE_MC3_GROUP_ID}/subscribers`;
      async function addToMailerLite(mlUrl) {
        const mlResponse = await axios
          .post(
            mlUrl,
            {
              email: email,
              name: name,
              autoresponders: true,
              type: "unconfirmed",
            },
            {
              headers: {
                "Content-Type": "application/json",
                "X-MailerLite-ApiKey": `${process.env.MAILERLITE_API_KEY}`,
              },
            }
          )
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      await addToMailerLite(mlUrl);
    }
  }
  await getRecaptcha(recaptchaUrl);
  if (gRc === false) {
    return res.status(422).json(`ReCaptcha Error`);
  }
  return res.json(`ok`);
}

import * as React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageTitle from "../components/page-title";
import { HiChatAlt2 } from "react-icons/hi";
import { useForm } from "react-hook-form";

export default function Contact({ path }) {
  const [disabled, setDisabled] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const selectReason = [
    "Agenda Item",
    "Billing",
    "Professional Development",
    "Volunteer to Write a Blog Post",
    "Volunteer to Present",
    "Website",
    "Other...",
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const reRef = React.useRef();
  const onSubmit = async (data) => {
    setDisabled(true);
    const token = await reRef.current.executeAsync();
    data.token = token;
    data.timeStamp = `${new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "numeric",
      year: "numeric",
    })} ${new Date().toLocaleTimeString()}`;
    //!data.purchaseOrder && (data.purchaseOrder = "Will Follow");
    // console.log(data);
    try {
      await fetch(`/api/contactmc3`, {
        method: `POST`,
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        res.json();
        //console.log(res);
        if (res.status === 200) {
          reset();
          setFormComplete(true);
          setDisabled(false);
        }
      });
    } catch (error) {
      console.log(errors);
    }
  };
  return (
    <Layout path={path}>
      <Seo title='Contact Us' />
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
        <header className='mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center'>
          <div>
            <PageTitle
              title='Contact Us'
              icon={
                <HiChatAlt2 className='text-3xl sm:text-5xl lg:text-6xl mt-0 inline-block' />
              }
            />
          </div>
          <h2 className='text-lg text-gray-700 max-w-screen-sm'>
            Would you like to volunteer to do an Ignite Presentation, or do you
            have a question for us?
          </h2>
        </header>
        <hr />
        <section className='max-w-screen-sm mx-auto my-3 sm:my-4 md:my-5 lg:my-6'>
          {formComplete && (
            <button
              onClick={() => setFormComplete(!formComplete)}
              className='block mx-auto text-center items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600 transition ease-in-out duration-150'
            >
              Contact Us Again
            </button>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${formComplete && `hidden`}`}
          >
            <label
              htmlFor='name'
              className='font-semibold text-lg text-blue-800'
            >
              What is your name?
            </label>
            <input
              name='name'
              type='text'
              placeholder='Example: Jane Appleseed'
              {...register("name", {
                required: "Your name is required.",
              })}
              className='form-input max-w-sm block w-full mb-3 px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
            />
            {errors.name && (
              <p className='text-red-700'> &uarr; {errors.name.message}</p>
            )}
            <label
              htmlFor='email'
              className='font-semibold text-lg text-blue-800'
            >
              What is your email address?
            </label>
            <input
              name='email'
              type='email'
              placeholder='Example: jappleseed@gomc3.org'
              {...register("email", {
                required: "Your email address is required.",
              })}
              className='form-input max-w-sm block w-full mb-3 px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
            />
            {errors.email && (
              <p className='text-red-700'> &uarr; {errors.email.message}</p>
            )}
            <label
              htmlFor='reason'
              className='font-semibold text-lg text-blue-800'
            >
              What is your reason for contacting us today?
            </label>
            <select
              name='reason'
              {...register("reason", {
                required: "A reason is required.",
                pattern: "^((?!Select).)*$",
              })}
              className='form-select text-gray-500 max-w-sm block w-full mb-3 px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
            >
              {selectReason.map((reason, i) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
            <label
              htmlFor='question'
              className='font-semibold text-lg text-blue-800'
            >
              How can we help you?
            </label>
            <textarea
              name='question'
              placeholder='Enter your question or comment here...'
              className='form-textarea max-w-sm block w-full mb-3 px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
              {...register("question", {
                required: "Your question/comment is required.",
              })}
            />
            {errors.question && (
              <p className='text-red-700'> &uarr; {errors.question.message}</p>
            )}
            <ReCAPTCHA
              sitekey={process.env.GOOGLE_RECAPTCHA_SITEKEY}
              size='invisible'
              ref={reRef}
            />
            <input
              name='submit'
              type='submit'
              className={`w-1/3 px-6 py-3 mt-6 font-medium rounded-md text-white bg-blue-700 ${
                disabled && ` opacity-40 text-gray-50 `
              } transition duration-300 hover:bg-blue-800`}
            />
          </form>
        </section>
      </div>
    </Layout>
  );
}

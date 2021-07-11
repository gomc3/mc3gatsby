import * as React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageTitle from "../components/page-title";
import { HiPlus } from "react-icons/hi";
import { useForm } from "react-hook-form";

export default function Join({ path }) {
  const [disabled, setDisabled] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const [recaptchaPassed, setRecaptchaPassed] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const watchSelectedPackage = watch("memberPackage", false);
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
    !data.purchaseOrder && (data.purchaseOrder = "Will Follow");
    // console.log(data);
    try {
      await fetch(`/api/joinmc3`, {
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
        } else {
          console.log(res.status);
          setRecaptchaPassed(false);
        }
      });
    } catch (error) {
      console.log(errors);
    }
  };
  return (
    <Layout path={path}>
      <Seo title='Join MC3' />
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
        <header className='mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center'>
          <div>
            <PageTitle
              title='Join MC3'
              icon={
                <HiPlus className='text-3xl sm:text-5xl lg:text-6xl mt-0 inline-block' />
              }
            />
          </div>

          <h2 className='text-lg text-gray-700 max-w-screen-sm'>
            If you or your district are interested in joining MC3, please
            complete the form below.
          </h2>
          <div id='contact-info' className='text-center mt-4 text-sm'>
            <p>PO Box 549</p>
            <p>Neptune, NJ 07754</p>
            <p>Tax ID: 462-572-217/000</p>
          </div>
          <p className='text-md max-w-md italic mt-2 sm:mt-4 lg:mt-6'>
            The information collected below is handled in accordance with{" "}
            <Link
              to='/privacy'
              className='text-blue-700 underline hover:no-underline not-italic'
            >
              our privacy policy
            </Link>
            .
          </p>
        </header>
        <hr />
        <section className='max-w-screen-sm mx-auto my-3 sm:my-4 md:my-5 lg:my-6'>
          {recaptchaPassed === false && (
            <p className='text-center text-red-600 text-xl border border-red-600 p-4 rounded-md mb-6'>
              Oops! It looks like Google blocked your submission because it
              thinks you are a robot. Your submission was not sent to us.
            </p>
          )}
          {formComplete && (
            <button
              onClick={() => {
                setFormComplete(!formComplete);
                setValue("memberPackage", false);
              }}
              className='block mx-auto text-center items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600 transition ease-in-out duration-150'
            >
              Begin Another Registration Form
            </button>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            method='POST'
            action='/api/joinmc3'
            className={`${formComplete && `hidden`} grid grid-cols-1 space-y-3`}
          >
            <div className='p-4 border-2 border-blue-400 border-dotted rounded-md'>
              <h3 className='font-semibold text-lg text-blue-800'>
                Step 1: Select a Membership Package:
              </h3>
              <p className='text-sm mt-4 mb-6'>
                The Professional Development Package is for five participants
                from the same District and includes General Membership,
                attendance at the Winter Summit and admittance to 5 Topical
                Breakout Sessions.
              </p>
              {errors.memberPackage && (
                <p className='text-red-700'>
                  &darr; {errors.memberPackage.message}
                </p>
              )}
              <label
                htmlFor='general-package'
                className='flex items-center pb-3'
              >
                <input
                  type='radio'
                  id='general-package'
                  name='memberPackage'
                  value='general'
                  {...register("memberPackage", {
                    required: "Please indicate which package you would like",
                  })}
                  className='form-radio text-blue-800 my-2 mr-3 h-5 w-5 border border-blue-700'
                />
                General Package $75.00 (General Membership for 1 Person)
              </label>
              <label htmlFor='pd-package' className='flex items-center'>
                <input
                  type='radio'
                  id='pd-package'
                  name='memberPackage'
                  value='pd'
                  {...register("memberPackage", {
                    required: "Please indicate which package you would like",
                  })}
                  className='form-radio text-blue-800 my-2 mr-3 h-5 w-5 border border-blue-800'
                />
                Professional Development Package $375.00
              </label>
            </div>
            {watchSelectedPackage !== false && (
              <div className='p-4 border-2 border-blue-500 border-dotted rounded-md'>
                <h3 className='font-semibold text-lg text-blue-800'>
                  Step 2: Tell Us Who Is Registering:
                </h3>
                <p className='text-sm font-medium'>
                  Please add the member details below.
                </p>
                <label htmlFor='registrantName1' className='block ml-6'>
                  <h3 className='font-semibold text-lg text-blue-800 mt-6'>
                    Full Name of {watchSelectedPackage === "pd" && `First `}{" "}
                    Registrant:
                  </h3>
                  <input
                    type='text'
                    name='registrantName1'
                    id='registrantName1'
                    placeholder='Enter the full name of the registrant here...'
                    {...register("registrantName1", {
                      required: "Registrant full name is required.",
                    })}
                    className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                  />
                  {errors.name && (
                    <p className='text-red-700'>&uarr; {errors.name.message}</p>
                  )}
                </label>
                <label htmlFor='registrantEmail1' className='block ml-6'>
                  <h3 className='font-semibold text-lg text-blue-800'>
                    Email of {watchSelectedPackage === "pd" && `First `}{" "}
                    Registrant:
                  </h3>
                  <input
                    type='email'
                    name='registrantEmail1'
                    id='registrantEmail1'
                    placeholder='registrant@example.com'
                    {...register("registrantEmail1", {
                      required: "This email address is required.",
                    })}
                    className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                  />
                  {errors.registrantEmail1 && (
                    <p className='text-red-700'>
                      {" "}
                      &uarr; {errors.registrantEmail1.message}
                    </p>
                  )}
                </label>
                {watchSelectedPackage === "pd" && (
                  <>
                    <label
                      htmlFor='registrantName2'
                      className='block border-t border-dashed border-blue-500 ml-6'
                    >
                      <h3 className='font-semibold text-lg text-blue-800 mt-6'>
                        Full Name of Second Registrant:
                      </h3>
                      <input
                        type='text'
                        name='registrantName2'
                        id='registrantName2'
                        placeholder='Enter the full name of the second registrant here...'
                        {...register("registrantName2", {
                          required: "Registrant full name is required.",
                        })}
                        className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                      />
                      {errors.name && (
                        <p className='text-red-700'>
                          &uarr; {errors.registrantName2.message}
                        </p>
                      )}
                    </label>
                    <label htmlFor='registrantEmail2' className='block ml-6'>
                      <h3 className='font-semibold text-lg text-blue-800'>
                        Email of individual or district representative seeking
                        membership:
                      </h3>
                      <input
                        type='email'
                        name='registrantEmail2'
                        id='registrantEmail2'
                        placeholder='registrant2@example.com'
                        {...register("registrantEmail2", {
                          required: "This email address is required.",
                        })}
                        className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                      />
                      {errors.registrantEmail2 && (
                        <p className='text-red-700'>
                          {" "}
                          &uarr; {errors.registrantEmail2.message}
                        </p>
                      )}
                    </label>
                    <label
                      htmlFor='registrantName3'
                      className='block border-t border-dashed border-blue-500 ml-6'
                    >
                      <h3 className='font-semibold text-lg text-blue-800 mt-6'>
                        Full Name of Third Registrant:
                      </h3>
                      <input
                        type='text'
                        name='registrantName3'
                        id='registrantName3'
                        placeholder='Enter the full name of the third registrant here...'
                        {...register("registrantName3")}
                        className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                      />
                    </label>
                    <label htmlFor='registrantEmail3' className='block ml-6'>
                      <h3 className='font-semibold text-lg text-blue-800'>
                        Email of Third Registrant:
                      </h3>
                      <input
                        type='email'
                        name='registrantEmail3'
                        id='registrantEmail3'
                        placeholder='registrant3@example.com'
                        {...register("registrantEmail3")}
                        className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                      />
                    </label>
                    <label
                      htmlFor='registrantName4'
                      className='block border-t border-dashed border-blue-500 ml-6'
                    >
                      <h3 className='font-semibold text-lg text-blue-800 mt-6'>
                        Full Name of Fourth Registrant:
                      </h3>
                      <input
                        type='text'
                        name='registrantName4'
                        id='registrantName$'
                        placeholder='Enter the full name of the fourth registrant here...'
                        {...register("registrantName4")}
                        className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                      />
                    </label>
                    <label htmlFor='registrantEmail4' className='block ml-6'>
                      <h3 className='font-semibold text-lg text-blue-800'>
                        Email of Fourth Registrant:
                      </h3>
                      <input
                        type='email'
                        name='registrantEmail4'
                        id='registrantEmail4'
                        placeholder='registrant4@example.com'
                        {...register("registrantEmail4")}
                        className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                      />
                    </label>
                    <label
                      htmlFor='registrantName5'
                      className='block border-t border-dashed border-blue-500 ml-6'
                    >
                      <h3 className='font-semibold text-lg text-blue-800 mt-6'>
                        Full Name of Fifth Registrant:
                      </h3>
                      <input
                        type='text'
                        name='registrantName5'
                        id='registrantName$'
                        placeholder='Enter the full name of the fifth registrant here...'
                        {...register("registrantName5")}
                        className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                      />
                    </label>
                    <label htmlFor='registrantEmail5' className='block ml-6'>
                      <h3 className='font-semibold text-lg text-blue-800'>
                        Email of Fifth Registrant:
                      </h3>
                      <input
                        type='email'
                        name='registrantEmail5'
                        id='registrantEmail5'
                        placeholder='registrant5@example.com'
                        {...register("registrantEmail5")}
                        className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                      />
                    </label>
                  </>
                )}
              </div>
            )}
            {watchSelectedPackage !== false && (
              <div className='p-4 border-2 border-blue-600 border-dotted rounded-md'>
                <h3 className='font-semibold text-lg text-blue-800'>
                  Step 3: Tell Us About Your District/Organization:
                </h3>
                <p className='text-sm font-medium'>
                  Please add the district/organization details below. <br />
                  Then send the purchase order to (our tax id is located at the
                  bottom of every page):
                </p>
                <div id='contact-info' className='text-left mt-4 ml-6 text-sm'>
                  <p>PO Box 549</p>
                  <p>Neptune, NJ 07754</p>
                </div>
                <label htmlFor='leaName' className='block mt-6 ml-6'>
                  <h3 className='font-semibold text-lg text-blue-800'>
                    A) Name of School District/Organization:
                  </h3>
                  <input
                    type='text'
                    name='leaName'
                    id='leaName'
                    placeholder='Enter the school district/organization name here...'
                    {...register("leaName")}
                    className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                  />
                </label>
                <label htmlFor='purchaseOrder' className='block mt-6 ml-6'>
                  <h3 className='font-semibold text-lg text-blue-800'>
                    B) Enter Purchase Order # or Leave Blank for Will Follow:
                  </h3>
                  <input
                    type='text'
                    name='purchaseOrder'
                    id='purchaseOrder'
                    placeholder='Leave Blank for "Will Follow"'
                    {...register("purchaseOrder")}
                    className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                  />
                </label>
                <label
                  htmlFor='accountsPayableName'
                  className='block mt-6 ml-6'
                >
                  <h3 className='font-semibold text-lg text-blue-800'>
                    C) Name of Accounts Payable Contact:
                  </h3>
                  <input
                    type='text'
                    name='accountsPayableName'
                    id='accountsPayableName'
                    placeholder='Enter the full name accounts payable contact'
                    {...register("accountsPayableName")}
                    className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                  />
                </label>
                <label
                  htmlFor='accountsPayableEmail'
                  className='block mt-6 ml-6'
                >
                  <h3 className='font-semibold text-lg text-blue-800'>
                    D) Email of Accounts Payable Contact:
                  </h3>
                  <input
                    type='email'
                    name='accountsPayableEmail'
                    id='accountsPayableEmail'
                    placeholder='email@accountspayable.com'
                    {...register("accountsPayableEmail")}
                    className='form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                  />
                </label>
              </div>
            )}
            {watchSelectedPackage !== false && (
              <>
                <ReCAPTCHA
                  sitekey={`6LeIMHIbAAAAAF-Eu5prLZNWXnwaadSsV8OYN1mP`}
                  size='invisible'
                  ref={reRef}
                />
                <input
                  type='submit'
                  disabled={disabled}
                  className={`w-1/3 px-6 py-3 mt-6 font-medium rounded-md text-white bg-blue-700 ${
                    disabled && ` opacity-40 text-gray-50 `
                  } transition duration-300 hover:bg-blue-800`}
                />
              </>
            )}
          </form>
          {recaptchaPassed === false && (
            <p className='text-center text-red-600 text-xl border border-red-600 p-4 rounded-md mt-6'>
              Oops! It looks like Google blocked your submission because it
              thinks you are a robot. Your submission was not sent to us.
            </p>
          )}
        </section>
      </div>
    </Layout>
  );
}

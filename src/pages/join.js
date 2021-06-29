import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageTitle from "../components/page-title";
import { HiPlus } from "react-icons/hi";
import { useForm } from "react-hook-form";

export default function Join({ path }) {
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setDisabled(true);
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
          setDisabled(false);
        }
      });
    } catch (error) {
      console.log(errors);
    }
    // const response = await window
    //   .fetch(`/api/joinmc3`, {
    //     method: `POST`,
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //   .then((res) => res.json())
    //   .then((body) => {
    //     console.log(`response from API:`, body);
    //   });
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

          <h2 className='font-light text-lg text-gray-700 max-w-screen-sm'>
            If you or your district are interested in joining MC3, fill out the
            form below to let us know. When we receive your message, we will
            contact you.
          </h2>
          <p className='text-md max-w-md italic mt-2 sm:mt-4 lg:mt-6'>
            The information collected below is treated in accordance with{" "}
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
        <section className='max-w-screen-sm mx-auto'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            method='POST'
            action='/api/joinmc3'
            className='flex flex-col space-y-6'
          >
            <label htmlFor='email'>
              <h3 className='font-semibold text-lg'>
                Email of person completing this form:
              </h3>
              <p className='text-sm font-medium'>
                This is the individual with whom we will correspond.
              </p>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Your email'
                {...register("email", {
                  required: "Your email address is required.",
                })}
                className='form-input mt-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
              />
              {errors.email && (
                <p className='text-red-700'> &uarr; {errors.email.message}</p>
              )}
            </label>
            <label htmlFor='phone'>
              <h3 className='font-semibold text-lg'>Contact Phone:</h3>
              <p className='text-sm font-medium'>
                This is the phone number we may call.
              </p>
              <input
                type='tel'
                name='phone'
                id='phone'
                placeholder='Enter phone number here...'
                {...register("phone", {
                  required: "Contact phone number is required.",
                })}
                className='form-input mt-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
              />
              {errors.name && (
                <p className='text-red-700'>&uarr; {errors.name.message}</p>
              )}
            </label>
            <div className='space-y-3'>
              <h3 className='font-semibold text-lg'>Membership Package:</h3>
              <p className='text-sm font-medium'>
                Please indicate the package you anticipate selecting.
              </p>
              <p className='text-sm'>
                The PD Package includes General Membership fee for 5 attendees,
                Winter Summit fee, and 5 Topical Breakout Sessions fee for up to
                5 Registrants per district.
              </p>
              {errors.memberPackage && (
                <p className='text-red-700'>
                  &darr; {errors.memberPackage.message}
                </p>
              )}
              <label
                htmlFor='general-package'
                className='flex items-center border-b border-dotted border-gray-500 pb-3'
              >
                <input
                  type='radio'
                  id='general-package'
                  name='memberPackage'
                  value='general'
                  {...register("memberPackage", {
                    required: "Please indicate which package you would like",
                  })}
                  className='form-radio text-blue-800 mr-3 h-5 w-5 border border-blue-700'
                />
                General Package $75.00 per person
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
                  className='form-radio text-blue-800 mr-3 h-5 w-5 border border-blue-800'
                />
                Professional Development Package $375.00
              </label>
            </div>
            <label htmlFor='registrantName'>
              <h3 className='font-semibold text-lg'>
                Full Name of Registrant:
              </h3>
              <input
                type='text'
                name='registrantName'
                id='registrantName'
                placeholder='Enter the full name of the registrant here...'
                {...register("registrantName", {
                  required: "Registrant full name is required.",
                })}
                className='form-input mt-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
              />
              {errors.name && (
                <p className='text-red-700'>&uarr; {errors.name.message}</p>
              )}
            </label>
            <label htmlFor='registrantEmail'>
              <h3 className='font-semibold text-lg'>
                Email of individual or district representative seeking
                membership:
              </h3>
              <input
                type='email'
                name='registrantEmail'
                id='registrantEmail'
                placeholder="Enter registrant's email address..."
                {...register("registrantEmail", {
                  required: "This email address is required.",
                })}
                className='form-input mt-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
              />
              {errors.registrantEmail && (
                <p className='text-red-700'>
                  {" "}
                  &uarr; {errors.registrantEmail.message}
                </p>
              )}
            </label>
            <label htmlFor='leaName'>
              <h3 className='font-semibold text-lg'>
                Name of School District:
              </h3>
              <input
                type='text'
                name='leaName'
                id='leaName'
                placeholder='Enter the school district name here...'
                {...register("leaName")}
                className='form-input mt-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
              />
            </label>
            <label htmlFor='billingAddress'>
              <h3 className='font-semibold text-lg'>Billing Address:</h3>
              <input
                type='text'
                name='billingAddress'
                id='billingAddress'
                placeholder='Enter the billing address here...'
                {...register("billingAddress", {
                  required: "This billing address is required.",
                })}
                className='form-input mt-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
              />
              {errors.billingAddress && (
                <p className='text-red-700'>
                  {" "}
                  &uarr; {errors.billingAddress.message}
                </p>
              )}
            </label>
            <label htmlFor='purchaseOrder'>
              <h3 className='font-semibold text-lg'>
                Enter Purchase Order # or Leave Blank for Will Follow:
              </h3>
              <input
                type='text'
                name='purchaseOrder'
                id='purchaseOrder'
                placeholder='Leave Blank for "Will Follow"'
                {...register("purchaseOrder")}
                className='form-input mt-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
              />
            </label>
            <label htmlFor='accountsPayableName'>
              <h3 className='font-semibold text-lg'>
                Name of Accounts Payable Contact:
              </h3>
              <input
                type='text'
                name='accountsPayableName'
                id='accountsPayableName'
                placeholder='Enter the full name accounts payable contact'
                {...register("accountsPayableName")}
                className='form-input mt-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
              />
            </label>
            <label htmlFor='accountsPayableEmail'>
              <h3 className='font-semibold text-lg'>
                Email of Accounts Payable Contact:
              </h3>
              <input
                type='email'
                name='accountsPayableEmail'
                id='accountsPayableEmail'
                placeholder='Enter accounts payable email here...'
                {...register("accountsPayableEmail")}
                className='form-input mt-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
              />
            </label>
            <label htmlFor='memberEmails'>
              <h3 className='font-semibold text-lg'>
                Email address of members (up to 5 if PD Package selected):
              </h3>
              <input
                type='email'
                multiple
                name='memberEmails'
                id='memberEmails'
                placeholder='Example: name1@district.com, name2@district.com, ...'
                {...register("memberEmails")}
                className='form-input mt-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
              />
            </label>
            <input
              type='submit'
              disabled={disabled}
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

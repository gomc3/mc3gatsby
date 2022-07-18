import * as React from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PageTitle from '../components/page-title'
import { HiPlus } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import RegistrantInput from '../components/Registrant'
import { counties } from '../../data'

export default function Join({ path }) {
  const [disabled, setDisabled] = useState(false)
  const [formComplete, setFormComplete] = useState(false)
  const [recaptchaPassed, setRecaptchaPassed] = useState(null)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm()
  const watchSelectedPackage = watch('memberPackage', false)

  const reRef = React.useRef()
  /**
   * The function is called when the user clicks the submit button. It sets the disabled state to true,
   * which disables the submit button. It then calls the reCaptcha API and stores the token in a
   * variable. It then adds the token to the data object, along with a timestamp. It then checks to see
   * if the user has entered a purchase order number, and if not, it adds a placeholder value. It then
   * checks to see if the user has entered a name for each registrant, and if so, it checks to see if
   * the user has entered an email address for that registrant. If not, it adds a placeholder value. It
   * then sends the data object to the server, and if the server responds with a status of 200, it
   * resets the form, sets the formComplete state to true, and sets the disabled state to false. If the
   * server responds with a status other than 200, it sets the recaptchaPassed state to false
   * @param data - the form data
   */
  const onSubmit = async (data) => {
    setDisabled(true)
    const token = await reRef.current.executeAsync()
    data.token = token
    data.timeStamp = `${new Date().toLocaleDateString('en-US', {
      month: '2-digit',
      day: 'numeric',
      year: 'numeric',
    })} ${new Date().toLocaleTimeString()}`
    !data.purchaseOrder && (data.purchaseOrder = 'Will Follow')
    if (data.registrantName1 && !data.registrantEmail1) {
      data.registrantEmail1 = '?'
    }
    if (data.registrantName2 && !data.registrantEmail2) {
      data.registrantEmail2 = '?'
    }
    if (data.registrantName3 && !data.registrantEmail3) {
      data.registrantEmail3 = '?'
    }
    if (data.registrantName4 && !data.registrantEmail4) {
      data.registrantEmail4 = '?'
    }
    if (data.registrantName5 && !data.registrantEmail5) {
      data.registrantEmail5 = '?'
    }
    if (data.registrantName6 && !data.registrantEmail6) {
      data.registrantEmail6 = '?'
    }
    if (data.registrantName7 && !data.registrantEmail6) {
      data.registrantEmail7 = '?'
    }
    if (data.registrantName8 && !data.registrantEmail6) {
      data.registrantEmail8 = '?'
    }
    if (data.registrantName9 && !data.registrantEmail6) {
      data.registrantEmail9 = '?'
    }
    if (data.registrantName10 && !data.registrantEmail6) {
      data.registrantEmail10 = '?'
    }
    if (data.registrantName11 && !data.registrantEmail6) {
      data.registrantEmail11 = '?'
    }
    if (data.registrantName12 && !data.registrantEmail6) {
      data.registrantEmail12 = '?'
    }

    try {
      await fetch(`/api/joinmc3`, {
        method: `POST`,
        headers: {
          'content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        res.json()
        if (res.status === 200) {
          reset()
          setFormComplete(true)
          setDisabled(false)
        } else {
          console.log(res.status)
          setRecaptchaPassed(false)
        }
      })
    } catch (error) {
      console.log(errors)
    }
  }
  return (
    <Layout path={path}>
      <Seo title="Join MC3" />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <header className="mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center">
          <div>
            <PageTitle
              title="Join MC3"
              icon={
                <HiPlus className="text-3xl sm:text-5xl lg:text-6xl -mt-3 inline-block" />
              }
            />
          </div>
          <p className=" prose prose-blue md:prose-lg lg:prose-xl text-slate-700 max-w-screen-sm">
            Ready to take the next step? If your district is interested in
            joining MC3, please complete the form below. Our mailing address is
            listed below. Have questions? <Link to="/contact">Contact us</Link>!
          </p>
          <div id="contact-info" className="text-center mt-4 text-sm">
            <p>Monmouth County Curriculum Consortium (MC3)</p>
            <p>PO Box 549</p>
            <p>Neptune, NJ 07754</p>
            <p>Tax ID: 462-572-217/000</p>
          </div>
          <p className="text-md max-w-md italic mt-2 sm:mt-4 lg:mt-6">
            The information collected below is handled in accordance with{' '}
            <Link
              to="/privacy"
              className="text-blue-700 underline hover:no-underline not-italic"
            >
              our privacy policy
            </Link>
            .
          </p>
        </header>
        <hr />
        <section className="max-w-screen-sm mx-auto my-3 sm:my-4 md:my-5 lg:my-6">
          {recaptchaPassed === false && (
            <p className="text-center text-red-600 text-xl border border-red-600 p-4 rounded-md mb-6">
              Oops! It looks like Google blocked your submission because it
              thinks you are a robot. Your submission was not sent to us.
            </p>
          )}
          {formComplete && (
            <>
              <h2 className="text-blue-700 text-2xl text-center">
                Registration Successfully Sent
              </h2>
              <button
                onClick={() => {
                  setFormComplete(!formComplete)
                  setValue('memberPackage', false)
                }}
                className="block mx-auto text-center items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 active:bg-blue-600 transition ease-in-out duration-150"
              >
                Begin Another Registration Form
              </button>
            </>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            action="/api/joinmc3"
            className={`${formComplete && `hidden`} grid grid-cols-1 space-y-3`}
          >
            <div className="p-4 border-2 border-blue-400 border-dotted rounded-md">
              <h3 className="font-semibold text-lg text-blue-800">
                Step 1: Select a Membership Package:
              </h3>
              <p className="text-sm mt-4 mb-6">
                We offer two membership packages.
              </p>
              <ol className="list-decimal ml-8">
                <li>
                  The{' '}
                  <span className="font-bold">
                    Professional Development Package (1-5 members)
                  </span>
                </li>
                <li>
                  The{' '}
                  <span className="font-bold">
                    Professional Development Package (6-12 members)
                  </span>
                </li>
              </ol>

              {errors.memberPackage && (
                <p className="text-red-700">
                  &darr; {errors.memberPackage.message}
                </p>
              )}
              <label htmlFor="small-package" className="flex items-center pb-3">
                <input
                  type="radio"
                  id="small-package"
                  name="memberPackage"
                  value="small"
                  {...register('memberPackage', {
                    required: 'Please indicate which package you would like',
                  })}
                  className="form-radio text-blue-800 my-2 mr-3 h-5 w-5 border border-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition duration-150 ease-in-out"
                />
                Professional Development Package (1-5) - $350.00 (Up to 5
                Members)
              </label>
              <label htmlFor="large-package" className="flex items-center">
                <input
                  type="radio"
                  id="large-package"
                  name="memberPackage"
                  value="large"
                  {...register('memberPackage', {
                    required: 'Please indicate which package you would like',
                  })}
                  className="form-radio text-blue-800 my-2 mr-3 h-5 w-5 border border-blue-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition duration-150 ease-in-out"
                />
                Professional Development Package (6-12) - $500.00 (Up to 12
                Members)
              </label>
            </div>
            {watchSelectedPackage !== false && (
              <div className="p-4 border-2 border-blue-500 border-dotted rounded-md">
                <h3 className="font-semibold text-lg text-blue-800">
                  Step 2: Tell Us Who Is Registering:
                </h3>
                <p className="text-sm font-medium">
                  Please add the member details below.
                </p>

                {Array.from([1, 2, 3, 4, 5]).map((a) => {
                  return (
                    <RegistrantInput key={a} index={a} register={register} />
                  )
                })}

                {watchSelectedPackage === 'large' &&
                  Array.from([6, 7, 8, 9, 10, 11, 12]).map((a) => {
                    return (
                      <RegistrantInput key={a} index={a} register={register} />
                    )
                  })}
              </div>
            )}
            {watchSelectedPackage !== false && (
              <div className="p-4 border-2 border-blue-600 border-dotted rounded-md">
                <h3 className="font-semibold text-lg text-blue-800">
                  Step 3: Tell Us About Your District/Organization:
                </h3>
                <p className="text-sm font-medium">
                  Please add the district/organization details below. <br />
                  Then send the purchase order to (our tax id is located at the
                  bottom of every page):
                </p>
                <div id="contact-info" className="text-left mt-4 ml-6 text-sm">
                  <p>PO Box 549</p>
                  <p>Neptune, NJ 07754</p>
                </div>
                <label htmlFor="leaName" className="block mt-6 ml-6">
                  <h3 className="font-semibold text-lg text-blue-800">
                    A) Name of School District/Organization:
                  </h3>
                  <input
                    type="text"
                    name="leaName"
                    id="leaName"
                    placeholder="Enter the school district/organization name here..."
                    {...register('leaName', {
                      required: 'District/Organization name is required.',
                    })}
                    className="form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition duration-150 ease-in-out"
                  />
                  {errors.leaName && (
                    <p className="text-red-700">
                      &uarr; {errors.leaName.message}
                    </p>
                  )}
                </label>
                <label htmlFor="billingAddress" className="block mt-6 ml-6">
                  <h3 className="font-semibold text-lg text-blue-800">
                    B) Billing Address:
                  </h3>
                  <input
                    type="text"
                    name="billingAddress"
                    id="billingAddress"
                    placeholder="Example: 540 Broadway Long Branch, NJ 07740"
                    {...register('billingAddress', {
                      required: 'Billing address is required.',
                    })}
                    className="form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition duration-150 ease-in-out"
                  />
                  {errors.billingAddress && (
                    <p className="text-red-700">
                      &uarr; {errors.billingAddress.message}
                    </p>
                  )}
                </label>
                <label htmlFor="county" className="block mt-6 ml-6">
                  <h3 className="font-semibold text-lg text-blue-800">
                    C) Select your county
                  </h3>
                  <select
                    name="county"
                    id="county"
                    {...register('county', {
                      required: 'A county is required.',
                      pattern: '^((?!Select).)*$',
                    })}
                    className="form-select text-slate-500 block w-full mb-3 px-0.5 font-medium border-b-2 border-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition duration-150 ease-in-out"
                  >
                    {counties.map((county) => {
                      return (
                        <option key={county} value={county}>
                          {county}
                        </option>
                      )
                    })}
                  </select>
                </label>
                <label htmlFor="purchaseOrder" className="block mt-6 ml-6">
                  <h3 className="font-semibold text-lg text-blue-800">
                    D) Enter Purchase Order # or Leave Blank for Will Follow:
                  </h3>
                  <input
                    type="text"
                    name="purchaseOrder"
                    id="purchaseOrder"
                    placeholder='Leave Blank for "Will Follow"'
                    {...register('purchaseOrder')}
                    className="form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition duration-150 ease-in-out"
                  />
                </label>
                <label
                  htmlFor="accountsPayableName"
                  className="block mt-6 ml-6"
                >
                  <h3 className="font-semibold text-lg text-blue-800">
                    E) Name of Accounts Payable Contact:
                  </h3>
                  <input
                    type="text"
                    name="accountsPayableName"
                    id="accountsPayableName"
                    placeholder="Enter the full name accounts payable contact"
                    {...register('accountsPayableName', {
                      required: 'Accounts Payable Name Required',
                    })}
                    className="form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition duration-150 ease-in-out"
                  />
                  {errors.accountsPayableName && (
                    <p className="text-red-700">
                      &uarr; {errors.accountsPayableName.message}
                    </p>
                  )}
                </label>
                <label
                  htmlFor="accountsPayableEmail"
                  className="block mt-6 ml-6"
                >
                  <h3 className="font-semibold text-lg text-blue-800">
                    F) Email of Accounts Payable Contact:
                  </h3>
                  <input
                    type="email"
                    name="accountsPayableEmail"
                    id="accountsPayableEmail"
                    placeholder="email@accountspayable.com"
                    {...register('accountsPayableEmail', {
                      required: 'Accounts Payable Email Required',
                    })}
                    className="form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition duration-150 ease-in-out"
                  />
                  {errors.accountsPayableEmail && (
                    <p className="text-red-700">
                      &uarr; {errors.accountsPayableEmail.message}
                    </p>
                  )}
                </label>
              </div>
            )}
            {watchSelectedPackage !== false && (
              <>
                <input
                  type="submit"
                  value="Submit"
                  disabled={disabled}
                  className={`w-1/3 px-6 py-3 mt-6 font-medium rounded-md text-white bg-blue-700 ${
                    disabled && ` opacity-40 text-slate-50 `
                  } transition duration-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm ease-in-out`}
                />
                <ReCAPTCHA
                  sitekey={`6LeIMHIbAAAAAF-Eu5prLZNWXnwaadSsV8OYN1mP`}
                  size="invisible"
                  ref={reRef}
                />
              </>
            )}
          </form>
          {recaptchaPassed === false && (
            <p className="text-center text-red-600 text-xl border border-red-600 p-4 rounded-md mt-6">
              Oops! It looks like Google blocked your submission because it
              thinks you are a robot. Your submission was not sent to us.
            </p>
          )}
        </section>
      </div>
    </Layout>
  )
}

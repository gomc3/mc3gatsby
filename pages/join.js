import Head from 'next/head'
import * as React from 'react'
import Layout from '../components/Layout'
import { createClient } from '../prismicio'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import Icon from '../components/Icon'
import RegistrantInput from '../components/Registrant'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { counties } from '../data'

const JoinPage = ({ page, navigation, siteMetadata, footer }) => {
  const {
    data: {
      canonicalurl,
      metadescription,
      metaimage,
      privacyreminder,
      title,
      twitterimage,
      folderid,
    },
  } = page
  const {
    data: {
      address,
      sitedescription,
      sitemetaimage,
      sitetitle,
      sitetwitterimage,
      taxid,
    },
  } = siteMetadata
  const [disabled, setDisabled] = React.useState(false)
  const [formComplete, setFormComplete] = React.useState(false)
  const [recaptchaPassed, setRecaptchaPassed] = React.useState(null)
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

  const onSubmit = async data => {
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
      data.folderId = folderid
      await fetch(`/api/joinmc3`, {
        method: `POST`,
        headers: {
          'content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
      }).then(res => {
        res.json()
        if (res.status === 200) {
          console.log(res.json())
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
  /**
   * DEFINE TEMPLATES
   */
  const templates = {
    heading1: ({ node, children }) => (
      <h1 className="my-2 inline-block text-3xl font-bold text-blue-700 sm:my-4 sm:text-4xl lg:my-6 lg:text-5xl">
        {children}
      </h1>
    ),
    paragraph: ({ node, children }) => (
      <p className="prose mt-2 max-w-screen-sm sm:mt-4 md:prose-lg lg:prose-xl lg:mt-6">
        {children}
      </p>
    ),
    hyperlink: ({ node, children }) => (
      <PrismicLink field={node.data} className="text-blue-700">
        {children}
      </PrismicLink>
    ),
  }
  return (
    <Layout
      {...siteMetadata}
      navigation={navigation.data.menuitems}
      path={page.url}
      footer={footer}
    >
      <Head>
        <title>{`${title[0].text} · ${sitetitle[0].text}`}</title>
        <link rel="canonical" href={canonicalurl} />
        <meta name="description" content={metadescription || sitedescription} />
        <meta
          property="og:description"
          content={metadescription || sitedescription}
        />
        <meta property="og:url" content={canonicalurl} />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content={metaimage.url || sitemetaimage.url}
        />

        <meta property="twitter:card" content="summary" />

        <meta
          property="twitter:image"
          content={twitterimage.url || sitetwitterimage.url}
        />
      </Head>
      <div className="mx-auto mb-12 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <header className="mb-2 flex flex-col items-center sm:mb-4 lg:mb-6">
          <div className="flex items-center">
            <Icon
              name="Plus"
              className="inline-block text-3xl text-blue-700 sm:text-5xl lg:text-6xl"
            />
            <PrismicRichText field={page.data.title} components={templates} />
          </div>
          <PrismicRichText
            field={page.data.pagedescription}
            components={templates}
          />
          <div
            id="contact-info"
            className="my-4 text-center text-sm md:my-6 lg:my-8 xl:my-10"
          >
            <PrismicRichText field={address} />
            <p>Tax ID: {taxid}</p>
          </div>
          <div className="max-w-lg">
            <PrismicRichText field={privacyreminder} components={templates} />
          </div>
        </header>
        <hr />
        <section className="mx-auto my-3 max-w-screen-sm sm:my-4 md:my-5 lg:my-6">
          {recaptchaPassed === false && (
            <p className="mb-6 rounded-md border border-red-600 p-4 text-center text-xl text-red-600">
              Oops! It looks like Google blocked your submission because it
              thinks you are a robot. Your submission was not sent to us.
            </p>
          )}
          {formComplete && (
            <>
              <h2 className="my-4 text-center text-2xl  text-blue-700 md:my-6 lg:my-8 xl:my-10">
                Registration Successfully Sent
              </h2>
              <button
                onClick={() => {
                  setFormComplete(!formComplete)
                  setValue('memberPackage', false)
                }}
                className="btn btn-secondary mx-auto block text-white focus:outline-none focus:ring-4 focus:ring-yellow-300 active:bg-blue-600"
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
            <div className="rounded-md border-2 border-dotted border-blue-400 p-4">
              <h3 className="text-lg font-semibold text-blue-800">
                Step 1: Please select a Membership Package:
              </h3>
              <p className="mt-4 mb-6 text-sm">
                We offer two membership packages.
              </p>
              <ol className="ml-8 list-decimal">
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
                  className="form-radio my-2 mr-3 h-5 w-5 border border-blue-700 text-blue-800 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
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
                  className="form-radio my-2 mr-3 h-5 w-5 border border-blue-800 text-blue-800 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
                />
                Professional Development Package (6-12) - $500.00 (Up to 12
                Members)
              </label>
            </div>
            {watchSelectedPackage !== false && (
              <div className="rounded-md border-2 border-dotted border-blue-500 p-4">
                <h3 className="text-lg font-semibold text-blue-800">
                  Step 2: Tell Us Who Is Registering:
                </h3>
                <p className="text-sm font-medium">
                  Please add the member details below.
                </p>

                {Array.from([1, 2, 3, 4, 5]).map(a => {
                  return (
                    <RegistrantInput key={a} index={a} register={register} />
                  )
                })}

                {watchSelectedPackage === 'large' &&
                  Array.from([6, 7, 8, 9, 10, 11, 12]).map(a => {
                    return (
                      <RegistrantInput key={a} index={a} register={register} />
                    )
                  })}
              </div>
            )}
            {watchSelectedPackage !== false && (
              <div className="rounded-md border-2 border-dotted border-blue-600 p-4">
                <h3 className="text-lg font-semibold text-blue-800">
                  Step 3: Tell Us About Your District/Organization:
                </h3>
                <p className="text-sm font-medium">
                  Please add the district/organization details below. <br />
                  Then send the purchase order to (our tax id is located at the
                  bottom of every page):
                </p>
                <div id="contact-info" className="mt-4 ml-6 text-left text-sm">
                  <p>PO Box 549</p>
                  <p>Neptune, NJ 07754</p>
                </div>
                <label htmlFor="leaName" className="mt-6 ml-6 block">
                  <h3 className="text-lg font-semibold text-blue-800">
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
                    className="form-input my-3 block w-full max-w-sm rounded-sm border-b-2 border-slate-200 px-0.5 font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  />
                  {errors.leaName && (
                    <p className="text-red-700">
                      &uarr; {errors.leaName.message}
                    </p>
                  )}
                </label>
                <label htmlFor="billingAddress" className="mt-6 ml-6 block">
                  <h3 className="text-lg font-semibold text-blue-800">
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
                    className="form-input my-3 block w-full max-w-sm rounded-sm border-b-2 border-slate-200 px-0.5 font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  />
                  {errors.billingAddress && (
                    <p className="text-red-700">
                      &uarr; {errors.billingAddress.message}
                    </p>
                  )}
                </label>
                <label htmlFor="county" className="mt-6 ml-6 block">
                  <h3 className="text-lg font-semibold text-blue-800">
                    C) Select your county
                  </h3>
                  <select
                    name="county"
                    id="county"
                    {...register('county', {
                      required: 'A county is required.',
                      pattern: '^((?!Select).)*$',
                    })}
                    className="form-select mb-3 block w-full rounded-sm border-b-2 border-slate-200 px-0.5 font-medium text-slate-500 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  >
                    {counties.map(county => {
                      return (
                        <option key={county} value={county}>
                          {county}
                        </option>
                      )
                    })}
                  </select>
                </label>
                <label htmlFor="purchaseOrder" className="mt-6 ml-6 block">
                  <h3 className="text-lg font-semibold text-blue-800">
                    D) Enter Purchase Order # or Leave Blank for Will Follow:
                  </h3>
                  <input
                    type="text"
                    name="purchaseOrder"
                    id="purchaseOrder"
                    placeholder='Leave Blank for "Will Follow"'
                    {...register('purchaseOrder')}
                    className="form-input my-3 block w-full max-w-sm rounded-sm border-b-2 border-slate-200 px-0.5 font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  />
                </label>
                <label
                  htmlFor="accountsPayableName"
                  className="mt-6 ml-6 block"
                >
                  <h3 className="text-lg font-semibold text-blue-800">
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
                    className="form-input my-3 block w-full max-w-sm rounded-sm border-b-2 border-slate-200 px-0.5 font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  />
                  {errors.accountsPayableName && (
                    <p className="text-red-700">
                      &uarr; {errors.accountsPayableName.message}
                    </p>
                  )}
                </label>
                <label
                  htmlFor="accountsPayableEmail"
                  className="mt-6 ml-6 block"
                >
                  <h3 className="text-lg font-semibold text-blue-800">
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
                    className="form-input my-3 block w-full max-w-sm rounded-sm border-b-2 border-slate-200 px-0.5 font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
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
                  className={`btn btn-secondary mt-6 w-1/3 rounded text-white ${
                    disabled && ` text-slate-50 opacity-40 `
                  } rounded-sm transition duration-300 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-yellow-300`}
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
            <p className="mt-6 rounded-md border border-red-600 p-4 text-center text-xl text-red-600">
              Oops! It looks like Google blocked your submission because it
              thinks you are a robot. Your submission was not sent to us.
            </p>
          )}
        </section>
      </div>
    </Layout>
  )
}
export default JoinPage

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')
  const page = await client.getSingle('joinpage')
  const navigation = await client.getSingle('mainmenu')
  const footer = await client.getSingle('footer')

  return {
    props: {
      navigation,
      page,
      siteMetadata,
      footer,
    },
    revalidate: 60,
  }
}

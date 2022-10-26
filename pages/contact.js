import Head from 'next/head'
import * as React from 'react'
import Layout from '../components/Layout'
import { createClient } from '../prismicio'
import { PrismicRichText } from '@prismicio/react'
import Icon from '../components/Icon'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

const ContactPage = ({ page, navigation, siteMetadata, footer }) => {
  const {
    data: {
      canonicalurl,
      metadescription,
      metaimage,
      pagedescription,
      title,
      twitterimage,
    },
  } = page
  const {
    data: { sitedescription, sitemetaimage, sitetitle, sitetwitterimage },
  } = siteMetadata
  const [disabled, setDisabled] = React.useState(false)
  const [formComplete, setFormComplete] = React.useState(false)
  const [recaptchaPassed, setRecaptchaPassed] = React.useState(null)
  const selectReason = [
    'Agenda Item',
    'Billing',
    'Professional Development',
    'Volunteer to Write a Blog Post',
    'Volunteer to Present',
    'Website',
    'Other...',
  ]
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

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
    try {
      await fetch(`/api/contactmc3`, {
        method: `POST`,
        headers: {
          'content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
      }).then(res => {
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
      <p className="text-md mt-2 max-w-md italic sm:mt-4 lg:mt-6">{children}</p>
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
        <link
          rel="canonical"
          href={canonicalurl || 'https://gomc3.org/contact'}
        />
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
      <div className="mx-auto max-w-screen-xl">
        <header className="mb-2 flex flex-col items-center px-4 sm:mb-4 sm:px-6 lg:mb-6 lg:px-8">
          <div className="flex items-center">
            <Icon
              name="Chat"
              className="inline-block text-3xl text-blue-700 sm:text-5xl lg:text-6xl"
            />
            <PrismicRichText field={title} components={templates} />
          </div>
          <PrismicRichText field={pagedescription} components={templates} />
        </header>
        <hr />
        <section className="mx-auto my-2 grid max-w-screen-sm grid-cols-1 gap-2 px-4 sm:my-4 sm:px-6 lg:my-6 lg:px-8">
          {recaptchaPassed === false && (
            <p className="rounded-md border border-red-600 p-4 text-center text-xl text-red-600">
              Oops! It looks like Google blocked your submission because it
              thinks you are a robot. Your submission was not sent to us.
            </p>
          )}
          {formComplete && (
            <button
              onClick={() => setFormComplete(!formComplete)}
              className="focus:shadow-outline-blue mx-auto block items-center justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-center text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-800 focus:border-blue-600 focus:outline-none active:bg-blue-600"
            >
              Contact Us Again
            </button>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${formComplete && `hidden`} mx-auto max-w-lg`}
          >
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-blue-800"
            >
              What is your name?
            </label>
            <input
              name="name"
              type="text"
              placeholder="Example: Jane Appleseed"
              {...register('name', {
                required: 'Your name is required.',
              })}
              className="form-input mb-3 block w-full rounded-sm border-b-2 border-slate-200 px-0.5 font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
            />
            {errors.name && (
              <p className="text-red-700"> &uarr; {errors.name.message}</p>
            )}
            <label
              htmlFor="email"
              className="text-lg font-semibold text-blue-800"
            >
              What is your email address?
            </label>
            <input
              name="email"
              type="email"
              placeholder="Example: jappleseed@gomc3.org"
              {...register('email', {
                required: 'Your email address is required.',
              })}
              className="form-input mb-3 block w-full rounded-sm border-b-2 border-slate-200 px-0.5 font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
            />
            {errors.email && (
              <p className="text-red-700"> &uarr; {errors.email.message}</p>
            )}
            <label
              htmlFor="reason"
              className="text-lg font-semibold text-blue-800"
            >
              What is your reason for contacting us today?
            </label>
            <select
              name="reason"
              {...register('reason', {
                required: 'A reason is required.',
                pattern: '^((?!Select).)*$',
              })}
              className="form-select mb-3 block w-full rounded-sm border-b-2 border-slate-200 px-0.5 font-medium text-slate-500 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              {selectReason.map((reason, i) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
            <label
              htmlFor="question"
              className="text-lg font-semibold text-blue-800"
            >
              How can we help you?
            </label>
            <textarea
              name="question"
              placeholder="Enter your question or comment here..."
              className="form-textarea mb-3 block w-full rounded-sm border-b-2 border-slate-200 px-0.5 font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
              {...register('question', {
                required: 'Your question/comment is required.',
              })}
            />
            {errors.question && (
              <p className="text-red-700"> &uarr; {errors.question.message}</p>
            )}
            <input
              name="submit"
              type="submit"
              value="Submit"
              className={`btn btn-secondary mx-auto my-4 block w-32 rounded text-white md:my-6 lg:my-8 xl:my-10${
                disabled && ` text-slate-50 opacity-40 `
              } rounded-sm transition duration-150 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-yellow-300`}
            />
            <ReCAPTCHA
              sitekey={`6LeIMHIbAAAAAF-Eu5prLZNWXnwaadSsV8OYN1mP`}
              size="invisible"
              ref={reRef}
            />
          </form>
        </section>
      </div>
    </Layout>
  )
}
export default ContactPage

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')
  const page = await client.getSingle('contactpage')
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

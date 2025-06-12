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
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdrx3oU1NBlVElEbR47vgc8n4oWizxUh9vW0CXoJaWR1mh5gw/viewform?embedded=true" width="640" height="2824" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          
          
          
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

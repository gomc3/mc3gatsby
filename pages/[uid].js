import * as React from 'react'
import { SliceZone, PrismicRichText } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/layout'

const Page = ({ page, navigation, siteMetadata, footer }) => {
  const components = {
    heading1: ({ node, children }) => {
      return (
        <h1 className="prose mx-auto my-4 px-4 text-center text-2xl md:prose-lg md:my-6 md:px-0 md:text-3xl lg:prose-xl lg:my-8 lg:text-4xl xl:prose-2xl xl:my-10 xl:text-5xl">
          {children}
        </h1>
      )
    },
  }
  const router = useRouter()
  // let sliceTypes = []
  // page.data.slices.forEach(slice => sliceTypes.push(slice.slice_type))
  // const formOnPage = sliceTypes.indexOf('mailer_lite_sign_up') > 0
  // React.useEffect(() => {
  //   if (formOnPage) {
  //     const recaptchaScript = document.createElement('script')
  //     recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=6LdegF8iAAAAADDOMwVAXSvPRZwr2GC_O_5cxNgs`
  //     recaptchaScript.async = true
  //     document.head.appendChild(recaptchaScript)
  //     return () => {
  //       // Get all script tags: returns HTMLcollection
  //       const scripts = document.getElementsByTagName('script')
  //       // Loop through the HTMLcollection (array-like but not array)
  //       for (var i = 0; i < scripts.length; i++) {
  //         // find script whose src value includes "recaptcha/releases"
  //         // this script is added when main recaptcha script is loaded

  //         if (
  //           scripts.item(i).attributes.getNamedItem('src') &&
  //           scripts
  //             .item(i)
  //             .attributes.getNamedItem('src')
  //             .value.includes('recaptcha/releases')
  //         ) {
  //           document.head.removeChild(scripts.item(i)) // remove script from head
  //         }
  //       }
  //       document.head.removeChild(recaptchaScript) // remove main recaptcha script from head
  //       // remove the recaptcha badge from the bottom right corner
  //       let badge = document.querySelector('.grecaptcha-badge')
  //       if (badge) {
  //         badge.parentElement.remove()
  //       }
  //     }
  //   }
  // }, [formOnPage])

  return (
    <Layout
      {...siteMetadata}
      navigation={navigation.data.menuitems}
      footer={footer}
    >
      <Head>
        <title>{`${page.data.title[0].text} • `}</title>
        <link rel="canonical" href={`https://www.gomc3.org${router.asPath}`} />
        <meta name="description" content={page.data.metadescription || ''} />
        <meta
          property="og:description"
          content={page.data.metadescription || ''}
        />
        <meta property="og:url" content="https://www.gomc3.org" />
        <meta property="og:type" content="website" />
        {page.data.pagemetaimage && (
          <meta property="og:image" content={page.data.metaimage.url} />
        )}
        <meta property="twitter:card" content="summary" />
        {page.data.metaimage && (
          <meta property="twitter:image" content={page.data.twitterimage.url} />
        )}
      </Head>
      <PrismicRichText field={page.data.title} components={components} />

      <div className="mb-2 min-h-[3px] rounded bg-gradient-to-r from-blue-100 to-transparent md:mb-4 lg:mb-6 xl:mb-8" />
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
    </Layout>
  )
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('page', params.uid)
  const navigation = await client.getSingle('mainmenu')
  const siteMetadata = await client.getSingle('sitemetadata')
  const footer = await client.getSingle('footer')
  return {
    props: {
      navigation,
      page,
      siteMetadata,
      footer,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('page')
  return {
    paths: pages.map(page => prismicH.asLink(page)),
    fallback: false,
  }
}

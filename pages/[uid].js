import * as React from 'react'
import { SliceZone, PrismicRichText } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/Layout'
import Icon from '../components/Icon'

const Page = ({ page, navigation, siteMetadata, footer }) => {
  const templates = {
    heading1: ({ node, children }) => {
      return (
        <h1 className="my-2 inline-block text-3xl font-bold text-blue-700 sm:my-4 sm:text-4xl lg:my-6 lg:text-5xl">
          {children}
        </h1>
      )
    },
  }
  return (
    <Layout
      {...siteMetadata}
      navigation={navigation.data.menuitems}
      footer={footer}
      path={page.url}
    >
      <Head>
        <title>{`${page.data.title[0].text} • ${siteMetadata.data.sitetitle[0].text}`}</title>
        <meta name="robots" content="noindex,follow" />
        <link
          rel="canonical"
          href={page.data.canonicalurl || `https://www.gomc3.org${page.url}`}
        />
        <meta name="description" content={page.data.metadescription || ''} />
        <meta
          property="og:description"
          content={page.data.metadescription || ''}
        />
        <meta property="og:url" content={`https://www.gomc3.org${page.url}`} />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content={
            page.data.metaimage.url || siteMetadata.data.sitemetaimage.url
          }
        />

        <meta property="twitter:card" content="summary" />

        <meta
          property="twitter:image"
          content={
            page.data.twitterimage.url || siteMetadata.data.sitetwitterimage.url
          }
        />
      </Head>
      <header className="flex items-center justify-center py-4 text-center md:py-6 lg:py-8 xl:py-10 ">
        {page.data.icon ? (
          <Icon
            name={page.data.icon}
            className="inline-block text-3xl text-blue-700 sm:text-5xl lg:text-6xl"
          />
        ) : null}
        <PrismicRichText field={page.data.title} components={templates} />
      </header>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('page', params.uid, {
    fetchLinks: [
      'executiveteam.executiveteamtitle',
      'executiveteam.executiveteammembers',
      'executivemember.memberfullname',
      'executivemember.memberlink',
      'executivemember.memberprofileimage',
      'executiverole.rolenickname',
    ],
  })
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

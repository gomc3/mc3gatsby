import * as React from 'react'
import { SliceZone } from '@prismicio/react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { createClient } from '../prismicio'
import { components } from '../slices'

export default function Home({ page, navigation, siteMetadata, footer }) {
  return (
    <Layout
      {...siteMetadata}
      navigation={navigation.data.menuitems}
      path={page.url}
      footer={footer}
    >
      <Head>
        <title>{`${page.data.homepagetitle[0].text} · ${siteMetadata.data.sitetitle[0].text}`}</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://www.gomc3.org" />
        <meta
          name="description"
          content={
            page.data.homepagemetadescription || siteMetadata.data.description
          }
        />
        <meta
          property="og:description"
          content={
            page.data.homepagemetadescription || siteMetadata.data.description
          }
        />
        <meta property="og:url" content="https://www.gomc3.org" />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content={
            page.data.homepagemetaimage.url ||
            siteMetadata.data.sitemetaimage.url
          }
        />

        <meta property="twitter:card" content="summary" />

        <meta
          property="twitter:image"
          content={
            page.data.homepagetwitterimage.url ||
            siteMetadata.data.sitetwitterimage.url
          }
        />
      </Head>
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-0">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Layout>
  )
}
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')
  const page = await client.getSingle('homepage', {
    // fetchLinks: [
    //   'series.seriesname',
    //   'series.boxsetlink',
    //   'series.seriesimage',
    // ],
  })
  // const sliceTypes = [
  //   ...new Set(page.data.slices.map(slice => slice.slice_type)),
  // ]
  const navigation = await client.getSingle('mainmenu')
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

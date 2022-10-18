import * as React from 'react'
import { SliceZone } from '@prismicio/react'
import Head from 'next/head'
import { createClient } from '../prismicio'
import { components } from '../slices'

export default function Home({ page, navigation, settings }) {
  return (
    <>
      {/* <Head>
        <title></title>
        <link rel="canonical" href="https://www.gomc3.org" />
        <meta name="description" content={page.data.homepagemetadescription} />
        <meta
          property="og:description"
          content={page.data.homepagemetadescription}
        />
        <meta property="og:url" content="https://www.gomc3.org" />
        <meta property="og:type" content="website" />
        {page.data.homepagemetaimage && (
          <meta property="og:image" content={page.data.homepagemetaimage.url} />
        )}
        <meta property="twitter:card" content="summary" />
        {page.data.homepagemetaimage && (
          <meta
            property="twitter:image"
            content={page.data.homepagemetaimage.url}
          />
        )}
      </Head> */}
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-0">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </>
  )
}
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('homepage', {
    // fetchLinks: [
    //   'series.seriesname',
    //   'series.boxsetlink',
    //   'series.seriesimage',
    // ],
  })
  // const navigation = await client.getSingle('main_navigation')

  return {
    props: {
      // navigation,
      page,
    },
  }
}

import { SliceZone, PrismicRichText } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import Layout from '../../components/Layout'

const Post = ({ page, siteMetadata, navigation, footer }) => {
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
        <title>{`${prismicH.asText(page.data.title)} • ${prismicH.asText(
          siteMetadata.data.sitetitle
        )}`}</title>
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
        <PrismicRichText field={page.data.title} components={templates} />
      </header>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
}
export default Post

/**
 * Get Props
 */
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('post', params.uid, {
    fetchLinks: 'tag.title',
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
  const posts = await client.getAllByType('post')

  return {
    paths: posts.map(post => prismicH.asLink(post)),
    fallback: false,
  }
}

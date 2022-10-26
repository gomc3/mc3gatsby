import * as React from 'react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Icon from '../../components/Icon'
import { predicate } from '@prismicio/client'
import { createClient } from '../../prismicio'
import BlogCard from '../../components/BlogCard'

const BlogIndex = ({ page, posts, navigation, siteMetadata, footer }) => {
  const templates = {
    heading1: ({ node, children }) => (
      <h1 className="my-2 inline-block text-3xl font-bold text-blue-700 sm:my-4 sm:text-4xl lg:my-6 lg:text-5xl">
        {children}
      </h1>
    ),
  }
  return (
    <Layout
      {...siteMetadata}
      navigation={navigation.data.menuitems}
      path={'/ignite'}
      footer={footer}
    >
      <Head>
        <title>{`Ignites · ${prismicH.asText(
          siteMetadata.data.sitetitle
        )}`}</title>
        <link rel="canonical" href="https://www.gomc3.org/blog" />
        <meta name="description" content={siteMetadata.data.description} />
        <meta
          property="og:description"
          content={siteMetadata.data.description}
        />
        <meta property="og:url" content="https://www.gomc3.org" />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content={siteMetadata.data.sitemetaimage.url}
        />

        <meta property="twitter:card" content="summary" />

        <meta
          property="twitter:image"
          content={siteMetadata.data.sitetwitterimage.url}
        />
      </Head>
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-0">
        <header className="flex items-center justify-center py-4 text-center md:py-6 lg:py-8 xl:py-10 ">
          <Icon
            name="Sun"
            className="inline-block text-3xl text-blue-700 sm:text-5xl lg:text-6xl"
          />
          <h1 className="my-2 inline-block text-3xl font-bold text-blue-700 sm:my-4 sm:text-4xl lg:my-6 lg:text-5xl">
            Ignites
          </h1>
        </header>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-y-4 px-4">
          <ol>
            {posts.length &&
              posts.map(post => {
                return <BlogCard key={post.id} {...post} />
              })}
          </ol>
        </div>
      </div>
    </Layout>
  )
}
export default BlogIndex
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const posts = await client.getAllByType('post', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    fetchLinks: 'tag.title',
    predicates: [predicate.at('document.tags', ['ignite'])],
  })
  const siteMetadata = await client.getSingle('sitemetadata')
  const navigation = await client.getSingle('mainmenu')
  const footer = await client.getSingle('footer')

  return {
    props: {
      navigation,
      posts,
      siteMetadata,
      footer,
    },
  }
}

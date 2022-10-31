import * as React from 'react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Icon from '../../components/Icon'
import { PrismicRichText } from '@prismicio/react'
import { predicate } from '@prismicio/client'
import { createClient } from '../../prismicio'
import BlogCard from '../../components/BlogCard'

const BlogIndex = ({ page, posts, navigation, siteMetadata, footer }) => {
  const templates = {
    heading1: ({ node, children }) => (
      <h1 className="my-2 text-3xl font-bold text-blue-700 sm:my-4 sm:text-4xl lg:my-6 lg:text-5xl">
        {children}
      </h1>
    ),
    heading2: ({ node, children }) => (
      <h2 className="text-lg text-gray-700">{children}</h2>
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
        <title>{`${prismicH.asText(page.data.title)} · ${prismicH.asText(
          siteMetadata.data.sitetitle
        )}`}</title>
        <link rel="canonical" href="https://gomc3.org/blog" />
        <meta name="description" content={siteMetadata.data.sitedescription} />
        <meta
          property="og:description"
          content={siteMetadata.data.sitedescription}
        />
        <meta property="og:url" content="https://gomc3.org" />
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
        <header className="flex flex-col items-center justify-center py-4 text-center md:py-6 lg:py-8 xl:py-10 ">
          <div className="flex items-center">
            <Icon
              name="Sun"
              className="inline-block text-3xl text-blue-700 sm:text-5xl lg:text-6xl"
            />
            <PrismicRichText field={page.data.title} components={templates} />
          </div>
          <PrismicRichText
            field={page.data.description}
            components={templates}
          />
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
  const page = await client.getSingle('ignitepage')
  const siteMetadata = await client.getSingle('sitemetadata')
  const navigation = await client.getSingle('mainmenu')
  const footer = await client.getSingle('footer')

  return {
    props: {
      navigation,
      page,
      posts,
      siteMetadata,
      footer,
    },
  }
}

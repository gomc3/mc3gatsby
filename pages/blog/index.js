import * as React from 'react'
import * as prismicH from '@prismicio/helpers'
import useSWR from 'swr'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Icon from '../../components/Icon'
import { createClient } from '../../prismicio'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import BlogCard from '../../components/BlogCard'

const MorePosts = ({ index }) => {
  const { data, error } = useSWR(
    `https://gomc3.cdn.prismic.io/api/v2/documents/search?ref=Y1fA9xEAACEA-FBj&q=%5B%5Bat%28document.type%2C+%22post%22%29%5D%5D&orderings=%5Bdocument.first_publication_date+desc%5D&page=${index}&pageSize=1&fetchLinks=tag.title`,
    url => fetch(url).then(res => res.json())
  )

  if (error)
    return (
      <p className="prose prose-xl mx-auto">
        We are very sorry, but it looks like we could not retrieve more posts.
        Please contact us and let us know you received this error
      </p>
    )
  if (!data) return <div>Loading...</div>

  const { results } = data
  return results.map(post => {
    return <BlogCard key={post.id} {...post} />
  })
}

const BlogIndex = ({ page, posts, navigation, siteMetadata, footer }) => {
  const { results, total_pages } = posts
  const [pageIndex, setPageIndex] = React.useState(1)
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
      path={'/blog'}
      footer={footer}
    >
      <Head>
        <title>{`${prismicH.asText(page.data.title)} · ${prismicH.asText(
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
            name="Newspaper"
            className="inline-block text-3xl text-blue-700 sm:text-5xl lg:text-6xl"
          />
          <PrismicRichText field={page.data.title} components={templates} />
        </header>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-y-4 px-4">
          <ol>
            {results.length &&
              results.map(post => {
                return <BlogCard key={post.id} {...post} tags={post.tags} />
              })}
            {pageIndex > 1 && <MorePosts index={pageIndex} />}
          </ol>
        </div>
        <div className="mx-auto my-4 max-w-xl text-center md:my-6 lg:my-8 xl:my-10">
          {total_pages > 1 && (
            <p className="text-xs">
              Page {pageIndex} of {total_pages}
            </p>
          )}
          {pageIndex < total_pages && (
            <button
              className="btn btn-accent my-8 w-40"
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Load More Posts
            </button>
          )}
        </div>
      </div>
    </Layout>
  )
}
export default BlogIndex
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const posts = await client.getByType('post', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'asc',
    },
    pageSize: 10,
    page: 1,
  })
  const page = await client.getSingle('blogpage')
  const siteMetadata = await client.getSingle('sitemetadata')
  const navigation = await client.getSingle('mainmenu')
  const footer = await client.getSingle('footer')

  return {
    props: {
      navigation,
      posts,
      page,
      siteMetadata,
      footer,
    },
  }
}

import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const postQuery = graphql`
  query Post($path: String!) {
    post: googleDocs(slug: { eq: $path }) {
      name
      slug
      cover {
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
      childMdx {
        body
        timeToRead
        excerpt
      }
      locale
      modifiedTime
    }
    site {
      siteMetadata {
        siteUrl
        siteImage
      }
    }
  }
`;

export default function PostTemplate({
  data: {
    post: {
      name,
      slug,
      cover,
      childMdx: { body, timeToRead, excerpt },
      locale,
      modifiedTime,
    },
    site: {
      siteMetadata: { siteUrl, siteImage },
    },
  },
}) {
  return (
    <Layout>
      <Seo
        title={name}
        description={excerpt}
        locale={locale}
        url={`${siteUrl}${slug}`}
        image={
          cover
            ? `${siteUrl}${getImage(cover.image).images.fallback.src}`
            : `${siteUrl}${siteImage}`
        }
      />
      <article className='text-base md:text-lg lg:text-xl'>
        <header className='relative bg-gray-900 w-screen -z-10'>
          {cover ? (
            <GatsbyImage
              image={getImage(cover.image)}
              className='inset-0 z-0 max-h-28 sm:max-h-32 md:max-h-52 lg:max-h-60 filter blur-sm'
              alt=''
            />
          ) : (
            <div className='inset-0 z-0 h-28 w-screen bg-blue-700'></div>
          )}
          <div
            className={
              cover
                ? "bg-gray-900 bg-opacity-70 absolute inset-0 flex flex-col items-center justify-center"
                : "absolute inset-0 flex flex-col items-center justify-center"
            }
          >
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold rounded-xl text-white'>
              {name}
            </h1>
            <h2 className='text-gray-50 text-sm my-1'>
              {timeToRead} minute read
            </h2>
            <h2 className='text-sm text-gray-50 my-1'>
              Last Updated:{" "}
              {new Date(modifiedTime).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h2>
          </div>
        </header>
        <div className='mx-auto max-w-screen-md py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-6 lg:px-8 prose prose-blue md:prose-lg lg:prose-xl'>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  );
}

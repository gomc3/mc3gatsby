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
      }
    }
  }
`;

export default function PostTemplate({
  data: {
    post: {
      name,
      cover,
      childMdx: { body, timeToRead },
    },
  },
}) {
  console.log(cover);
  return (
    <Layout>
      <Seo title={name} />
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
          </div>
        </header>
        <div className='mx-auto max-w-screen-md py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-6 lg:px-8'>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  );
}

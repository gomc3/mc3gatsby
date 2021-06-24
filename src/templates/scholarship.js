import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageTitle from "../components/page-title";
import { HiAcademicCap } from "react-icons/hi";

export const scholarshipQuery = graphql`
  query Scholarship($path: String!) {
    page: googleDocs(slug: { eq: $path }) {
      name
      locale
      slug
      modifiedTime
      childMdx {
        body
        excerpt
      }
    }
    site {
      siteMetadata {
        siteUrl
        siteImage
      }
    }
  }
`;

export default function Scholarship({
  data: {
    page: {
      name,
      locale,
      slug,
      modifiedTime,
      childMdx: { body, excerpt },
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
      />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <header className="mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center">
          <PageTitle
            title="Scholarship"
            icon={
              <HiAcademicCap className="text-3xl sm:text-5xl lg:text-6xl text-blue-700 mt-0 inline-block" />
            }
          >
            It's your time students! Exlpore scholarship opportunities below:
          </PageTitle>
        </header>
        <article className="mx-auto max-w-screen-md">
          <div className="flex flex-col sm:items-start sm:flex-row sm:p-2">
            <StaticImage
              src="../images/happyGrad.jpg"
              alt="graduate jumping in the air waving a peace sign while smiling"
              loading="lazy"
              placeholder="tracedSVG"
              className="rounded-md w-52 sm:w-1/3 shadow-md filter transition duration-500 ease-in-out grayscale hover:grayscale-0 transform hover:scale-105 self-center"
            />
            <div className="mt-3 sm:mt-0 sm:w-2/3 sm:pl-4 prose prose-blue lg:prose-lg">
              <h2>Upcoming Graduates...</h2>
              <p>
                <strong>We salute you!</strong> Providing you with opportunities
                to earn scholarships is one of our greatest joys.
              </p>
              <p>
                We know that making the jump from high school to college can be
                difficult. As educational leaders, it is an honor and our duty
                to help lift students like you up so that you too may reach your
                potential.
              </p>
              <p>
                We know you are busy, so we have provided step-by-step
                instructions below.{" "}
                <strong>We look forward to hearing from you!</strong>
              </p>
            </div>
          </div>
          <hr className="my-6 border-blue-200 w-2/3 mx-auto" />
          <p className="text-sm text-center mx-auto">
            Scholarship Information Last Updated{" "}
            {new Date(modifiedTime).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <div className="mx-auto max-w-screen-md py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-6 lg:px-8 prose prose-blue md:prose-lg lg:prose-xl">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </article>
      </div>
    </Layout>
  );
}

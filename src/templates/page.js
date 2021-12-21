import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const pageQuery = graphql`
  query Page($path: String!) {
    page: googleDocs(slug: { eq: $path }) {
      name
      locale
      modifiedTime
      childMdx {
        body
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

export default function PageTemplate({
  path,
  data: {
    page: { name, modifiedTime, childMdx },
  },
}) {
  return (
    <Layout path={path}>
      <Seo title={name} />

      <div className="mx-auto max-w-screen-md py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-6 lg:px-8 prose prose-blue md:prose-lg lg:prose-xl">
        <h1>{name}</h1>
        <h2 className="text-sm text-slate-600">
          Last Updated{" "}
          {new Date(modifiedTime).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h2>
        <MDXRenderer>{childMdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
}

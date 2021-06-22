import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const pageQuery = graphql`
  query Page($path: String!) {
    page: googleDocs(slug: { eq: $path }) {
      name
      childMdx {
        body
      }
    }
  }
`;

export default function PageTemplate({
  data: {
    page: { name, childMdx },
  },
}) {
  return (
    <Layout>
      <Seo title={name} />
      <h1>{name}</h1>
      <MDXRenderer>{childMdx.body}</MDXRenderer>
    </Layout>
  );
}

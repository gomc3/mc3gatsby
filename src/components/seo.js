import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`;
export default function Seo({ title, children }) {
  const { site } = useStaticQuery(query);
  const { siteTitle } = site.siteMetadata;
  return <Helmet title={`${title} | ${siteTitle}`}>{children}</Helmet>;
}

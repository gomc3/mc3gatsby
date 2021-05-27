import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

const SiteTitleQuery = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`;

export default function Layout({ children }) {
  const { site } = useStaticQuery(SiteTitleQuery);
  const { siteTitle } = site.siteMetadata;
  return (
    <>
      <Header siteTitle={siteTitle} />
      <main className="container mx-auto max-w-3xl">{children}</main>
    </>
  );
}

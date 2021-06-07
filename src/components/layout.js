import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "../components/navbar";

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
      <Navbar classes="-ml-3.5" />
      <main className="container mx-auto max-w-screen-xl">{children}</main>
    </>
  );
}

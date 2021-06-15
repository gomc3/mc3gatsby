import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const SiteTitleQuery = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`;

export default function Layout({ children, path }) {
  const { site } = useStaticQuery(SiteTitleQuery);
  const { siteTitle } = site.siteMetadata;
  return (
    <>
      <Navbar path={path} />
      <main className='mx-auto'>{children}</main>
      <Footer />
    </>
  );
}

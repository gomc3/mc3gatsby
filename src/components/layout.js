import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({ children, path }) {
  return (
    <MDXProvider
      components={{
        YouTube: (props) => (
          <div className='bg-red-500 px-3 py-5'>{JSON.stringify(props)}</div>
        ),
      }}
    >
      <Helmet htmlAttributes={{ lang: "en-US" }}></Helmet>
      <div className='flex flex-col min-h-screen space-between'>
        <Navbar path={path} />
        <main className=''>{children}</main>
        <Footer />
      </div>
    </MDXProvider>
  );
}

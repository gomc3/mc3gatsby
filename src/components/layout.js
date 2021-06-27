import React from "react";
import { MDXProvider } from "@mdx-js/react";
import YouTube from "./youtube";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({ children, path }) {
  const components = {
    YouTube: YouTube,
  };
  return (
    <MDXProvider components={components}>
      <div className='flex flex-col min-h-screen space-between'>
        <Navbar path={path} />
        <main className=''>{children}</main>
        <Footer />
      </div>
    </MDXProvider>
  );
}

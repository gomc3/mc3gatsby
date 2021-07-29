import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import YouTube from "./youtube";
import AudioFile from "./audio";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({ children, path }) {
  const components = {
    YouTube: YouTube,
    AudioFile: AudioFile,
  };
  return (
    <MDXProvider components={components} className="relative">
      <ul id="nav-access" className="relative mx-auto">
        <li>
          <a
            href="#main-content"
            className="absolute z-50 -top-20 sm:left-1/4 text-2xl text-blue-700 block w-full sm:w-1/2 text-center bg-blue-700 bg-opacity-10 transform focus:translate-y-20 transition-all duration-500 ease-in-out"
          >
            Skip to main content
          </a>
        </li>
      </ul>
      <div className="flex flex-col min-h-screen space-between">
        <Navbar path={path} />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </MDXProvider>
  );
}

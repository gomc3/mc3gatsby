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
      <ul id="nav-access" className="absolute z-50 -top-20 w-full">
        <li>
          <a
            href="#main-content"
            className="text-2xl text-blue-700 block w-full text-center bg-blue-200 bg-opacity-30 absolute transition duration-500 ease-in-out focus:top-20"
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

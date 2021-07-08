import React, { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import YouTube from "./youtube";
import AudioFile from "./audio";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({ children, path }) {
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "/mailer.js";
    document.head.appendChild(scriptTag);
  });
  const components = {
    YouTube: YouTube,
    AudioFile: AudioFile,
  };
  return (
    <MDXProvider components={components}>
      <div className="flex flex-col min-h-screen space-between">
        <Navbar path={path} />
        <main className="">{children}</main>
        <Footer />
      </div>
    </MDXProvider>
  );
}

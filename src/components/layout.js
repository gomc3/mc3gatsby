import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({ children, path }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-US" }}></Helmet>
      <div className="flex flex-col min-h-screen space-between">
        <Navbar path={path} />
        <main className="mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}

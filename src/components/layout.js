import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({ children, path }) {
  return (
    <>
      <Navbar path={path} />
      <main className='mx-auto'>{children}</main>
      <Footer />
    </>
  );
}

import React from "react";
import { Link } from "gatsby";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-gray-100 p-6 lg:p-12">
      <header className="max-w-lg mx-auto">
        <h2 className="text-center text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Are you ready to join us?
        </h2>
      </header>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Get Started
          </Link>
        </div>
        <div className="ml-3 inline-flex">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 hover:text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="mt-4 lg:mt-8 flex justify-center">
        <a href="https://twitter.com/Mc3Network" className="">
          <FaTwitter
            color="3B82F6"
            className="w-7 h-7 inline transition duration-500 ease-in-out transform hover:scale-150"
          />
        </a>
      </div>
      <nav className="mx-auto mt-3 lg:mt-6 flex justify-between max-w-lg">
        <Link
          to="/"
          className="text-gray-600 font-medium hover:text-gray-900 transition ease-in-out duration-150 "
        >
          Terms of Use
        </Link>
        <Link
          to="/"
          className="text-gray-600 font-medium hover:text-gray-900 transition ease-in-out duration-150"
        >
          Privacy Policy
        </Link>
        <Link
          to="/"
          className="text-gray-600 font-medium hover:text-gray-900 transition ease-in-out duration-150"
        >
          Leadership &amp; Contacts
        </Link>
      </nav>
    </footer>
  );
}

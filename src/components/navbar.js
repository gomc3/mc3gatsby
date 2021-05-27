import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");
    if (menuOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);
  const handleKeyPress = (event) => {
    event.charCode === 32
      ? navigate(event.target.href)
      : console.log("not spacebar or enter");
  };
  return (
    <div className="">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="w-0 flex-1 flex">
              <a className="inline-flex flex-col" href="/">
                <p className="text-2xl font-semibold text-blue-600">
                  MC<sup>3</sup>
                </p>
                <p className="text-xs">Monmouth County Curriculum Consortium</p>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100  focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Open the menu"
                aria-haspopup="true"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="root"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link
                className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
                to="/"
              >
                Calendar
              </Link>
              <Link
                className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
                to="/"
              >
                Ignite
              </Link>
              <Link
                className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
                to="/"
              >
                Scholarship
              </Link>
              <Link
                className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
                to="/"
              >
                Blog
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
              <span className="inline-flex rounded-md shadow-sm">
                <a
                  className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-teal active:bg-teal-600 transition ease-in-out duration-150"
                  href="/en-US/sign-up"
                >
                  Join MC3
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* Mobile Navigation begins here */}
        <div
          className={
            "z-10 fixed inset-0 min-h-screen transition-opacity md:hidden overflow-hidden " +
            (!menuOpen ? "hidden " : "block ")
          }
        >
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={() => setMenuOpen(!menuOpen)}
            onKeyPress={() => setMenuOpen(!menuOpen)}
            tabIndex={0}
            role="button"
            aria-label="Close menu"
          ></div>
        </div>
        <div
          className={
            "z-20 absolute top-12 inset-x-0 p-2 transition transform origin-top-right md:hidden " +
            (!menuOpen ? "hidden " : "block ")
          }
        >
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg shadow-xs bg-white">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <a href="/" className="font-semibold">
                    MC<sup>3</sup>
                  </a>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="root"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <nav className="grid gap-y-8 divide-y-2 divide-blue-200">
                    <Link
                      to="/calendar"
                      className="-m-3 p-3 flex items-center justify-center space-x-3 hover:bg-gray-50 transition ease-in-out duration-150"
                      onKeyPress={(e) => handleKeyPress(e)}
                    >
                      Calendar
                    </Link>
                    <Link
                      to="/ignite"
                      className="-m-3 p-3 flex items-center justify-center space-x-3 hover:bg-gray-50 transition ease-in-out duration-150"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      Ignite
                    </Link>
                    <Link
                      to="/scholarship"
                      className="-m-3 p-3 flex items-center justify-center space-x-3 hover:bg-gray-50 transition ease-in-out duration-150"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      Scholarship
                    </Link>
                    <Link
                      to="/blog"
                      className="-m-3 p-3 flex items-center justify-center space-x-3 hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      Blog
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <a
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600 transition ease-in-out duration-150"
                  href="/"
                >
                  Join MC<sup>3</sup>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

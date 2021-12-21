import React from "react";
import { Link } from "gatsby";
import { FaTwitter } from "react-icons/fa";
import Subscribe from "../components/subscribe";

export default function Footer() {
  return (
    <footer className=" bg-gray-100 p-6 lg:p-12 mt-auto">
      <header className="max-w-lg mx-auto"></header>
      <div className="my-3 flex flex-col items-center sm:flex-row sm:justify-center text-center space-y-12 sm:space-y-0 sm:space-x-4">
        <Link
          to="/join"
          className="px-5 py-3 text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition ease-in-out duration-150"
        >
          Become a Member
        </Link>
        <Link
          to="/contact"
          className="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 hover:text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition ease-in-out duration-150"
        >
          Contact Us
        </Link>
      </div>
      <nav className="mx-auto my-6 flex flex-col sm:flex-row justify-between  max-w-xl text-center space-y-12 sm:space-y-0">
        <Link
          to="/terms"
          className="text-gray-600 font-medium hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150"
        >
          Terms
        </Link>
        <Link
          to="/privacy"
          className="text-gray-600 font-medium hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150"
        >
          Privacy
        </Link>
        <Link
          to="/scholarship"
          className="text-gray-600 font-medium hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150"
        >
          Scholarships
        </Link>
        <Link
          to="/archive"
          className="text-gray-600 font-medium hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150"
        >
          Archive
        </Link>
        <a
          href="https://www.nj.gov/education/broadcasts/"
          className="text-gray-600 font-medium hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150"
        >
          NJDOE Broadcasts
        </a>
      </nav>
      <div className="my-3 sm:my-4 md:my-6 mx-auto max-w-sm flex items-center justify-around text-center">
        <a
          href="https://twitter.com/Mc3Network"
          alt="Twitter bird icon"
          className="w-10 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150 text-blue-400"
        >
          <FaTwitter
            color="3B82F6"
            className="w-6 h-6 inline transition duration-500 ease-in-out transform hover:scale-150"
          />
          <span className="sr-only">view the Twitter profile for MC3</span>
        </a>
        <Subscribe />
      </div>
      <div id="contact-info" className="text-center mt-1 text-sm text-gray-600">
        <p>Monmouth County Curriculum Consortium</p>
        <p>PO Box 549</p>
        <p>Neptune, NJ 07754</p>
        <p>Tax ID: 462-572-217/000</p>
      </div>
    </footer>
  );
}

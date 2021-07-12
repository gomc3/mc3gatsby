import React from "react";
import { Link } from "gatsby";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=' bg-gray-100 p-6 lg:p-12 mt-auto'>
      <header className='max-w-lg mx-auto'>
        <h2 className='text-center text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
          Are you ready to join us?
        </h2>
      </header>
      <div className='mt-8 flex flex-col items-center sm:flex-row sm:justify-center text-center space-y-12 sm:space-y-0 sm:space-x-4'>
        <Link
          to='/join'
          className='px-5 py-3 text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
        >
          Become a Member
        </Link>
        <Link
          to='/contact'
          className='px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 hover:text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
        >
          Contact Us
        </Link>
      </div>
      <div className='mt-4 lg:mt-8 flex justify-center text-center'>
        <a href='https://twitter.com/Mc3Network' alt='Twitter bird icon'>
          <FaTwitter
            color='3B82F6'
            className='w-7 h-7 my-8 sm:my-3 lg:my-1 inline transition duration-500 ease-in-out transform hover:scale-150'
          />
          <span className='sr-only'>view the Twitter profile for MC3</span>
        </a>
      </div>
      <nav className='mx-auto mt-3 lg:mt-6 flex flex-col sm:flex-row max-w-lg text-center space-y-12 sm:space-y-0'>
        <Link
          to='/terms'
          className='text-gray-600 font-medium hover:text-blue-700 transition ease-in-out duration-150 flex-1'
        >
          Terms &amp; Conditions
        </Link>
        <Link
          to='/privacy'
          className='text-gray-600 font-medium hover:text-blue-700 transition ease-in-out duration-150 flex-1'
        >
          Privacy Policy
        </Link>
        <a
          href='https://www.nj.gov/education/broadcasts/'
          className='text-gray-600 font-medium hover:text-blue-700 transition ease-in-out duration-150 flex-1'
        >
          NJDOE (broadcasts)
        </a>
      </nav>
      <div id='contact-info' className='text-center mt-4 text-sm'>
        <p>PO Box 549</p>
        <p>Neptune, NJ 07754</p>
        <p>Tax ID: 462-572-217/000</p>
      </div>
    </footer>
  );
}

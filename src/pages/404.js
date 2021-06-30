import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageTitle from "../components/page-title";
import { Link } from "gatsby";
import Thinker from "../components/thinker";
import { HiDocumentSearch } from "react-icons/hi";

export default function NotFoundPage({ location: { pathname } }) {
  console.log(pathname);
  return (
    <Layout path={pathname}>
      <Seo title='Resource Not Found' />
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
        <header className='mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center'>
          <PageTitle
            title='Resource Not Found'
            icon={
              <HiDocumentSearch className='text-3xl sm:text-5xl lg:text-6xl text-blue-700 mt-0 inline-block' />
            }
          />
        </header>
        <div className='max-w-md mx-auto flex flex-col justify-center items-center'>
          <p className='text-3xl font-semibold text-blue-700 text-center'>
            We're sorry! <br />
            We can't seem to find what you were looking for.
          </p>
          <Link
            to='/'
            className='block mx-auto mt-6 text-center items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600 transition ease-in-out duration-150'
          >
            Visit Our Homepage
          </Link>
          <Thinker styles='w-full' />
        </div>
      </div>
    </Layout>
  );
}

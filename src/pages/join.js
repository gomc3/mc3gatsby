import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageTitle from "../components/page-title";
import { HiPlus } from "react-icons/hi";

export default function Join({ path }) {
  return (
    <Layout path={path}>
      <Seo title='Join MC3' />
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
        <header className='mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center'>
          <div>
            <PageTitle
              title='Join MC3'
              icon={
                <HiPlus className='text-3xl sm:text-5xl lg:text-6xl text-blue-700 mt-0 inline-block' />
              }
            />
          </div>

          <h2 className='font-light text-lg text-gray-700 max-w-screen-sm'>
            If you or your district are interested in joining MC3, fill out the
            form below to let us know. When we receive your message, we will
            contact you.
          </h2>
          <p className='text-md max-w-md italic mt-2 sm:mt-4 lg:mt-6'>
            The information collected below is treated in accordance with{" "}
            <Link
              to='/privacy'
              className='text-blue-700 underline hover:no-underline not-italic'
            >
              our privacy policy
            </Link>
            .
          </p>
        </header>
        <hr />
      </div>
    </Layout>
  );
}

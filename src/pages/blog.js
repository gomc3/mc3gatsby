import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import { HiNewspaper } from "react-icons/hi";

export default function Blog() {
  return (
    <>
      <Seo title="Blog" />
      <Layout>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <header className="mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center">
            <PageTitle title="Blog">
              Discover great things happening in districts near you.
            </PageTitle>
            <HiNewspaper className="text-3xl sm:text-5xl lg:text-6xl text-blue-700 mt-3" />
          </header>
        </div>
      </Layout>
    </>
  );
}

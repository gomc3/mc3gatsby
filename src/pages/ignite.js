import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import { HiSun } from "react-icons/hi";

export default function Ignite() {
  return (
    <>
      <Seo title="Ignite" />
      <Layout>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <header className="mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center">
            <PageTitle
              title="Ignite"
              icon={
                <HiSun className="text-3xl sm:text-5xl lg:text-6xl text-blue-700 mt-0 inline-block" />
              }
            >
              Perhaps one of these ignites will be the start of something great
              for you and your students.
            </PageTitle>
          </header>
        </div>
      </Layout>
    </>
  );
}

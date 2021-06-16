import React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import { HiAcademicCap } from "react-icons/hi";

export default function Scholarship() {
  return (
    <>
      <Seo title="Scholarship" />
      <Layout>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <header className="mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center">
            <PageTitle title="Scholarship">
              It's your time students! Exlpore scholarship opportunities below:
            </PageTitle>
            <HiAcademicCap className="text-3xl sm:text-5xl lg:text-6xl text-blue-700 mt-3" />
          </header>
        </div>
      </Layout>
    </>
  );
}

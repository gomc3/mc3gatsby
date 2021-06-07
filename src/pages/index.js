import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../components/navbar";
import Seo from "../components/seo";
import HeroImage from "../components/heroImage";
import Footer from "../components/footer";

export default function IndexPage(props) {
  return (
    <div id="wrapper">
      <Seo title="Home" />
      {/* <Navbar /> */}
      <Navbar />
      <main>
        <header className="w-full bg-blue-50 px-4 lg:px-12">
          <div className="flex flex-col max-w-screen-xl lg:flex-row shrink-1 justify-center mx-auto">
            <div className="pt-10 sm:pb-10 md:py-18 lg:py-24 px-4 sm:px-8 lg:w-1/2">
              <div className="">
                <h1 className="mb-6 font-medium tracking-wide uppercase text-gray-500 sm:leading-none text-lg lg:text-lg xl:text-xl text-center lg:text-left">
                  <span>M</span>onmouth <span>C</span>ounty <span>C</span>
                  urriculum <span>C</span>onsortium
                </h1>
                <h2 className="mb-8 text-gray-900 font-extrabold tracking-tight sm:tracking-normal leading-none text-5xl sm:text-6xl text-center lg:text-left">
                  Find and Share Ideas to Shape the
                  <span className="text-blue-500"> Future of Education!</span>
                </h2>
                <p className="mb-10 mx-auto text-gray-600 text-lg sm:text-xl md:max-w-xl lg:max-w-none">
                  Join a group of leaders in educaiton that include members from
                  over 60 districts in Monmouth and Ocean County.
                </p>
                <div className="flex justify-center lg:justify-end">
                  <Link
                    to="/"
                    className="flex items-center justify-center border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500  focus:shadow-outline-blue transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-xl transform hover:scale-105 focus:border-blue-600 px-8 py-3 md:py-4 md:px-10 md:text-lg"
                  >
                    Join MC
                    <span
                      className="relative text-sm z-0"
                      style={{ lineHeight: 0, top: "-0.5em" }}
                    >
                      3
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex pt-10 sm:pb-10 md:py-18 lg:py-24 px-4 sm:px-8 lg:w-1/2 items-center justify-center ">
              <HeroImage />
            </div>
          </div>
        </header>
        <div className="bg-blue-50 pt-12 sm:pt-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Ensure your leaders are getting the timely information they
              deserve.
            </h2>
            <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
              In addition to the districts which make up the consortium, MC
              <sup>3</sup> has partnered with the{" "}
              <a
                href="https://www.nj.gov/education/"
                className="underline hover:no-underline hover:text-gray-900 transition ease-in-out duration-150"
              >
                New Jersey Department of Education
              </a>
              ,{" "}
              <a
                href="https://njsba.org"
                className="underline hover:no-underline hover:text-gray-900 transition ease-in-out duration-150"
              >
                New Jersey School Boards Association
              </a>
              ,{" "}
              <a
                href="https://monmouth.edu"
                className="underline hover:no-underline hover:text-gray-900 transition ease-in-out duration-150"
              >
                Monmouth University
              </a>
              ,{" "}
              <a
                href="https://rutgers.edu"
                className="underline hover:no-underline hover:text-gray-900 transition ease-in-out duration-150"
              >
                Rutgers University
              </a>
              , and many education-related organizations.
            </p>
          </div>
          <div className="mt-10 bg-white">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-blue-50"></div>
              <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg lg:grid lg:grid-cols-3 items-start">
                    <div className="h-full border-b border-gray-100 p-6 text-center md:border-0 md:border-r">
                      <dt className="text-2xl leading-none font-extrabold text-blue-600">
                        Every member is a{" "}
                        <abbr
                          className="no-underline"
                          title="very important person"
                        >
                          VIP
                        </abbr>
                      </dt>
                      <dd className="mt-3 text-gray-600 md:text-center">
                        Regardless of title or position, each member is invited
                        to contribute towards the good of the group.
                      </dd>
                    </div>
                    <div className="h-full border-b border-gray-100 p-6 text-center md:border-0 md:border-r">
                      <dt className="text-2xl leading-none font-extrabold text-blue-600">
                        <abbr title="professional development">PD</abbr>{" "}
                        Opportunities
                      </dt>
                      <dd className="mt-3 text-gray-600 md:text-center">
                        We provide in depth training on timely educational
                        issues and best practices.
                      </dd>
                    </div>
                    <div className="border-b border-gray-100 p-6 text-center md:border-0 md:border-r">
                      <dt className="text-2xl leading-none font-extrabold text-blue-600">
                        Attend Virtually or In-person
                      </dt>
                      <dd className="mt-3 text-gray-600 md:text-center">
                        We recognize the need to be flexible in a post pandemic
                        world. Whether your district requires it, or you need to
                        remain in the building, we've got you covered.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:grid lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="px-4 text-center">
            <StaticImage
              src="../images/igniteRocket.png"
              alt="person riding a rocket into flight"
              loading="lazy"
              placeholder="tracedSVG"
              className="w-full sm:w-1/2 lg:w-full filter transition duration-500 ease-in-out contrast-100 hover:contrast-125"
            />
          </div>
          <div className="px-4 py-8 sm:px-6 sm:py-12 lg:py-16 lg:ml-1/2 lg:pl-12">
            <h2 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Answer the call, and{" "}
              <span className="whitespace-nowrap text-red-700">
                ignite the spark{" "}
              </span>
              in others.
            </h2>
            <p className="mt-6 text-lg leading-7 text-gray-500">
              Our members are encouraged to volunteer to prepare and deliver
              Ignite presentations at our regular monthly meetings. What are
              Ignite presentations? They are presentations in which members get
              20 slides, which automatically advance every 15 seconds. The
              result is a fast and fun presentation which lasts just 5 minutes!
            </p>
            <div className="text-center lg:text-left mt-8">
              <span className="inline-flex rounded-md shadow">
                <a
                  href="/"
                  className="flex items-center justify-center border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-700 hover:bg-red-600  focus:border-red-600 focus:shadow-outline-red transition duration-150 ease-in-out hover:shadow-xl transform hover:scale-105 px-8 py-3 md:py-4 md:px-10 md:text-lg"
                >
                  Raise Your Hand
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 lg:grid lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="px-4 py-8 sm:px-6 sm:py-12 lg:py-16 lg:ml-1/2 lg:pl-12">
            <h2 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Help students{" "}
              <span className="whitespace-nowrap text-blue-500">
                find a path{" "}
              </span>
              towards a college education.
            </h2>
            <p className="mt-6 text-lg leading-7 text-gray-500">
              Our members are encouraged to volunteer to prepare and deliver
              Ignite presentations at our regular monthly meetings. What are
              Ignite presentations? They are presentations in which members get
              20 slides, which automatically advance every 15 seconds. The
              result is a fast and fun presentation which lasts just 5 minutes!
            </p>
            <div className="text-center lg:text-right mt-8">
              <span className="inline-flex rounded-md shadow">
                <Link
                  to="/"
                  className="flex items-center justify-center border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600  focus:border-red-600 focus:shadow-outline-red transition duration-150 ease-in-out hover:shadow-xl transform hover:scale-105 px-8 py-3 md:py-4 md:px-10 md:text-lg"
                >
                  Learn More
                </Link>
              </span>
            </div>
          </div>
          <div className="px-4 text-center">
            <StaticImage
              src="../images/grad.jpg"
              alt="female student in cap and gown holding a red diploma"
              loading="lazy"
              placeholder="tracedSVG"
              className="rounded-full w-full sm:w-1/2 lg:w-full filter transition duration-500 ease-in-out contrast-100 hover:contrast-125"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export const data = graphql`
  {
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          id
        }

        name
      }
    }
  }
`;

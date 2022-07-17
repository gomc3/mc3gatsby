import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Layout from '../components/layout'

export default function IndexPage({ path }) {
  return (
    <Layout path={path}>
      <Seo title="Home" />

      <header id="hero" className="w-full bg-blue-50 px-4 lg:px-12">
        <div className="flex flex-wrap items-center justify-center max-w-screen-2xl mx-auto lg:space-x-12">
          <div className="pt-4 sm:pb-5 md:py-9 lg:py-6 px-4 sm:px-8 max-w-screen-lg">
            <h1 className="mb-6 font-medium tracking-wide uppercase text-blue-700 sm:leading-none text-5xl lg:text-6xl xl:text-7xl text-center">
              M<span className="sr-only">.</span>C
              <span className="sr-only">.</span>3
              <span className="sr-only">.</span>
            </h1>
            <h2 className="mb-8 text-slate-900 font-extrabold tracking-tight sm:tracking-normal leading-none text-5xl sm:text-6xl text-center">
              Find and Share Ideas to Shape the
              <span className="text-blue-700"> Future of Education!</span>
            </h2>

            <div className="flex items-center justify-evenly flex-wrap">
              <Link
                to="/join"
                className="flex items-center my-3 justify-center border border-transparent text-base leading-6 font-medium text-white bg-blue-700  focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150 hover:bg-blue-800 hover:shadow-xl transform px-8 py-3 md:py-4 md:px-10 md:text-lg"
              >
                Become a Member
              </Link>
              <Link
                to="/calendar"
                className="flex items-center my-3 justify-center border border-transparent bg-slate-700 text-base text-slate-50 leading-6 font-medium hover:text-white hover:bg-slate-800  focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150 hover:shadow-xl transform px-8 py-3 md:py-4 md:px-10 md:text-lg"
              >
                Meeting Schedule
              </Link>
            </div>
            <p className="mt-10 mx-auto text-slate-600 text-lg sm:text-xl md:max-w-xl lg:max-w-none">
              Join a group of instructional and educational leaders from 60+
              School Districts in Monmouth County and beyond.
            </p>
          </div>
        </div>
      </header>
      <div className="bg-blue-50 pt-2 sm:pt-4">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl leading-9 font-extrabold text-slate-900 sm:leading-10 mx-auto">
            Ensure your instructional leaders are receiving timely information!
          </h2>
          <p className="mt-3 text-xl leading-8 text-slate-700 sm:mt-4 max-w-screen-sm mx-auto">
            In addition to member districts which make up the consortium, M
            <span className="sr-only">.</span>C
            <span className="sr-only">.</span>3
            <span className="sr-only">.</span> has partnered with the
            <a
              href="https://www.nj.gov/education/"
              className="underline hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150"
            >
              {' '}
              New Jersey Department of Education
            </a>
            ,{' '}
            <a
              href="https://njsba.org"
              className="underline hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150"
            >
              New Jersey School Boards Association
            </a>
            ,{' '}
            <a
              href="https://www.brookdalecc.edu/"
              className="underline hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150"
            >
              Brookdale Community College
            </a>
            ,{' '}
            <a
              href="https://monmouth.edu"
              className="underline hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150"
            >
              Monmouth University
            </a>
            ,{' '}
            <a
              href="https://rutgers.edu"
              className="underline hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150"
            >
              Rutgers University
            </a>
            , and many other education-related organizations.
          </p>
        </div>
        <div className="mt-10 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-blue-50"></div>
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg lg:grid lg:grid-cols-3 items-start">
                  <div className="h-full border-b border-slate-100 p-6 text-center md:border-0 md:border-r">
                    <dt className="text-2xl leading-none font-extrabold text-blue-700">
                      Expand Your{' '}
                      <abbr
                        className="no-underline"
                        title="professional learning network"
                      >
                        PLN
                      </abbr>
                    </dt>
                    <dd className="mt-3 text-slate-600 md:text-center">
                      Regardless of your position, each member is invited to
                      contribute towards the good of the group.
                    </dd>
                  </div>
                  <div className="h-full border-b border-slate-100 p-6 text-center md:border-0 md:border-r">
                    <dt className="text-2xl leading-none font-extrabold text-blue-700">
                      <abbr title="professional development">PD</abbr>{' '}
                      Opportunities
                    </dt>
                    <dd className="mt-3 text-slate-600 md:text-center">
                      We provide professional learning on timely educational
                      issues and best practices.
                    </dd>
                  </div>
                  <div className="border-b border-slate-100 p-6 text-center md:border-0 md:border-r">
                    <dt className="text-2xl leading-none font-extrabold text-blue-700">
                      Tap Into Our Network
                    </dt>
                    <dd className="mt-3 text-slate-600 md:text-center">
                      Members emphatically tell us that connecting with
                      like-minded professionals is invaluable.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 lg:grid lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="px-4 text-center flex items-center justify-center">
          <StaticImage
            src="../images/igniteRocket.png"
            alt="person riding a rocket into flight"
            loading="lazy"
            placeholder="tracedSVG"
            className="w-1/2 sm:w-3/5 lg:w-3/4 filter transition duration-500 ease-in-out contrast-100 hover:contrast-125"
          />
        </div>
        <div className="px-4 py-8 sm:px-6 sm:py-12 lg:py-16 lg:ml-1/2 lg:pl-12">
          <h2 className="text-center lg:text-right text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-slate-900">
            Answer the call, and{' '}
            <span className="whitespace-nowrap text-blue-700">
              ignite the spark{' '}
            </span>
            in others.
          </h2>
          <p className="mt-6 text-lg leading-7 text-slate-600">
            Members are welcome to deliver Ignite presentations during meetings.{' '}
            <strong>What are Ignite presentations?</strong> They are
            presentations in which members get 20 slides, which automatically
            advance every 15 seconds. The result is a fast and fun presentation
            which lasts just 5 minutes!
          </p>
          <div className="text-center lg:text-left mt-8">
            <span className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="flex items-center justify-center border border-transparent text-base leading-6 font-medium text-white bg-blue-700 hover:bg-blue-600  focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150hover:shadow-xl transform hover:scale-105 px-8 py-3 md:py-4 md:px-10 md:text-lg"
              >
                Let Us Know You're Interested
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:grid lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="px-4 py-8 sm:px-6 sm:py-12 lg:py-16 lg:ml-1/2 lg:pl-12">
          <h2 className="text-center lg:text-left text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-slate-900">
            Help support{' '}
            <span className="whitespace-nowrap text-blue-700">
              our future leaders{' '}
            </span>
            !
          </h2>
          <p className="mt-6 text-lg leading-7 text-slate-600">
            Each year, students throughout our membership districts are awarded
            merit-based scholarships. A team of M
            <span className="sr-only">.</span>C
            <span className="sr-only">.</span>3 members reviews submissions and
            select a group of winners who are then recognized at a M
            <span className="sr-only">.</span>C
            <span className="sr-only">.</span>3
            <span className="sr-only">.</span> meeting.{' '}
            <strong>Your membership helps provide this opportunity!</strong>
          </p>
          <div className="text-center lg:text-right mt-8">
            <span className="inline-flex rounded-md shadow">
              <Link
                to="/scholarship"
                className="flex items-center justify-center border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600  focus:outline-none focus:ring-4 focus:ring-yellow-300 transition ease-in-out duration-150 hover:shadow-xl transform hover:scale-105 px-8 py-3 md:py-4 md:px-10 md:text-lg"
              >
                Discover Scholarship Opportunities
              </Link>
            </span>
          </div>
        </div>
        <div className="px-4 text-center flex flex-col justify-center items-center">
          <div className="mx-auto shadow-md w-3/4 p-5 rounded-md bg-blue-300 transform rotate-6">
            <StaticImage
              src="../images/grad.jpg"
              alt="female student in cap and gown holding a red diploma"
              loading="lazy"
              placeholder="tracedSVG"
              className="transform -rotate-3 rounded-md w-full shadow-md filter transition duration-500 ease-in-out contrast-100 hover:contrast-125 hover:scale-105 hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

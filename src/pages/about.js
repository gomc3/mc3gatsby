import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageTitle from "../components/page-title";
import { FaLinkedin } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";

export default function About({ path }) {
  return (
    <Layout path={path}>
      <Seo title="About MC3" />
      <header className="mb-2 px-5 md:px-0 sm:mb-4 lg:mb-6 flex flex-col items-center space-y-3">
        <PageTitle
          title="About MC3"
          icon={
            <HiIdentification className="text-3xl sm:text-5xl lg:text-6xl text-blue-700 mt-0 inline-block" />
          }
        />
        <p className="font-light text-lg text-gray-700 max-w-screen-sm">
          The Monmouth County Curriculum Consortium (MC3) is a non-profit
          educational organization dedicated to sharing ideas and resources to
          improve learning and leadership in our schools. Since its founding in
          2009, it has expanded beyond Monmouth County to include over 60
          districts in central New Jersey. Its September-June monthly meeting
          schedule presents a variety of opportunities to discuss topics like
          assessment, curriculum, technology, and pedagogy. Attendees typically
          include district and building administrators, teachers, tech
          specialists, and representatives from the NJ Department of Education.
        </p>
        <p className="font-light text-lg text-gray-700 max-w-screen-sm">
          MC3 also organizes workshops 3-4 times per year to provide in depth
          training on educational issues. In the past few years, these have
          included summits on Common Core, the Next Gen Science standards,
          Instructional Technology, and ESL, to name a few.
        </p>
        <p className="font-light text-lg text-gray-700 max-w-screen-sm">
          In addition to the districts which make up the consortium, MC3 has
          partnered with the NJDOE, NJ School Boards Association, Monmouth
          University, Rutgers University, and many education-related
          organizations.
        </p>
      </header>
      <hr />
      <section className="">
        <h2 className="text-4xl my-3 md:my-4 lg:my-6 font-medium text-blue-700 text-center">
          Current Exective Team Members
        </h2>
        <h3 className="text-3xl my-2 md:my-3 lg:my-5 font-light text-gray-600 text-center">
          2021-2022
        </h3>
        <div className="w-4/5  mx-auto rounded-md border border-gray-500 p-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Luigi Laugelli"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Luigi Laugelli</h3>
              <h4 className="text-sm font-light">Co-chair</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Michael Ballone"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Michael Ballone</h3>
              <h4 className="text-sm font-light">Co-chair</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/christine-formica-6b72127b/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGleSOdcUG8lQ/profile-displayphoto-shrink_400_400/0/1516782823674?e=1630540800&v=beta&t=pjHgFILoVqSxcvcwgPkwos6dB1t0_D8pQRZzl84SNJk"
                alt="Christine Formica"
                className="filter grayscale transition ease-in-out duration-500 hover:grayscale-0 w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Christine Formica</h3>
              <h4 className="text-sm font-light">Recording Secretary</h4>
              <p>
                <a href="https://www.linkedin.com/in/christine-formica-6b72127b/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Sarah Poppe Seeley"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Sarah Poppe Seeley</h3>
              <h4 className="text-sm font-light">Recording Secretary</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Melanie Harding"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Melanie Harding</h3>
              <h4 className="text-sm font-light">Treasurer</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/nmastroianni/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFgHodkab20gQ/profile-displayphoto-shrink_100_100/0/1531602460120?e=1630540800&v=beta&t=y4TQwZLMezjB9Q-MntbeHGPXNYOnELbQcC1snnIsRjw"
                alt="Neil Mastroianni"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Neil Mastroianni</h3>
              <h4 className="text-sm font-light">Technology Consultant</h4>
              <p>
                <a href="https://www.linkedin.com/in/nmastroianni/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Archival Exec Teams Section */}
      <section className="mt-6 py-6 bg-blue-50">
        <h2 className="text-4xl  font-medium text-blue-700 text-center">
          Past Exective Team Members
        </h2>
        <h3 className="text-3xl my-2 md:my-3 lg:my-5 font-light text-gray-600 text-center">
          2019-2021
        </h3>
        <div className="w-4/5  mx-auto rounded-md border border-gray-500 p-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/kelly-weldon-3477654a/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C5603AQFSBHdfQvSPsA/profile-displayphoto-shrink_100_100/0/1517546417983?e=1630540800&v=beta&t=Fike4kAEO90Gt1bSTkv65Qcz8H2KkWoQoDJGHWRDCz8"
                alt="Kelly Weldon"
                className="filter grayscale transition ease-in-out duration-500 hover:grayscale-0 w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Kelly Weldon</h3>
              <h4 className="text-sm font-light">Co-chair</h4>
              <p>
                <a href="https://www.linkedin.com/in/kelly-weldon-3477654a/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/matt-kukoda-276b7b167/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHDQcYVsSFTdQ/profile-displayphoto-shrink_400_400/0/1531255856414?e=1630540800&v=beta&t=IOJYaRZ8kIlzPS2ZZcfxQmV7bcjZSruzN0VGmih_4rU"
                alt="Matt Kukoda"
                className="filter grayscale transition ease-in-out duration-500 hover:grayscale-0 w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Matt Kukoda</h3>
              <h4 className="text-sm font-light">Co-chair</h4>
              <p>
                <a href="https://www.linkedin.com/in/matt-kukoda-276b7b167/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Cheryl Romano"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Cheryl Romano</h3>
              <h4 className="text-sm font-light">Recording Secretary</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Tara Micciulla"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Tara Micciulla</h3>
              <h4 className="text-sm font-light">Recording Secretary</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Melanie Harding"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Melanie Harding</h3>
              <h4 className="text-sm font-light">Treasurer</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/chrisalworth/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C5603AQFVxPWYRabOlg/profile-displayphoto-shrink_100_100/0/1516965027119?e=1630540800&v=beta&t=G225vJg4PllfkZQ0Cp7l9cU6gR7YXoUy_h-l71MWOQ0"
                alt="Chris Alworth"
                className="w-24 filter grayscale transition ease-in-out duration-500 hover:grayscale-0 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Chris Alworth</h3>
              <h4 className="text-sm font-light">Technology Consultant</h4>
              <p>
                <a href="https://www.linkedin.com/in/chrisalworth">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* EXEC TEAM 2017-2019 */}
        <h3 className="text-3xl my-2 md:my-3 lg:my-5 font-light text-gray-600 text-center">
          2017-2019
        </h3>
        <div className="w-4/5  mx-auto rounded-md border border-gray-500 p-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Erica Reynolds"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Erica Reynolds</h3>
              <h4 className="text-sm font-light">Co-chair</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/mark-guterl-64a88261/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGXNQ--dlK67w/profile-displayphoto-shrink_100_100/0/1574806326558?e=1630540800&v=beta&t=CTun4KWNb0-1iUDS351QWUgFoMR4KFOONvmib-qGTGE"
                alt="Mark Guterl"
                className="filter grayscale transition ease-in-out duration-500 hover:grayscale-0 w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Mark Guterl</h3>
              <h4 className="text-sm font-light">Co-chair</h4>
              <p>
                <a href="https://www.linkedin.com/in/mark-guterl-64a88261/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/kelly-harmon-75a4481a/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Kelly Harmon"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Kelly Harmon</h3>
              <h4 className="text-sm font-light">Recording Secretary</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/in/kelly-harmon-75a4481a/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/marcnatanagara64/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C5603AQFtsr3wb1AeNA/profile-displayphoto-shrink_400_400/0/1516523860341?e=1630540800&v=beta&t=vOo5PVY9-YLYeHbnvSVXx-ZfF2xnNd9v7bjFv6DGIJY"
                alt="Marc Natanagara, Ed.D."
                className="filter grayscale transition ease-in-out duration-500 hover:grayscale-0 w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Marc Natanagara, Ed.D.</h3>
              <h4 className="text-sm font-light">Ocean County Chair</h4>
              <p>
                <a href="https://www.linkedin.com/in/marcnatanagara64/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/mike-liebmann-aa369ab6/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Michael Liebmann"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Michael Liebmann</h3>
              <h4 className="text-sm font-light">Treasurer</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/in/mike-liebmann-aa369ab6/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/matt-kukoda-276b7b167/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHDQcYVsSFTdQ/profile-displayphoto-shrink_400_400/0/1531255856414?e=1630540800&v=beta&t=IOJYaRZ8kIlzPS2ZZcfxQmV7bcjZSruzN0VGmih_4rU"
                alt="Neil Mastroianni"
                className="w-24 filter grayscale transition ease-in-out duration-500 hover:grayscale-0 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Matt Kukoda</h3>
              <h4 className="text-sm font-light">Technology Consultant</h4>
              <p>
                <a href="https://www.linkedin.com/in/matt-kukoda-276b7b167/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* EXEC TEAM 2015-2017 */}
        <h3 className="text-3xl my-2 md:my-3 lg:my-5 font-light text-gray-600 text-center">
          2015-2017
        </h3>
        <div className="w-4/5  mx-auto rounded-md border border-gray-500 p-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Karen Barry"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Karen Barry</h3>
              <h4 className="text-sm font-light">Co-chair</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="John Bombardier"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">John Bombardier</h3>
              <h4 className="text-sm font-light">Co-chair</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/jennifer-donnelly-152133a9/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGphjD7mM9FUA/profile-displayphoto-shrink_100_100/0/1517526137485?e=1630540800&v=beta&t=Vt_VWb8fmkqi8vtckpSKWw1WgN3-wo0MUdj-8vEjxfk"
                alt="Jennifer Donnelly"
                className="filter grayscale transition ease-in-out duration-500 hover:grayscale-0 w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Jennifer Donnelly</h3>
              <h4 className="text-sm font-light">Recording Secretary</h4>
              <p>
                <a href="https://www.linkedin.com/in/jennifer-donnelly-152133a9/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/marcnatanagara64/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C5603AQFtsr3wb1AeNA/profile-displayphoto-shrink_400_400/0/1516523860341?e=1630540800&v=beta&t=vOo5PVY9-YLYeHbnvSVXx-ZfF2xnNd9v7bjFv6DGIJY"
                alt="Marc Natanagara, Ed.D."
                className="filter grayscale transition ease-in-out duration-500 hover:grayscale-0 w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Marc Natanagara, Ed.D.</h3>
              <h4 className="text-sm font-light">Ocean County Chair</h4>
              <p>
                <a href="https://www.linkedin.com/in/marcnatanagara64/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/">
              <StaticImage
                src="https://via.placeholder.com/100"
                alt="Michael Liebmann"
                className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Dara Van Pelt</h3>
              <h4 className="text-sm font-light">Treasurer</h4>
              <p className="hidden">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/lauren-b-4695b436/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFZ-xhADtfYYg/profile-displayphoto-shrink_100_100/0/1591400023196?e=1630540800&v=beta&t=apCmh2yfy58gAOkgjxj9nelyJA5ykvlzNoDHtqgdQL4"
                alt="Lauren Basselini"
                className="w-24 filter grayscale transition ease-in-out duration-500 hover:grayscale-0 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Lauren Basselini</h3>
              <h4 className="text-sm font-light">Technology Consultant</h4>
              <p>
                <a href="https://www.linkedin.com/in/lauren-b-4695b436/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap items-center">
            <a href="https://www.linkedin.com/in/thomas-semko-82219411/">
              <StaticImage
                src="https://media-exp1.licdn.com/dms/image/C5603AQHaez_N9EernA/profile-displayphoto-shrink_100_100/0/1517748259247?e=1630540800&v=beta&t=i4JOxa8YA508dwFsjkEsT-zPoG6dI3QM3DS84M7pQ7c"
                alt="Tom Semko"
                className="w-24 filter grayscale transition ease-in-out duration-500 hover:grayscale-0 mr-4 rounded-full flex-initial border border-gray-300"
              />
            </a>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Tom Semko</h3>
              <h4 className="text-sm font-light">Technology Consultant</h4>
              <p>
                <a href="https://www.linkedin.com/in/thomas-semko-82219411/">
                  <FaLinkedin className="inline text-blue-700 text-sm" />
                  <span className="ml-2 text-xs">Connect on LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

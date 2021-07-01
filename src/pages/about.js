import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageTitle from "../components/page-title";
import { HiIdentification } from "react-icons/hi";
import { Link } from "gatsby";

export default function About({ path }) {
  const currentTeam = [
    {
      name: "Neil Mastroianni",
      role: "Tech Consultant",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFgHodkab20gQ/profile-displayphoto-shrink_100_100/0/1531602460120?e=1630540800&v=beta&t=y4TQwZLMezjB9Q-MntbeHGPXNYOnELbQcC1snnIsRjw",
      linkedIn: "https://www.linkedin.com/in/nmastroianni/",
    },
  ];
  return (
    <Layout path={path}>
      <Seo title='About MC3' />
      <header className='mb-2 sm:mb-4 lg:mb-6 flex flex-col items-center space-y-3'>
        <PageTitle
          title='About MC3'
          icon={
            <HiIdentification className='text-3xl sm:text-5xl lg:text-6xl text-blue-700 mt-0 inline-block' />
          }
        />
        <p className='font-light text-lg text-gray-700 max-w-screen-sm'>
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
        <p className='font-light text-lg text-gray-700 max-w-screen-sm'>
          MC3 also organizes workshops 3-4 times per year to provide in depth
          training on educational issues. In the past few years, these have
          included summits on Common Core, the Next Gen Science standards,
          Instructional Technology, and ESL, to name a few.
        </p>
        <p className='font-light text-lg text-gray-700 max-w-screen-sm'>
          In addition to the districts which make up the consortium, MC3 has
          partnered with the NJDOE, NJ School Boards Association, Monmouth
          University, Rutgers University, and many education-related
          organizations.
        </p>
      </header>
      <hr />
      <section className=''>
        <h2 className='text-4xl my-3 md:my-4 lg:my-6 font-medium text-blue-700 text-center'>
          Current Exective Team Members
        </h2>
        <div className='w-4/5  mx-auto rounded-md border border-gray-500 p-3 grid grid-cols-3 gap-4 bg-gray-200'>
          {currentTeam.map((exec) => (
            <>
              <div className='p-4 flex justify-start'>
                <StaticImage
                  src={""}
                  alt={exec.name}
                  className='h-18 w-18 mr-4 rounded-full'
                />
                <div className=''>
                  <a href={exec.linkedIn}>
                    <h3 className='text-lg font-medium'>{exec.name}</h3>
                  </a>
                  <h4 className='text-sm font-light'>{exec.role}</h4>
                  <p>
                    <a href={exec.linkedIn}>
                      Connect with {exec.name} on LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </Layout>
  );
}

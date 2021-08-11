import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageTitle from "../components/page-title";
import { HiIdentification } from "react-icons/hi";
import ExecTeam from "../components/exec-team";
import ExecMember from "../components/exec-member";

export const data = graphql`
  {
    allContentfulExecutiveTeams {
      nodes {
        execTeamName
        executive_members {
          id
          fullName
          role
          socialMediaLink
          socialMediaImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
        id
      }
    }
  }
`;

export default function About({ path, data }) {
  function compareTeamNames(a, b) {
    const execNameA = a.execTeamName.toUpperCase();
    const execNameB = b.execTeamName.toUpperCase();
    let comparison = 0;
    if (execNameA > execNameB) {
      comparison = 1;
    } else if (execNameA < execNameB) {
      comparison = -1;
    }
    return comparison;
  }
  const teams = data.allContentfulExecutiveTeams.nodes
    .sort(compareTeamNames)
    .reverse();
  const foundingMembers = [
    {
      fullName: "Claire Engle",
      role: "Founding Member",
      socialMediaImage: "none",
      socialMediaLink: null,
    },
    {
      fullName: "MaryJane Garibay",
      role: "Founding Member",
      socialMediaImage: "none",
      socialMediaLink: null,
    },
    {
      fullName: "Lisa Gleason",
      role: "Founding Member",
      socialMediaImage: "none",
      socialMediaLink: null,
    },
    {
      fullName: "Melissa Jones",
      role: "Founding Member",
      socialMediaImage: "none",
      socialMediaLink: null,
    },
    {
      fullName: "Bruce Preston",
      role: "Founding Member",
      socialMediaImage: "none",
      socialMediaLink: null,
    },
  ];
  return (
    <Layout path={path}>
      <Seo title='About MC3' />
      <header className='mb-2 px-5 md:px-0 sm:mb-1 lg:mb-3 flex flex-col items-center space-y-3'>
        <PageTitle
          title='About Us'
          icon={
            <HiIdentification className='text-3xl sm:text-5xl lg:text-6xl text-blue-700 -mt-3 inline-block' />
          }
        />
        <p className='text-lg text-gray-700 max-w-screen-sm'>
          The Monmouth County Curriculum Consortium (MC3) is a non-profit
          educational organization dedicated to sharing ideas and resources to
          improve learning and leadership in our schools. Since its founding in
          2009, it has expanded beyond Monmouth County to include over 60 school
          districts. Monthly meetings provide opportunities to discuss timely
          topics including assessment, curriculum, best practices, technology
          and pedagogy. Members typically include district and building
          administrators, teacher leaders and representatives from the NJ
          Department of Education.
        </p>
        <p className='text-lg text-gray-700 max-w-screen-sm'>
          MC3 also organizes professional learning opportunities during the year
          which provide in-depth training on new requirements, educational
          issues and other topics that benefit our membership. In the past few
          years, these have included summits on the implementation of the New
          Jersey Student Learning Standards in various academic areas,
          Assessment, ESL and Educational Technology, to name a few.
        </p>
        <p className='text-lg text-gray-700 max-w-screen-sm'>
          In addition to the districts which make up the consortium, MC3 has
          partnered with the NJDOE, NJ School Boards Association, Monmouth
          University, Rutgers University, and other education-related
          organizations.
        </p>
      </header>
      <hr />
      {teams.map((team, i) => {
        //team.executive_members.reverse();
        function compare(a, b) {
          const fullNameA = a.fullName.toUpperCase();
          const fullNameB = b.fullName.toUpperCase();
          let comparison = 0;
          if (fullNameA > fullNameB) {
            comparison = 1;
          } else if (fullNameA < fullNameB) {
            comparison = -1;
          }
          return comparison;
        }
        team.executive_members.sort(compare);
        return (
          <ExecTeam
            teamNumber={i + 1}
            key={team.id}
            execTeamName={team.execTeamName}
          >
            {team.executive_members.map((member) => {
              return (
                <ExecMember
                  key={member.fullName}
                  fullName={member.fullName}
                  role={member.role}
                  socialMediaImage={member.socialMediaImage}
                  socialMediaLink={member.socialMediaLink}
                />
              );
            })}
          </ExecTeam>
        );
      })}
      <ExecTeam
        execTeamName='Founding Members'
        key='Founding Members'
        teamNumber={0}
      >
        {foundingMembers.map((member) => {
          return (
            <ExecMember
              key={member.fullName}
              fullName={member.fullName}
              role={member.role}
              socialMediaImage={member.socialMediaImage}
              socialMediaLink={member.socialMediaLink}
            />
          );
        })}
      </ExecTeam>
    </Layout>
  );
}

import React from 'react'
import Image from 'next/future/image'
import {
  PrismicRichText,
  PrismicNextImage,
  PrismicLink,
} from '@prismicio/react'
import Icon from '../../components/Icon'

/**
 * @typedef {import("@prismicio/client").Content.ExecutiveTeamSlice} ExecutiveTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExecutiveTeamSlice>} ExecutiveTeamProps
 * @param { ExecutiveTeamProps }
 */
const ExecutiveTeam = ({ slice }) => {
  const templates = {
    heading2: ({ node, children }) => {
      return (
        <h2 className="my-3 text-center text-4xl font-medium text-blue-700 md:my-4 lg:my-6">
          {children}
        </h2>
      )
    },
  }
  console.log('EXECTEAM => ', slice)
  const { backgroundcolor, heading, team } = slice.primary
  const {
    data: { executiveteammembers, executiveteamtitle },
  } = team
  return (
    <section
      className="py-6"
      style={{ background: `${backgroundcolor || `#ffffff`}` }}
    >
      <PrismicRichText field={heading} components={templates} />
      <h3 className="my-2 text-center text-3xl text-slate-600  md:my-3 lg:my-5">
        {executiveteamtitle}
      </h3>
      <div className="mx-auto  grid w-4/5 grid-cols-1 gap-4 rounded-md border border-slate-500 p-3 md:grid-cols-2 xl:grid-cols-3">
        {executiveteammembers.length &&
          executiveteammembers.map(member => {
            const {
              executivemember: {
                id,
                data: { memberfullname, memberprofileimage, memberlink },
              },
              executiverole,
            } = member
            return (
              <div
                key={id}
                className="flex flex-col flex-wrap items-center p-4 text-center md:flex-row  md:text-left"
              >
                {memberlink && memberlink.url !== '' && memberprofileimage ? (
                  <a href={memberlink.url}>
                    <Image
                      src={memberprofileimage.url}
                      alt={memberprofileimage.alt || ''}
                      width={memberprofileimage.dimensions.width}
                      height={memberprofileimage.dimensions.height}
                      className="gatsby-image-wrapper w-24 flex-initial rounded-full border border-slate-300 grayscale filter transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-slate-400 hover:grayscale-0 md:mr-4"
                    />
                  </a>
                ) : memberprofileimage ? (
                  <Image
                    src={memberprofileimage.url}
                    alt={memberprofileimage.alt || ''}
                    width={memberprofileimage.dimensions.width}
                    height={memberprofileimage.dimensions.height}
                    className="gatsby-image-wrapper w-24 flex-initial rounded-full border border-slate-300 grayscale filter transition duration-500 ease-in-out hover:grayscale-0 md:mr-4"
                  />
                ) : (
                  <Image
                    src="https://picsum.photos/100"
                    alt=""
                    width={100}
                    height={100}
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-medium">{memberfullname}</h3>
                  <h4 className="text-sm">{executiverole.data.rolenickname}</h4>

                  {memberlink && memberlink.url ? (
                    <p className="text-sm">
                      <a href={memberlink.url} className="flex items-center">
                        <Icon
                          name="LinkedIn"
                          className="mr-2 inline text-sm text-blue-700"
                        />
                        Connect on LinkedIn
                      </a>
                    </p>
                  ) : (
                    ``
                  )}
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default ExecutiveTeam

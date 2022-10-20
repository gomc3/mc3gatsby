import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ExecutiveTeamSlice} ExecutiveTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExecutiveTeamSlice>} ExecutiveTeamProps
 * @param { ExecutiveTeamProps }
 */
const ExecutiveTeam = ({ slice }) => {
  console.log('EXECTEAM => ', slice)
  const { backgroundcolor, heading, team } = slice.primary
  return (
    <section className="py-6">
      <PrismicRichText field={heading} />
    </section>
  )
}

export default ExecutiveTeam

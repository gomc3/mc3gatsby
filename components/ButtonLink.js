import * as React from 'react'
import { PrismicLink } from '@prismicio/react'

const ButtonLink = ({ link, color, text }) => {
  // const baseButtonClasses =
  //   'flex items-center my-3 justify-center border border-transparent text-base leading-6 font-medium text-white focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition ease-in-out duration-150  hover:shadow-xl transform px-8 py-3 md:py-4 md:px-10 md:text-lg'
  switch (color) {
    case 'Gray':
      return (
        <PrismicLink
          field={link}
          className={`btn rounded bg-gray-700 text-base-100 hover:bg-gray-800`}
        >
          {text}
        </PrismicLink>
      )
    default:
      return (
        <PrismicLink
          field={link}
          className={`btn btn-secondary rounded text-base-100 hover:bg-blue-900`}
        >
          {text}
        </PrismicLink>
      )
  }
}
export default ButtonLink

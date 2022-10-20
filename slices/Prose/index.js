import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ProseSlice} ProseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProseSlice>} ProseProps
 * @param { ProseProps }
 */
const Prose = ({ slice }) => {
  const components = {
    paragraph: ({ node, children }) => {
      return <p>{children}</p>
    },
    image: ({ node, children }) => {
      return (
        <div className="mx-auto max-w-screen-sm">
          <a href={node.url} target="_blank" rel="noreferrer">
            <img
              src={node.url}
              alt={node.alt || ''}
              className="rounded shadow-sm shadow-blue-100 transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-200"
            />
          </a>
        </div>
      )
    },
    embed: ({ node, children }) => {
      return (
        <div className="mx-auto max-w-screen-sm overflow-hidden rounded shadow-xl">
          <div
            className="aspect-w-16 aspect-h-9"
            dangerouslySetInnerHTML={{ __html: node.oembed.html }}
          />
        </div>
      )
    },
  }
  return (
    <section className="prose prose-blue mx-auto px-3 py-4 md:prose-lg md:px-6 md:py-6 lg:prose-xl lg:py-8 xl:prose-2xl xl:py-10">
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  )
}

export default Prose

import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.DefinitionListSlice} DefinitionListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DefinitionListSlice>} DefinitionListProps
 * @param { DefinitionListProps }
 */
const DefinitionList = ({ slice }) => {
  const { primary, items } = slice
  return (
    <section
      className="pt-2 sm:pt-4"
      style={{ backgroundColor: primary.uppercolor }}
    >
      <div
        className="mt-10"
        style={{ backgroundColor: primary.backgroundcolor || '#FFFFFF' }}
      >
        <div className="relative">
          <div
            className="absolute inset-0 h-1/2"
            style={{ backgroundColor: primary.uppercolor || '#FFFFFF' }}
          ></div>
          <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <dl className="items-start rounded-lg bg-white shadow-lg lg:grid lg:grid-cols-3">
                {items.length > 0 &&
                  items.map(item => {
                    return (
                      <div
                        key={item.term}
                        className="h-full border-b border-slate-100 p-6 text-center md:border-0 md:border-r"
                      >
                        <dt className="text-2xl font-extrabold leading-none text-blue-700">
                          {item.term}
                        </dt>
                        <dd className="mt-3 text-slate-600 md:text-center">
                          <PrismicRichText field={item.definition} />
                        </dd>
                      </div>
                    )
                  })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DefinitionList

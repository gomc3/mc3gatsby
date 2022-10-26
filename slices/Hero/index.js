import React from 'react'
import Image from 'next/future/image'
import { PrismicRichText } from '@prismicio/react'
import ButtonLink from '../../components/ButtonLink'

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => {
  const {
    primary: {
      herobackgroundimage,
      herocta,
      herodescription,
      heroheadline,
      heroheadlinespan,
      herotitle,
      gradientstartcolor,
      gradientendcolor,
    },
    items,
  } = slice

  /**
   * define html templates for richtext fields
   */
  const components = {
    heading1: ({ node, children }) => (
      <h1 className="mb-6 text-center text-5xl font-medium uppercase tracking-wide text-blue-700 sm:leading-none lg:text-6xl xl:text-7xl">
        {children}
      </h1>
    ),
    heading3: ({ node, children }) => (
      <h3 className="mx-auto text-center text-2xl font-extrabold leading-9 text-slate-900 sm:text-3xl sm:leading-10">
        {children}
      </h3>
    ),
    heading4: ({ node, children }) => (
      <h3 className="mx-auto text-center text-xl font-extrabold leading-9 text-slate-900 sm:text-3xl sm:leading-10">
        {children}
      </h3>
    ),
    paragraph: ({ node, children }) => {
      return (
        <p className="prose mx-auto my-4 md:prose-lg md:my-6 lg:prose-xl lg:my-8 xl:prose-2xl xl:my-10">
          {children}
        </p>
      )
    },
    image: ({ node, children }) => {
      return (
        <Image
          src={node.url}
          alt={node.alt || ''}
          width={node.dimensions.width}
          height={node.dimensions.height}
        />
      )
    },
  }
  return (
    <section
      className="relative w-full bg-blue-50 py-10"
      style={{
        background: `linear-gradient(to bottom, ${
          gradientstartcolor || '#FFFFFF'
        }BF, ${gradientendcolor || '#FFFFFF'}FF), url(${
          herobackgroundimage.url
        }) no-repeat center bottom / cover scroll`,
      }}
    >
      <div className="mx-auto flex max-w-screen-2xl flex-col flex-wrap items-center justify-center lg:space-x-12">
        <div className="max-w-screen-lg px-4 pt-4 sm:px-8 sm:pb-5 md:py-9 lg:py-6">
          <PrismicRichText field={herotitle} components={components} />
          <h2 className="my-4 text-center text-5xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-6xl sm:tracking-normal md:my-6 lg:my-8 xl:my-10">
            {heroheadline}{' '}
            <span className="text-blue-700">{heroheadlinespan}</span>
          </h2>
          <div className="flex flex-wrap items-center justify-evenly gap-y-4 py-4 md:gap-y-0 md:py-6 lg:py-8 xl:py-10">
            {items &&
              items.length &&
              items.map((item, i) => {
                return (
                  <ButtonLink
                    key={item.buttonlink.url + i}
                    link={item.buttonlink}
                    color={item.buttoncolor}
                    text={item.buttontext}
                  />
                )
              })}
          </div>
          <PrismicRichText field={herodescription} components={components} />
        </div>
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <PrismicRichText field={herocta} components={components} />
          <PrismicRichText
            field={slice.primary.heroctadescription}
            components={components}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

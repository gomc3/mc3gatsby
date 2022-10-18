import React from 'react'
import Image from 'next/future/image'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import ButtonLink from '../../components/ButtonLink'

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => {
  console.log('HeroSlice ===> ', slice)
  const {
    primary: {
      herobackgroundimage,
      herocta,
      herodescription,
      heroheadline,
      heroheadlinespan,
      herotitle,
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
      return <p className="prose prose-lg mx-auto">{children}</p>
    },
    image: ({ node, children }) => {
      console.log('COMPONENT NODE', node)
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
      className="relative min-h-[720px] w-full bg-blue-50"
      style={{
        background: `linear-gradient(to bottom, rgba(255, 255, 255, .3), rgba(255, 255, 255, 1)), url(${herobackgroundimage.url}) no-repeat bottom left fixed`,
      }}
    >
      <div className="mx-auto flex max-w-screen-2xl flex-col flex-wrap items-center justify-center lg:space-x-12">
        <div className="z-10 max-w-screen-lg px-4 pt-4 sm:px-8 sm:pb-5 md:py-9 lg:py-6">
          <PrismicRichText field={herotitle} components={components} />
          <h2 className="mb-8 text-center text-5xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-6xl sm:tracking-normal">
            {heroheadline}
            <span className="text-blue-700">{heroheadlinespan}</span>
          </h2>
          <div className="flex flex-wrap items-center justify-evenly">
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
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <PrismicRichText field={herocta} components={components} />
          <PrismicRichText
            field={slice.primary.heroctadescription}
            components={components}
          />
        </div>
      </div>
      {/* <Image
        src={herobackgroundimage.url}
        alt=""
        width={herobackgroundimage.dimensions.width}
        height={herobackgroundimage.dimensions.height}
        className="absolute inset-0"
      /> */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-blue-50" />
    </section>
  )
}

export default Hero

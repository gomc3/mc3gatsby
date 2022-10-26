import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.TextWithImageSlice} TextWithImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextWithImageSlice>} TextWithImageProps
 * @param { TextWithImageProps }
 */
const TextWithImage = ({ slice }) => {
  const {
    primary: {
      backgroundcolor,
      content,
      heading,
      image,
      imagelocation,
      colortext,
      colortextcolor,
      buttonlink,
      buttontext,
    },
    variation,
  } = slice
  switch (variation) {
    case 'textWithImageAndButton':
      return (
        <section className="mx-auto my-4 max-w-7xl md:my-6 lg:my-8 lg:grid lg:grid-cols-2 xl:my-10">
          <div
            className={`flex items-center justify-center px-4 text-center ${
              imagelocation ? `order-last` : ``
            }`}
          >
            <PrismicNextImage
              field={image}
              className="w-1/2 rounded-lg contrast-100 filter transition duration-500 ease-in-out hover:contrast-125 sm:w-3/5 lg:w-3/4"
            />
          </div>
          <div className="lg:ml-1/2 px-4 py-8 sm:px-6 sm:py-12 lg:py-16 lg:pl-12">
            <h2
              className={`text-center text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl ${
                imagelocation ? `lg:text-left` : `lg:text-right`
              }`}
            >
              {`${heading} `}
              <span
                className="whitespace-nowrap"
                style={{ color: colortextcolor || '#1d4ed8' }}
              >
                {colortext}
              </span>
            </h2>
            <p className="mt-6 text-lg leading-7 text-slate-600">
              Members are welcome to deliver Ignite presentations during
              meetings. <strong>What are Ignite presentations?</strong> They are
              presentations in which members get 20 slides, which automatically
              advance every 15 seconds. The result is a fast and fun
              presentation which lasts just 5 minutes!
            </p>
            <div
              className={`mt-8 text-center ${
                imagelocation ? `lg:text-left` : `lg:text-right`
              }`}
            >
              <span className="inline-flex rounded-md shadow">
                <PrismicLink
                  field={buttonlink}
                  className="btn btn-secondary text-base-100 focus:outline-none focus:ring-4 focus:ring-yellow-300 "
                >
                  Let Us Know You are Interested
                </PrismicLink>
              </span>
            </div>
          </div>
        </section>
      )
    default:
      return (
        <section className="mx-auto my-4 grid max-w-screen-lg items-center p-4 md:my-6 md:grid-cols-3 lg:my-8 xl:my-10">
          <div
            className={`mx-auto rounded p-4 text-center md:col-span-1 md:mx-4 ${
              imagelocation === true ? `order-last` : ``
            }`}
            style={{ background: `${backgroundcolor || `#ffffff`}` }}
          >
            <PrismicNextImage
              field={image}
              width={image.dimensions.width}
              height={image.dimensions.height}
              className="rounded"
            />
          </div>
          <div className="prose my-4 mx-auto md:prose-lg md:col-span-2 lg:prose-xl">
            <PrismicRichText field={heading} />
            <PrismicRichText field={content} />
          </div>
        </section>
      )
  }
}

export default TextWithImage

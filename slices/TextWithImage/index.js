import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.TextWithImageSlice} TextWithImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextWithImageSlice>} TextWithImageProps
 * @param { TextWithImageProps }
 */
const TextWithImage = ({ slice }) => {
  const {
    primary: { backgroundcolor, content, heading, image, imagelocation },
  } = slice
  return (
    <section className="mx-auto grid max-w-screen-lg items-center p-4 md:grid-cols-3">
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

export default TextWithImage

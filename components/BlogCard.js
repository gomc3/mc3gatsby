import * as React from 'react'
import Link from 'next/link'
import * as prismicH from '@prismicio/helpers'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

export default function BlogCard({
  data: { author, excerpt, featuredimage, title },
  // first_publication_date,
  // id,
  // last_publication_date,
  uid,
  url,
  tags,
}) {
  return (
    <div className="card mx-auto my-4 max-w-screen-sm bg-base-100 shadow-xl md:my-6 lg:my-8 xl:my-10">
      <figure>
        <Link href={url || `/blog/${uid}`}>
          <a tabIndex={-1}>
            <PrismicNextImage field={featuredimage} />
          </a>
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-secondary">{prismicH.asText(title)}</h2>
        <p className="text-xs">{`Written by ${prismicH.asText(author)}`}</p>
        <PrismicRichText field={excerpt} />
        <div className="card-actions justify-center md:justify-end">
          <Link href={url || `/blog/${uid}`}>
            <a className="btn btn-secondary my-4 text-base-100 md:my-6">
              Continue Reading
            </a>
          </Link>
        </div>
        <ul className="flex flex-wrap space-x-3">
          {tags &&
            tags.length > 0 &&
            tags.map(tag => (
              <li key={tag} className="badge badge-accent">
                {tag}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

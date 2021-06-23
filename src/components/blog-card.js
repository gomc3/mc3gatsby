import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function BlogCard({
  postData: {
    childMdx: { excerpt, timeToRead },
    cover,
    id,
    modifiedTime,
    name,
    slug,
    tags,
  },
}) {
  return (
    <div className="rounded-md shadow-md my-2 sm:my-3 lg:my-4 bg-gray-100 h-full">
      {cover ? (
        <aside className="relative rounded-tl-md rounded-tr-md text-white h-40 sm:h-48 md:h-56 lg:h-60 w-full text-center overflow-hidden">
          <GatsbyImage
            image={getImage(cover.image)}
            className="inset-0 z-0 rounded-tl-md rounded-tr-md"
            alt={cover.alt}
            title={cover.title}
          />
        </aside>
      ) : (
        <></>
      )}

      <section className="px-2 sm:px-3 lg:px-4 h-full">
        <header className="flex justify-between items-center flex-1">
          <Link
            to={slug}
            className="no-underline hover:underline hover:text-blue-800"
          >
            <h1 className="text-2xl  my-1 sm:my-2 md:my-3 text-blue-800">
              {name}
            </h1>
          </Link>

          <p className="text-sm text-blue-600">
            <Link to={slug} className="underline hover:no-underline">
              {timeToRead} minute read
            </Link>
          </p>
        </header>
        <div className="text-gray-700 text-sm sm:text-xs">
          Last Updated{" "}
          {new Date(modifiedTime).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <p className="text-base mt-2 sm:mt-3 md:mt-4 lg:mt-5 mb-6">{excerpt}</p>
        <Link
          to={slug}
          className="px-5 py-3 text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:shadow-outline transition duration-500 ease-in-out"
        >
          Continue to Full Article
        </Link>
      </section>
    </div>
  );
}

import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function BlogCard({
  postData: {
    childMdx: { excerpt, timeToRead },
    cover,
    id,
    createdTime,
    name,
    slug,
    tags,
  },
}) {
  return (
    <div className="rounded-md shadow-md my-2 sm:my-3 lg:my-4 bg-slate-100 h-full">
      {cover ? (
        <aside className="relative rounded-tl-md rounded-tr-md text-white h-40 sm:h-48 md:h-56 lg:h-60 w-full text-center overflow-hidden aspect-w-2 aspect-h-1">
          <Link
            to={slug}
            className="no-underline hover:underline hover:text-blue-800"
            tabIndex="-1"
          >
            <GatsbyImage
              image={getImage(cover.image)}
              className="inset-0 z-0 rounded-tl-md rounded-tr-md"
              alt={cover.alt}
              title={cover.title}
            />
          </Link>
        </aside>
      ) : (
        <></>
      )}

      <section className="px-2 sm:px-3 lg:px-4 h-full">
        <header className="flex justify-between items-center flex-wrap mt-1">
          <Link
            to={slug}
            className="no-underline hover:underline hover:text-blue-800"
          >
            <h1 className="text-2xl  my-1 sm:my-2 md:my-3 text-blue-800">
              {name}
            </h1>
          </Link>

          <p className="text-sm text-blue-600 flex-wrap">
            <Link to={slug} className="underline hover:no-underline">
              {timeToRead} minute read
            </Link>
          </p>
        </header>
        <div className="text-slate-700 text-sm sm:text-xs">
          First Published on{" "}
          {new Date(createdTime).toLocaleDateString("en-US", {
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

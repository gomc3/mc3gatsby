import * as React from "react";

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
  console.log(tags);
  return (
    <div className="rounded-md shadow-sm w-full my-2 sm:my-3 md:my-4 lg:my-5 grid grid-cols-12">
      <header className="col-span-4">
        <h2>{name}</h2>
      </header>
    </div>
  );
}

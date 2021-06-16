import React from "react";

export default function PageTitle({ title, children }) {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl my-2 sm:my-4 lg:my-6 font-bold text-blue-700">
        {title}
      </h1>
      {children ? (
        <h2 className="font-light text-lg text-gray-700">{children}</h2>
      ) : (
        <></>
      )}
    </>
  );
}

import * as React from "react";

export default function execTeam({ execTeamName, children, teamNumber }) {
  return (
    <section className={`${teamNumber > 1 && `bg-blue-100`} py-6`}>
      {teamNumber === 1 && (
        <h2 className="text-4xl my-3 md:my-4 lg:my-6 font-medium text-blue-700 text-center">
          Current Executive Team Members
        </h2>
      )}
      {teamNumber > 1 && (
        <h2 className="text-4xl my-3 md:my-4 lg:my-6 font-medium text-blue-700 text-center">
          Executive Team Members from:
        </h2>
      )}
      {teamNumber === 0 && (
        <h2 className="text-4xl my-3 md:my-4 lg:my-6 font-medium text-blue-700 text-center">
          A Special Thank You Goes to:
        </h2>
      )}
      {teamNumber > 0 && (
        <h3 className="text-3xl my-2 md:my-3 lg:my-5  text-gray-600 text-center">
          {execTeamName}
        </h3>
      )}
      <div className="w-4/5  mx-auto rounded-md border border-gray-500 p-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {children}
      </div>
    </section>
  );
}

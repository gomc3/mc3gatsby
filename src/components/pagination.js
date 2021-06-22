import * as React from "react";
import { Link } from "gatsby";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Pagination({
  limit,
  currentPage,
  numPages,
  totalPosts,
  path,
}) {
  var basePath;
  if (currentPage === 1) {
    basePath = path;
  } else {
    basePath = path.slice(0, -1);
  }
  return (
    <div
      className={
        numPages > 1
          ? "bg-white px-4 py-3 flex flex-col items-center justify-between border-t border-gray-200 sm:px-6"
          : "hidden"
      }
    >
      <div className="flex-1 flex justify-between sm:hidden">
        <Link
          to={currentPage > 2 ? `${basePath}${currentPage - 1}` : `${basePath}`}
          className={
            currentPage === 1
              ? `relative pointer-events-none inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-white hover:bg-gray-50`
              : `relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`
          }
          disabled={currentPage === 1}
        >
          Previous
        </Link>
        <Link
          to={`${currentPage + 1}`}
          className={
            currentPage === numPages
              ? `relative pointer-events-none inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-white hover:bg-gray-50`
              : `relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`
          }
          disabled={currentPage === numPages}
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:justify-center">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{limit}</span> of{" "}
            <span className="font-medium">{totalPosts}</span> results
          </p>
        </div>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <Link
              to={
                currentPage > 2
                  ? `${basePath}${currentPage - 1}`
                  : `${basePath}`
              }
              className={
                currentPage === 1
                  ? "relative pointer-events-none inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-200 hover:bg-gray-50"
                  : "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              }
            >
              <span className="sr-only">Previous</span>
              <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
            </Link>
            {Array.from({ length: numPages }, (_, i) => (
              <Link
                key={`pagination-number${i + 1}`}
                to={`${currentPage === 1 ? `${basePath}/` : basePath}${
                  i === 0 ? "" : i + 1
                }`}
                className={
                  currentPage === i + 1
                    ? `z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium`
                    : `bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`
                }
              >
                {i + 1}
              </Link>
            ))}
            <Link
              to={
                currentPage === 1
                  ? `${currentPage + 1}`
                  : `${basePath}${currentPage + 1}`
              }
              className={
                currentPage === numPages
                  ? "relative pointer-events-none inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-200 hover:bg-gray-50"
                  : "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              }
              disabled={currentPage === numPages}
            >
              <span className="sr-only">Next</span>
              <HiChevronRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

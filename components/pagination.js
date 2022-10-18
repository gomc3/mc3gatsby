import * as React from "react";
import { Link } from "gatsby";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// Create URL path for numeric pagination
// const getPageNumberPath = (currentIndex, basePath) => {
//   if (currentIndex === 0) {
//     return basePath;
//   }
//   return `${basePath}/` + (currentIndex + 1);
// };

const Pagination = ({ currentPage, pageCount, basePath }) => {
  if (!currentPage || !pageCount) return null;
  // Create URL path for previous and next buttons
  const prevPagePath =
    currentPage - 1 === 1
      ? basePath
      : `${basePath}/` + (currentPage - 1).toString();
  const nextPagePath = `${basePath}/` + (currentPage + 1).toString();

  // Check if page is first or last to disable previous and next buttons
  const prevClass = currentPage === 1 ? "pointer-events-none" : "enabled";
  const nextClass =
    currentPage === pageCount ? "pointer-events-none" : "enabled";

  return (
    <div className="flex justify-center space-x-4 text-blue-700 text-xl font-source">
      <Link
        className={`${prevClass} bg-opacity-50 px-4 py-2 rounded focus:outline-none focus:ring-4 focus:ring-green-300`}
        to={prevPagePath + "/"}
        rel="prev"
      >
        <HiChevronLeft className="w-6 h-6 inline" /> Previous
      </Link>
      {/*  Render numeric pagination  */}
      {/* {Array.from({ length: pageCount }, (_, i) => {
        return (
          <Link
            to={getPageNumberPath(i, basePath)}
            className={`py-2 px-3 focus:outline-none focus:ring-4 focus:ring-yellow-200`}
            key={i + 1}
          >
            {i + 1}
          </Link>
        );
      })} */}
      <Link
        className={`${nextClass} dark:bg-black bg-opacity-50 px-4 py-2 rounded focus:outline-none focus:ring-4 focus:ring-green-300`}
        to={nextPagePath}
        rel="next"
      >
        Older Posts <HiChevronRight className="w-6 h-6 inline" />
      </Link>
    </div>
  );
};

export default Pagination;

// export default function Pagination({
//   limit,
//   currentPage,
//   numPages,
//   totalPosts,
//   path,
// }) {
//   var basePath;
//   if (currentPage === 1) {
//     basePath = path;
//   } else {
//     basePath = path.slice(0, -1);
//   }
//   return (
//     <div className='bg-white px-4 py-3 flex flex-col items-center justify-between border-t border-slate-200 sm:px-6'>
//       <div className='flex-1 flex justify-between sm:hidden'>
//         <Link
//           to={currentPage > 2 ? `${basePath}${currentPage - 1}` : `${basePath}`}
//           className={
//             currentPage === 1
//               ? `relative pointer-events-none inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-400 bg-white hover:bg-slate-50`
//               : `relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50`
//           }
//           disabled={currentPage === 1}
//         >
//           Previous
//         </Link>
//         <Link
//           to={`${currentPage + 1}`}
//           className={
//             currentPage === numPages
//               ? `relative pointer-events-none inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-400 bg-white hover:bg-slate-50`
//               : `relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50`
//           }
//           disabled={currentPage === numPages}
//         >
//           Next
//         </Link>
//       </div>
//       <div className='hidden sm:flex sm:justify-center'>
//         <div>
//           <p className='text-sm text-slate-700'>
//             Showing <span className='font-medium'>{limit}</span> of{" "}
//             <span className='font-medium'>{totalPosts}</span> results
//           </p>
//         </div>
//       </div>
//       <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
//         <div>
//           <nav
//             className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
//             aria-label='Pagination'
//           >
//             <Link
//               to={
//                 currentPage > 2
//                   ? `${basePath}${currentPage - 1}`
//                   : `${basePath}`
//               }
//               className={
//                 currentPage === 1
//                   ? "relative pointer-events-none inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 bg-white text-sm font-medium text-slate-200 hover:bg-slate-50"
//                   : "relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50"
//               }
//             >
//               <span className='sr-only'>Previous</span>
//               <HiChevronLeft className='h-5 w-5' aria-hidden='true' />
//             </Link>
//             {Array.from({ length: numPages }, (_, i) => (
//               <Link
//                 key={`pagination-number${i + 1}`}
//                 to={`${currentPage === 1 ? `${basePath}/` : basePath}${
//                   i === 0 ? "" : i + 1
//                 }`}
//                 className={
//                   currentPage === i + 1
//                     ? `z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium`
//                     : `bg-white border-slate-300 text-slate-500 hover:bg-slate-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`
//                 }
//               >
//                 {i + 1}
//               </Link>
//             ))}
//             <Link
//               to={
//                 currentPage === 1
//                   ? `${currentPage + 1}`
//                   : `${basePath}${currentPage + 1}`
//               }
//               className={
//                 currentPage === numPages
//                   ? "relative pointer-events-none inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 bg-white text-sm font-medium text-slate-200 hover:bg-slate-50"
//                   : "relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50"
//               }
//               disabled={currentPage === numPages}
//             >
//               <span className='sr-only'>Next</span>
//               <HiChevronRight className='h-5 w-5' aria-hidden='true' />
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }

import * as React from 'react'
export default function RegistrantInput({ index, register }) {
  const registrantNumber = index
  return (
    <>
      <label
        htmlFor={`registrantName${registrantNumber}`}
        className="block border-t border-dashed border-blue-500 ml-6"
      >
        <h3 className="font-semibold text-lg text-blue-800 mt-6">
          Full Name of Registrant #{registrantNumber}:
        </h3>
        <input
          type="text"
          name={`registrantName${registrantNumber}`}
          id={`registrantName${registrantNumber}`}
          placeholder={`Enter the full name of registrant #${registrantNumber} here...`}
          {...register(`registrantName${registrantNumber}`)}
          className="form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition duration-150 ease-in-out"
        />
      </label>
      <label
        htmlFor={`registrantEmail${registrantNumber}`}
        className="block ml-6"
      >
        <h3 className="font-semibold text-lg text-blue-800">
          Email of Registrant #{registrantNumber}:
        </h3>
        <input
          type="email"
          name={`registrantEmail${registrantNumber}`}
          id={`registrantEmail${registrantNumber}`}
          placeholder={`registrant${registrantNumber}@example.com`}
          {...register(`registrantEmail${registrantNumber}`)}
          className="form-input my-3 max-w-sm block w-full px-0.5 font-medium border-b-2 border-slate-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-sm transition duration-150 ease-in-out"
        />
      </label>
    </>
  )
}

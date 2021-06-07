import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "gatsby";
import {
  HiChevronDown,
  HiCalendar,
  HiOutlineCalendar,
  HiSun,
  HiOutlineSun,
  HiAcademicCap,
  HiOutlineAcademicCap,
  HiNewspaper,
  HiOutlineNewspaper,
} from "react-icons/hi";

export default function NewNavbar() {
  return (
    <div className="">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="w-0 flex-1 flex">
              <a className="inline-flex flex-col" href="/">
                <p className="text-2xl font-semibold text-blue-600">
                  MC<sup>3</sup>
                </p>
                <p className="text-xs">Monmouth County Curriculum Consortium</p>
              </a>
            </div>
            {/* Mobile Navigation begins here */}
            <div className="-mr-2 -my-2 md:hidden">
              <div className="text-right">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-opacity-50 hover:text-blue-900 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      Menu
                      <HiChevronDown
                        className="w-5 h-5 ml-2 -mr-1 text-blue-200"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={`${
                                active
                                  ? "bg-blue-700 text-white"
                                  : "text-gray-900"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <HiCalendar
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              ) : (
                                <HiOutlineCalendar
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              )}
                              Calendar
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-blue-700 text-white"
                                  : "text-gray-900"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <HiSun
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              ) : (
                                <HiOutlineSun
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              )}
                              Ignite
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={`${
                                active
                                  ? "bg-blue-700 text-white"
                                  : "text-gray-900"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <HiAcademicCap
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              ) : (
                                <HiOutlineAcademicCap
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              )}
                              Scholarships
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={`${
                                active
                                  ? "bg-blue-700 text-white"
                                  : "text-gray-900"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <HiNewspaper
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              ) : (
                                <HiOutlineNewspaper
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              )}
                              Blog
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            {/* Desktop Navigation begins here */}
            <nav className="hidden md:flex space-x-10">
              <Link
                className="text-gray-600 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
                to="/"
              >
                Calendar
              </Link>
              <Link
                className="text-gray-600 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
                to="/"
              >
                Ignite
              </Link>
              <Link
                className="text-gray-600 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
                to="/"
              >
                Scholarship
              </Link>
              <Link
                className="text-gray-600 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
                to="/"
              >
                Blog
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
              <span className="inline-flex rounded-md shadow-sm">
                <Link
                  className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:border-blue-600 focus:shadow-outline-teal active:bg-teal-600 transition ease-in-out duration-150"
                  to="/"
                >
                  Join MC3
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

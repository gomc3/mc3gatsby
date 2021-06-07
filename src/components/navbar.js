import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
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
  HiPlus,
  HiOutlinePlus,
  HiExternalLink,
  HiOutlineExternalLink,
  HiCloud,
  HiOutlineCloud,
} from "react-icons/hi";

const query = graphql`
  {
    allContentfulMenuItem(sort: { fields: menuOrder, order: ASC }) {
      nodes {
        linkText
        url
        type
        menuOrder
        menuIcon
        id
      }
    }
  }
`;

export default function Navbar(props) {
  const {
    allContentfulMenuItem: { nodes },
  } = useStaticQuery(query);
  return (
    <div className={props.classes}>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="w-0 flex-1 flex">
              <Link className="inline-flex flex-col" to="/">
                <p className="text-2xl font-semibold text-blue-600">
                  MC<sup>3</sup>
                </p>
                <p className="text-xs">Monmouth County Curriculum Consortium</p>
              </Link>
            </div>
            {/* Mobile Navigation begins here */}
            <div
              className={`${
                nodes.length > 5 ? " " : " md:hidden"
              } -mr-2 -my-2 `}
            >
              <div className="text-right">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-opacity-95 hover:text-blue-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
                        {nodes.map((node) => {
                          const icons = {
                            Calendar: HiCalendar,
                            Sun: HiSun,
                            AcademicCap: HiAcademicCap,
                            Newspaper: HiNewspaper,
                            Plus: HiPlus,
                            Link: HiExternalLink,
                            Cloud: HiCloud,
                          };
                          const iconsOutline = {
                            Calendar: HiOutlineCalendar,
                            Sun: HiOutlineSun,
                            AcademicCap: HiOutlineAcademicCap,
                            Newspaper: HiOutlineNewspaper,
                            Plus: HiOutlinePlus,
                            Link: HiOutlineExternalLink,
                            Cloud: HiOutlineCloud,
                          };
                          const MenuIcon = icons[node.menuIcon];
                          const MenuIconOutline = iconsOutline[node.menuIcon];
                          // Check Link type, if internal use Link component
                          if (node.type === "Internal") {
                            return (
                              <Menu.Item key={node.id}>
                                {({ active }) => (
                                  <Link
                                    to={node.url}
                                    className={`${
                                      active
                                        ? "bg-blue-700 text-white"
                                        : "text-gray-900"
                                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                  >
                                    {active ? (
                                      <MenuIcon
                                        className="w-5 h-5 mr-2"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <MenuIconOutline
                                        className="w-5 h-5 mr-2"
                                        aria-hidden="true"
                                      />
                                    )}
                                    {node.linkText}
                                  </Link>
                                )}
                              </Menu.Item>
                            );
                          } else {
                            return (
                              <Menu.Item key={node.id}>
                                {({ active }) => (
                                  <a
                                    href={node.url}
                                    className={`${
                                      active
                                        ? "bg-blue-700 text-white"
                                        : "text-gray-900"
                                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                  >
                                    {active ? (
                                      <MenuIcon
                                        className="w-5 h-5 mr-2"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <MenuIconOutline
                                        className="w-5 h-5 mr-2"
                                        aria-hidden="true"
                                      />
                                    )}
                                    {node.linkText}
                                  </a>
                                )}
                              </Menu.Item>
                            );
                          }
                        })}
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
                                <HiPlus
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              ) : (
                                <HiOutlinePlus
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              )}
                              Join MC
                              <span
                                className="relative text-sm z-0"
                                style={{ lineHeight: 0, top: "-0.5em" }}
                              >
                                3
                              </span>
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
            <nav
              className={`${
                nodes.length > 5 ? "hidden " : "hidden md:flex space-x-10 "
              } `}
            >
              {nodes.map((node) => {
                if (node.type === "Internal") {
                  return (
                    <Link
                      className="text-gray-600 inline-flex items-center text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
                      to={node.url}
                      key={node.menuOrder}
                    >
                      {node.linkText}
                    </Link>
                  );
                } else {
                  return (
                    <a
                      className="text-gray-600 inline-flex items-center text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150"
                      href={node.url}
                      key={node.menuOrder}
                    >
                      {node.linkText}
                    </a>
                  );
                }
              })}
            </nav>
            <div
              className={`${
                nodes.length > 5 ? "hidden" : " hidden md:flex "
              }   items-center justify-end space-x-8 md:flex-1 lg:w-0`}
            >
              <span className="inline-flex rounded-md shadow-sm flex-none">
                <Link
                  className="whitespace-no-wrap text-center items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600 transition ease-in-out duration-150"
                  to="/"
                >
                  Join MC
                  <span
                    className="relative text-sm z-0"
                    style={{ lineHeight: 0, top: "-0.5em" }}
                  >
                    3
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
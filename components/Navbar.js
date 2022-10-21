import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import Headroom from 'react-headroom'
import { PrismicImage } from '@prismicio/react'
import Link from 'next/link'

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
  HiHome,
  HiOutlineHome,
  HiIdentification,
  HiOutlineIdentification,
  HiChatAlt2,
  HiOutlineChatAlt2,
} from 'react-icons/hi'

const Navbar = ({ logo, navigation, path }) => {
  return (
    <Headroom>
      <div className="mx-auto w-full px-4 shadow-sm sm:px-6 lg:px-8">
        <div className="relative mx-auto flex max-w-screen-xl items-center justify-between py-6">
          <div>
            <Link
              href="/"
              className="focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              <div className="flex flex-wrap items-center">
                <PrismicImage field={logo} className="mr-3 block h-16 w-16" />
                <span className="text-sm font-medium text-blue-700 md:text-base lg:text-xl">
                  Monmouth County <br /> Curriculum Consortium
                </span>
              </div>
            </Link>
          </div>
          {/* Mobile Nav Begins Here */}
          <div className={`${navigation.length > 5 ? '' : 'lg:hidden'} `}>
            <div className="text-right">
              <Menu as="div" className={`relative inline-block text-left`}>
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 hover:text-blue-50 focus:outline-none focus:ring-4 focus:ring-yellow-300">
                    Menu
                    <HiChevronDown
                      className="ml-2 -mr-1 h-5 w-5 text-blue-200"
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
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-slate-100 rounded-md bg-white shadow-lg ring-1 ring-yellow-300 ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 text-blue-900">
                      {navigation.map(item => {
                        const icons = {
                          Calendar: HiCalendar,
                          Sun: HiSun,
                          AcademicCap: HiAcademicCap,
                          Newspaper: HiNewspaper,
                          Plus: HiPlus,
                          Link: HiExternalLink,
                          Cloud: HiCloud,
                          Identification: HiIdentification,
                          ChatAlt2: HiChatAlt2,
                          Home: HiHome,
                          Plus: HiPlus,
                        }
                        const iconsOutline = {
                          Calendar: HiOutlineCalendar,
                          Sun: HiOutlineSun,
                          AcademicCap: HiOutlineAcademicCap,
                          Newspaper: HiOutlineNewspaper,
                          Plus: HiOutlinePlus,
                          Link: HiOutlineExternalLink,
                          Cloud: HiOutlineCloud,
                          Identification: HiOutlineIdentification,
                          ChatAlt2: HiOutlineChatAlt2,
                          Home: HiOutlineHome,
                          Plus: HiOutlinePlus,
                        }
                        const MenuIcon = icons[item.itemicon]
                        const MenuIconOutline = iconsOutline[item.itemicon]
                        if (
                          item.itemlink.link_type === 'Document' &&
                          path !== item.itemlink.url
                        ) {
                          return (
                            <Menu.Item
                              key={item.itemlink.id || item.itemlink.url}
                            >
                              {({ active }) => (
                                <Link
                                  href={item.itemlink.url}
                                  className={`${
                                    active
                                      ? 'bg-blue-700 hover:text-white focus:text-white'
                                      : 'text-slate-900 '
                                  } ${
                                    path === item.itemlink.url &&
                                    `cursor-default border-b-2 bg-blue-100 font-semibold text-black shadow-sm hover:text-yellow-500`
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm focus:text-white`}
                                >
                                  {active ? (
                                    <MenuIcon
                                      className="mr-2 inline h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <MenuIconOutline
                                      className="mr-2 inline h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  {item.itemtext}
                                </Link>
                              )}
                            </Menu.Item>
                          )
                        } else if (path !== item.itemlink.url) {
                          return (
                            <Menu.Item
                              key={item.itemlink.id || item.itemlink.url}
                            >
                              {({ active }) => (
                                <a
                                  href={item.itemlink.url}
                                  className={`${
                                    active
                                      ? 'bg-blue-700 hover:text-white focus:text-white'
                                      : 'text-slate-900 '
                                  } ${
                                    path === item.itemlink.url &&
                                    `cursor-default border-b-2 bg-blue-100 font-semibold text-black shadow-sm hover:text-blue-900`
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm focus:text-white`}
                                >
                                  {active ? (
                                    <MenuIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <MenuIconOutline
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  {item.itemtext}
                                </a>
                              )}
                            </Menu.Item>
                          )
                        } else {
                          return (
                            <Menu.Item
                              key={item.itemlink.id || item.itemlink.url}
                            >
                              {({ active }) => (
                                <span
                                  className={`${
                                    active
                                      ? 'bg-blue-700 hover:text-white focus:text-white'
                                      : 'text-slate-900 '
                                  } ${
                                    path === item.itemlink.url &&
                                    `cursor-default border-b-2 bg-blue-100 font-semibold text-black shadow-sm hover:text-blue-900`
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm focus:text-white`}
                                >
                                  {active ? (
                                    <MenuIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <MenuIconOutline
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  {item.itemtext}
                                </span>
                              )}
                            </Menu.Item>
                          )
                        }
                      })}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          {/* Mobile Nav Ends Here */}
          {/* Conditional Desktop Nav Begins Here */}
          {navigation.length < 6 && (
            <>
              <nav className="absolute left-1/2 top-1/2 hidden -translate-y-1/2 -translate-x-1/2 grid-flow-col justify-center gap-x-6 font-semibold text-blue-700 lg:grid">
                {navigation.map(item => {
                  if (
                    item.itemlink.link_type === 'Document' &&
                    path !== item.itemlink.url
                  ) {
                    return (
                      <Link
                        key={item.itemlink.id}
                        href={item.itemlink.url}
                        className="rounded px-4 py-2 hover:bg-blue-50"
                      >
                        {item.itemtext}
                      </Link>
                    )
                  } else if (path !== item.itemlink.url) {
                    return (
                      <a
                        key={item.itemlink.url}
                        href={item.itemlink.url}
                        className="rounded px-4 py-2 hover:bg-blue-50"
                      >
                        {item.itemtext}
                      </a>
                    )
                  } else {
                    return (
                      <span
                        key={item.itemlink.url}
                        className="cursor-default rounded px-4 py-2 text-yellow-600 hover:bg-blue-50"
                      >
                        {item.itemtext}
                      </span>
                    )
                  }
                })}
              </nav>
              {navigation.length < 6 && (
                <div className="hidden items-center justify-end space-x-8 lg:block">
                  <span className="inline-flex flex-none rounded-md shadow-sm">
                    <Link
                      className=" whitespace-no-wrap items-center justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-center text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 active:bg-blue-600"
                      href="/join"
                    >
                      Become a Member
                    </Link>
                  </span>
                </div>
              )}
            </>
          )}
          {/* Conditional Desktop Nav Ends Here */}
        </div>
      </div>
    </Headroom>
  )
}
export default Navbar

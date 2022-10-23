import Icon from './Icon'
import Headroom from 'react-headroom'
import { PrismicImage, PrismicLink } from '@prismicio/react'
import Link from 'next/link'

import {
  HiChevronDown,
  HiCalendar,
  HiSun,
  HiAcademicCap,
  HiNewspaper,
  HiPlus,
  HiExternalLink,
  HiCloud,
  HiHome,
  HiIdentification,
  HiChatAlt2,
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
              <a className="flex flex-wrap items-center">
                <PrismicImage field={logo} className="mr-3 block h-16 w-16" />
                <span className="text-sm font-medium text-blue-700 md:text-base lg:text-xl">
                  Monmouth County <br /> Curriculum Consortium
                </span>
              </a>
            </Link>
          </div>
          {/* Mobile Nav Begins Here */}
          <div className={`${navigation.length > 6 ? '' : 'xl:hidden'} `}>
            <div className="dropdown-end dropdown">
              <label
                tabIndex={0}
                className="btn btn-secondary btn-sm m-1 rounded text-base-100 md:btn-md"
              >
                Menu <HiChevronDown className="ml-1 inline sm:ml-2 md:ml-3" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu w-52 rounded bg-base-100 p-2 shadow"
              >
                {navigation.length &&
                  navigation.map((item, i) => {
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
                    const MenuIcon = icons[item.itemicon]
                    if (path !== item.itemlink.url) {
                      return (
                        <PrismicLink
                          key={item.itemlink.id || item.itemlink.url}
                          field={item.itemlink}
                          className={`group my-3 flex w-full items-center rounded px-2 py-2 text-blue-900 hover:bg-blue-900 hover:text-white focus:text-accent`}
                        >
                          <MenuIcon
                            className="mr-2 inline text-2xl"
                            aria-hidden="true"
                          />
                          {item.itemtext}
                        </PrismicLink>
                      )
                    } else {
                      return (
                        <span
                          key={item.itemlink.id || item.itemlink.url}
                          className={`${
                            path === item.itemlink.url &&
                            `cursor-default border-b-2 bg-accent shadow-sm hover:text-blue-900`
                          } group flex w-full items-center rounded-md px-2 py-2 focus:text-white`}
                        >
                          <MenuIcon
                            className="mr-2 text-2xl"
                            aria-hidden="true"
                          />
                          {item.itemtext}
                        </span>
                      )
                    }
                  })}
                <li>
                  <Link href="/join">
                    <a
                      className={`group my-3 flex w-full items-center rounded px-2 py-2 text-blue-900 hover:bg-blue-900 hover:text-white focus:text-accent ${
                        path === '/join'
                          ? `btn-disabled bg-accent shadow-sm `
                          : ``
                      }`}
                    >
                      <Icon name="Plus" />
                      Become a Member
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Mobile Nav Ends Here */}
          {/* Conditional Desktop Nav Begins Here */}
          {navigation.length < 7 && (
            <>
              <nav className="absolute left-1/2 top-1/2 hidden -translate-y-1/2 -translate-x-1/2 grid-flow-col justify-center gap-x-6 font-semibold text-blue-700 xl:grid">
                {navigation.map(item => {
                  if (
                    item.itemlink.link_type === 'Document' &&
                    path !== item.itemlink.url
                  ) {
                    return (
                      <PrismicLink
                        key={item.itemlink.id}
                        field={item.itemlink}
                        className="rounded px-4 py-2 hover:bg-blue-50"
                      >
                        {item.itemtext}
                      </PrismicLink>
                    )
                  } else if (path !== item.itemlink.url) {
                    return (
                      <PrismicLink
                        key={item.itemlink.url}
                        field={item.itemlink}
                        className="rounded px-4 py-2 hover:bg-blue-50"
                      >
                        {item.itemtext}
                      </PrismicLink>
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
              {navigation.length < 7 && (
                <div className="hidden items-center justify-end space-x-8 xl:block">
                  <span className="inline-flex flex-none rounded-md shadow-sm">
                    <Link href="/join">
                      <a className="btn btn-secondary rounded border border-transparent text-base-100 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 ">
                        Become a Member
                      </a>
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

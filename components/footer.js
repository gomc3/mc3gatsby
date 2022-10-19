import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { Link } from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import ButtonLink from './ButtonLink'
// import Subscribe from "../components/subscribe";

export default function Footer({ data, metadata }) {
  const { footerbuttons, footericonmenu, footertextmenu } = data.data
  return (
    <footer className=" mt-auto bg-slate-100 p-6 lg:p-12">
      <div className="my-3 flex flex-col items-center space-y-12 text-center sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        {footerbuttons.length &&
          footerbuttons.map(button => {
            return (
              <ButtonLink
                key={button.buttonlink.id || button.buttonlink.url}
                link={button.buttonlink}
                color={button.buttoncolor}
                text={button.buttontext}
              />
            )
          })}
      </div>
      <nav className="mx-auto my-6 flex max-w-xl flex-col justify-between  space-y-12 text-center sm:flex-row sm:space-y-0">
        {footertextmenu.length &&
          footertextmenu.map(item => {
            return (
              <PrismicLink
                key={item.linkurl.id || item.linkurl.url}
                field={item.linkurl}
              >
                {item.linktext}
              </PrismicLink>
            )
          })}
      </nav>
      <div className="my-3 mx-auto flex max-w-sm items-center justify-around text-center sm:my-4 md:my-6">
        {footericonmenu.length &&
          footericonmenu.map(item => {
            const icons = {
              Twitter: FaTwitter,
            }
            const MenuIcon = icons[item.footericon]
            return (
              <PrismicLink
                key={item.iconlink.id || item.iconlink.url}
                field={item.iconlink}
                className="w-10 rounded-sm text-blue-400 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
              >
                <MenuIcon
                  className="inline h-6 w-6 transform transition duration-500 ease-in-out hover:scale-150"
                  aria-hidden="true"
                />
              </PrismicLink>
            )
          })}
      </div>
      <div
        id="contact-info"
        className="mt-1 text-center text-sm text-slate-600"
      >
        <p>{metadata.sitetitle[0].text}</p>
        <PrismicRichText field={metadata.address} />
        <p>Tax ID: {metadata.taxid}</p>
      </div>
    </footer>
  )
}

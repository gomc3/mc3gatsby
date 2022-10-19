import Navbar from './navbar'
import Footer from './footer'
import { BsArrowReturnLeft } from 'react-icons/bs'
const Layout = ({ children, data, footer, navigation, path }) => {
  return (
    <>
      <ul id="nav-access" className="relative mx-auto">
        <li>
          <a
            href="#main-content"
            className="absolute -top-20 z-50 flex h-10 w-full transform items-center justify-center bg-blue-700 bg-opacity-10 text-center text-xl text-blue-700 transition-all duration-500 ease-in-out focus:translate-y-20 sm:left-1/4 sm:w-1/2"
          >
            Skip to main content{' '}
            <span className="ml-3 rounded-sm bg-blue-700 px-3 py-0 text-white">
              Return
              <BsArrowReturnLeft className="ml-1 inline h-3 w-3 text-white" />
            </span>
          </a>
        </li>
      </ul>
      <div className="space-between flex min-h-screen flex-col">
        <Navbar logo={data.sitelogo} navigation={navigation} path={path} />
        <main id="main-content">{children}</main>
        <Footer metadata={data} data={footer} />
      </div>
    </>
  )
}
export default Layout

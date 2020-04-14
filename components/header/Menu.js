import Link from 'next/link'
import {FaArrowRight} from 'react-icons/fa'

const links = [
  {href: '/', label: 'Solutions'},
  {href: '/', label: 'Services'},
  {href: '/', label: 'Portfolio'},
  {href: '/', label: 'About'},
  {href: '/', label: 'Blog'}
]

const Menu = () => (
  <>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="list-none text-sm lg:flex-grow">
          {links.map(({href, label}) => (
            <li
              key={`${href}${label}`}
              className="inline-flex block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              <Link href={href}>
                <a className="hover:text-gray-600">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/">
        <a>
          <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            <span className="mr-1">Contact Us</span>
            <FaArrowRight size="14" />
          </button>
        </a>
      </Link>
    </nav>
  </>
)

export default Menu

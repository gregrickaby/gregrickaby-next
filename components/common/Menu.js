import Link from 'next/link'
import config from '../../lib/config'

const Menu = () => (
  <nav>
    <ul className="flex flex-wrap justify-center list-none mt-4 lg:mt-0">
      {config.menu.map(({href, label}) => (
        <li key={`${href}${label}`} className="inline-flex mr-4 text-white">
          <Link href={href}>
            <a className="hover:underline">{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu

import Link from 'next/link'
import config from '../../lib/config'

const Menu = () => (
  <nav>
    <ul className="menu">
      {config.menu.map(({href, label}) => (
        <li key={`${href}${label}`}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu

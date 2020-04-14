import Link from 'next/link'
import {FaInfoCircle} from 'react-icons/fa'

const AlertBar = () => (
  <div
    className="flex items-center justify-center bg-orange-500 text-white font-medium px-4 py-3"
    role="alert"
  >
    <FaInfoCircle size="18px" />
    <p className="ml-2 mr-4">
      Something happened that you should know about, so we placed a message up
      here.
    </p>
    <Link href="/">
      <a>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded">
          Learn More
        </button>
      </a>
    </Link>
  </div>
)

export default AlertBar

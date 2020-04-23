import Link from 'next/link'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

const GoBack = () => (
  <Link href="/">
    <a className="flex mb-4">
      <FaArrowAltCircleLeft size="18px" className="mr-2 mt-1" /> Go Back Home
    </a>
  </Link>
)

export default GoBack

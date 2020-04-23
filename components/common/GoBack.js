import Link from 'next/link'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

const GoBack = () => (
  <Link href="/">
    <a className="flex">
      <FaArrowAltCircleLeft size="18px" className="mr-2" /> Go Back
    </a>
  </Link>
)

export default GoBack

import Button from '../common/Buttons'
import {FaInfoCircle} from 'react-icons/fa'

const AlertBar = () => (
  <div
    className="flex flex-col lg:flex-row items-center justify-center bg-orange-500 text-white font-medium px-4 py-3"
    role="alert"
  >
    <FaInfoCircle size="18px" />
    <p className="ml-2 mr-4">
      Something happened that you should know about, so we placed a message up
      here.
    </p>
    <Button text="Learn More" url="/alert" />
  </div>
)

export default AlertBar

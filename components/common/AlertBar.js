import Button from './Button'
import {useCloseButton} from '../../lib/hooks'
import {FaInfoCircle, FaTimesCircle} from 'react-icons/fa'

const AlertBar = () => {
  const {isShowing, toggle} = useCloseButton()

  // Hide alert if closed.
  if (!isShowing) {
    return <></>
  }

  return (
    <section
      className="relative bg-orange-500 text-white font-medium px-2 py-2"
      role="alert"
    >
      <div className="flex flex-col justify-center items-center text-center sm:flex-row sm:pr-10">
        <FaInfoCircle size="18px" className="hidden mr-4 sm:block" />
        <p>See how WebDevStudios is responding to COVID-19.</p>
        <Button
          text="Learn More"
          url="/alert"
          buttonClass="py-2 px-4 bg-orange-600 text-white font-bold rounded mt-4 sm:mt-0 sm:ml-4 hover:bg-orange-800"
        />
      </div>
      <FaTimesCircle
        size="18px"
        className="close-icon"
        title="Close Alert"
        onClick={toggle}
      />
    </section>
  )
}

export default AlertBar

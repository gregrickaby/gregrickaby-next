import Button from '../common/Buttons'
import {useCloseButton} from '../../lib/hooks'
import {FaInfoCircle, FaTimesCircle} from 'react-icons/fa'

const AlertBar = () => {
  const {isShowing, toggle} = useCloseButton()

  // Hide alert if closed.
  if (!isShowing) {
    return <></>
  }

  return (
    <section className="alert-bar" role="alert">
      <div className="alert-bar-content">
        <FaInfoCircle size="18px" className="alert-bar-info-icon" />
        <p>See how WebDevStudios is responding to COVID-19.</p>
        <Button text="Learn More" url="/alert" />
      </div>
      <FaTimesCircle
        size="18px"
        className="close-button"
        title="Close Alert"
        onClick={toggle}
      />
    </section>
  )
}

export default AlertBar

import Link from 'next/link'
import PropTypes from 'prop-types'

const Button = (props) => (
  <button className={props.buttonClass}>
    <Link href={props.url}>
      <a>{props.text}</a>
    </Link>
  </button>
)

Button.propTypes = {
  buttonClass: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string
}

Button.defaultProps = {
  buttonClass: 'py-2 px-4 bg-orange-600 text-white font-bold rounded'
}

export default Button

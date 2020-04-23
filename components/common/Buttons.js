import PropTypes from 'prop-types'
import Link from 'next/link'
export default function Button(props) {
  return (
    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
      <Link href={props.url}>
        <a>{props.text}</a>
      </Link>
    </button>
  )
}

Button.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string
}

export function Pill(props) {
  return (
    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
      <Link href={props.url}>
        <a>{props.text}</a>
      </Link>
    </button>
  )
}

Pill.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string
}

export function Outline(props) {
  return (
    <button className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
      <Link href={props.url}>
        <a>{props.text}</a>
      </Link>
    </button>
  )
}

Outline.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string
}

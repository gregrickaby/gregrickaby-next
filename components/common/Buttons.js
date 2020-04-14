export default function Button(props) {
  return (
    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
      <a href={props.url}>{props.text}</a>
    </button>
  )
}

export function Pill(props) {
  return (
    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
      <a href={props.url}>{props.text}</a>
    </button>
  )
}

export function Outline(props) {
  return (
    <button className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
      <a href={props.url}>{props.text}</a>
    </button>
  )
}

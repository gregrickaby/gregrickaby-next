import PropTypes from 'prop-types'

const Card = (props) => (
  <article className="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      className="w-full"
      src={props.thumbnail}
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <h1
        className="font-bold text-xl mb-2"
        dangerouslySetInnerHTML={{__html: props.title}}
      />
      <div
        className="text-gray-700 text-base"
        dangerouslySetInnerHTML={{__html: props.text}}
      />
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #photography
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #travel
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        #winter
      </span>
    </div>
  </article>
)

Card.propTypes = {
  props: PropTypes.object,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

Card.defaultProps = {
  thumbnail: '',
  title: '',
  text: ''
}

export default Card

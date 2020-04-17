import PropTypes from 'prop-types'
import {getTermNames} from '../../lib/api'

const Tags = ({terms}) => {
  const tags = getTermNames('tags', terms)

  return (
    <div className="inline-block">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          {' '}
          <strong>#{tag}</strong>{' '}
        </span>
      ))}
    </div>
  )
}

Tags.propTypes = {
  terms: PropTypes.array
}

Tags.defaultProps = {
  terms: []
}

export default Tags

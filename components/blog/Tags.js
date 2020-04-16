import PropTypes from 'prop-types'
import {getTermNames} from '../../lib/api'

const Tags = ({terms}) => {
  const tags = getTermNames('tags', terms)

  return (
    <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      {tags.map((tag) => (
        <span key={tag}>
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

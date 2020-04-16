import PropTypes from 'prop-types'
import {getTermNames} from '../../lib/api'

const Tags = ({terms}) => {
  const tags = getTermNames('tags', terms)

  return (
    <>
      Tagged with
      {tags.map((tag) => (
        <span key={tag}> #{tag} </span>
      ))}
    </>
  )
}

Tags.propTypes = {
  terms: PropTypes.array
}

Tags.defaultProps = {
  terms: []
}

export default Tags

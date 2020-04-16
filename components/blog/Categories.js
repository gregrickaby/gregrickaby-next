import PropTypes from 'prop-types'
import {getTermNames} from '../../lib/api'

const Categories = ({terms}) => {
  const categories = getTermNames('categories', terms)

  return (
    <>
      in
      {categories.map((category) => (
        <span key={category}> {category} </span>
      ))}
    </>
  )
}

Categories.propTypes = {
  terms: PropTypes.array
}

Categories.defaultProps = {
  terms: []
}

export default Categories

import Link from 'next/link'
import PropTypes from 'prop-types'
import {getTermNames} from '../../lib/api'

const Categories = ({terms}) => {
  const categories = getTermNames('categories', terms)

  // Grab the first TermID.
  const termID = terms[0]

  return (
    <>
      {categories.map((category) => (
        <span key={category}>
          {' '}
          <Link href="/blog/category/[...id]" as={`/blog/category/${termID}`}>
            <a>{category} </a>
          </Link>
        </span>
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

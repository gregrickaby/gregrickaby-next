import PropTypes from 'prop-types'
import {getTermNames} from '../../lib/api'
import Link from 'next/link'

const Tags = ({terms}) => {
  // Get all term names.
  const tags = getTermNames('tags', terms)

  // Grab the first TermID.
  const termID = terms[0]

  return (
    <div className="inline-block">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          <Link href="/blog/tags/[...id]" as={`/blog/tags/${termID}`}>
            <a>#{tag}</a>
          </Link>
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

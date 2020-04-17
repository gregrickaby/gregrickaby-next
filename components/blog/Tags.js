import PropTypes from 'prop-types'
import {getTermNames} from '../../lib/api'
import Link from 'next/link'

const Tags = ({terms}) => {
  const tags = getTermNames('tags', terms)

  return (
    <div className="inline-block">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          <Link href="/blog/tags/[...id]" as="/blog/tags/987">
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

import Link from 'next/link'
import PropTypes from 'prop-types'
import {getTermNames} from '../../lib/api'

const Tags = (props) => {
  return (
    <>
      {props.terms.length > 0 && (
        <div className="inline-block">
          {props.terms.map((id) => {
            let tag = getTermNames('tags', id)
            return (
              <span
                key={id}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {' '}
                <Link href="/blog/tags/[...id]" as={`/blog/tags/${id}`}>
                  <a>#{tag}</a>
                </Link>
              </span>
            )
          })}
        </div>
      )}
    </>
  )
}

Tags.propTypes = {
  terms: PropTypes.array,
  data: PropTypes.object
}

Tags.defaultProps = {
  terms: []
}

export default Tags

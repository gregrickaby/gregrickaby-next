import Link from 'next/link'
import PropTypes from 'prop-types'
import {getTermNames} from 'lib/api'

const Tags = (props) => (
  <>
    {props.tags.length > 0 && (
      <div className="flex flex-wrap">
        {props.tags.map((id) => {
          let tagName = getTermNames('tags', id)
          return (
            <span
              key={id}
              className="tag bg-gray-200 rounded-full mb-2 mr-2 px-2 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            >
              {' '}
              <Link href="/blog/tags/[...id]" as={`/blog/tags/${id}`}>
                <a className="no-underline">#{tagName}</a>
              </Link>
            </span>
          )
        })}
      </div>
    )}
  </>
)

Tags.propTypes = {
  tags: PropTypes.array
}

export default Tags

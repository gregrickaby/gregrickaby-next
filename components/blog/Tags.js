import Link from 'next/link'
import PropTypes from 'prop-types'
import {getTermNames} from '../../lib/api'

const Tags = (props) => (
  <>
    {props.tags.length > 0 && (
      <div className="tags">
        {props.tags.map((id) => {
          let tagName = getTermNames('tags', id)
          return (
            <span key={id} className="tag">
              {' '}
              <Link href="/blog/tags/[...id]" as={`/blog/tags/${id}`}>
                <a>#{tagName}</a>
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

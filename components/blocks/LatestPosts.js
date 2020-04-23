import Link from 'next/link'
import PropTypes from 'prop-types'
import Card from './Card'

const LatestPosts = (props) => (
  <div className="flex flex-wrap">
    {props.data.slice(0, props.display).map((post) => (
      <div className="w-full sm:w-1/2 md:w-1/3 mb-4" key={post.id}>
        <Link
          href="/blog/post/[...id]"
          as={`/blog/post/${post.slug}/${post.id}`}
        >
          <a>
            <Card post={post} />
          </a>
        </Link>
      </div>
    ))}
  </div>
)

LatestPosts.propTypes = {
  data: PropTypes.array,
  display: PropTypes.number
}

LatestPosts.defaultProps = {
  display: 9
}

export default LatestPosts

import Link from 'next/link'
import PropTypes from 'prop-types'
import Card from './Card'

const LatestPosts = (props) => (
  <section className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4">
      Latest Posts
    </h1>
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
  </section>
)

LatestPosts.propTypes = {
  data: PropTypes.array,
  display: PropTypes.number
}

LatestPosts.defaultProps = {
  display: 9
}

export default LatestPosts

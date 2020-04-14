import Link from 'next/link'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

const LatestPosts = ({posts}) => (
  <aside className="latest-posts">
    <h3>Latest from the blog</h3>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href="/blog/[...all]" as={`/blog/${post.id}/${post.slug}`}>
            <a dangerouslySetInnerHTML={{__html: post.title.rendered}} />
          </Link>
        </li>
      ))}
    </ul>
  </aside>
)

export async function getStaticProps() {
  const res = await fetch('https://webdevstudios.com/wp-json/wp/v2/posts')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

LatestPosts.propTypes = {
  posts: PropTypes.array
}

LatestPosts.defaultProps = {
  posts: []
}

export default LatestPosts

import Layout from '../components/layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

const Index = ({posts}) => (
  <Layout>
    <section className="content">
      <img
        className="photo full-width"
        src={require('../public/images/wdscamp.jpg?resize&size=728')}
      />
    </section>

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
  </Layout>
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

Index.propTypes = {
  posts: PropTypes.array
}

Index.defaultProps = {
  posts: []
}

export default Index

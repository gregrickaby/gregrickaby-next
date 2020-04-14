import Layout from '../components/common/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Hero from '../components/blocks/Hero'

const Homepage = ({posts}) => (
  <Layout>
    <section>
      <Hero image={require('../public/images/wdscamp.jpg?resize&size=728')} />
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
    </section>
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

Homepage.propTypes = {
  posts: PropTypes.array
}

Homepage.defaultProps = {
  posts: []
}

export default Homepage

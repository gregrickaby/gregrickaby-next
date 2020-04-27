import LatestPosts from '../../components/blocks/LatestPosts'
import Layout from '../../components/common/Layout'
import PropTypes from 'prop-types'
import config from '../../lib/config'
import fetch from 'isomorphic-unfetch'

const BlogArchive = ({posts}) => (
  <Layout>
    <section className="archive container">
      <h1>Our Blog</h1>
      <LatestPosts data={posts} display={9} />
    </section>
  </Layout>
)

export async function getStaticProps() {
  const res = await fetch(`${config.apiUrl}posts?_embed`)
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

BlogArchive.propTypes = {
  posts: PropTypes.array
}

export default BlogArchive

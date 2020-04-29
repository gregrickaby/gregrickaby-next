import LatestPosts from '../../components/common/LatestPosts'
import Layout from '../../components/global/Layout'
import PropTypes from 'prop-types'
import config from '../../lib/config'
import fetch from 'isomorphic-unfetch'

const BlogArchive = ({posts}) => (
  <Layout>
    <section className="container px-4 py-8 mx-auto">
      <h1 className="text-center mb-10 text-3xl">Our Blog</h1>
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

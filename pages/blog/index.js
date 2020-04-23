import LatestPosts from '../../components/blocks/LatestPosts'
import Layout from '../../components/common/Layout'
import PropTypes from 'prop-types'
import config from '../../lib/config'
import fetch from 'isomorphic-unfetch'

const BlogArchive = ({posts}) => (
  <Layout>
    <LatestPosts data={posts} display={24} />
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
  posts: PropTypes.object
}

export default BlogArchive

import LatestPosts from '../components/common/LatestPosts'
import Layout from '../components/global/Layout'
import PropTypes from 'prop-types'
import config from '../lib/config'
import fetch from 'isomorphic-unfetch'

const Homepage = ({posts}) => (
  <Layout>
    <div className="page container">
      <LatestPosts title="Latest Posts" data={posts} display={9} />
    </div>
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

Homepage.propTypes = {
  posts: PropTypes.array
}

export default Homepage

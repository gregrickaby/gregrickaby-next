import LatestPosts from '../../components/blocks/LatestPosts'
import Layout from '../../components/common/Layout'
import PropTypes from 'prop-types'
import config from '../../lib/config'
import fetch from 'isomorphic-unfetch'

const BlogArchive = ({posts}) => (
  <Layout>
    <section className="container px-5 py-24 mx-auto">
      <h1 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-8 text-center">
        Our Blog
      </h1>
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
  posts: PropTypes.object
}

export default BlogArchive

import GoBack from '../../../components/common/GoBack'
import Hero from '../../../components/blog/Hero'
import Layout from '../../../components/common/Layout'
import PropTypes from 'prop-types'
import Tags from '../../../components/blog/Tags'
import config from '../../../lib/config'
import fetch from 'isomorphic-unfetch'

const Post = ({post}) => (
  <Layout>
    <article className="post">
      <Hero post={post} />
      <div className="post-content">
        <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        <div className="post-tag-wrap">
          <Tags tags={post.tags} />
        </div>
        <GoBack />
      </div>
    </article>
  </Layout>
)

export async function getServerSideProps(context) {
  const id = context.query.id[1]
  const res = await fetch(`${config.apiUrl}posts/${id}?_embed`)
  const post = await res.json()

  return {
    props: {
      post
    }
  }
}

Post.propTypes = {
  post: PropTypes.object
}

export default Post

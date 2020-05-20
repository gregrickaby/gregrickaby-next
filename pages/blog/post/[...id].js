import GoBack from '@/components/common/GoBack'
import Hero from '@/components/blog/Hero'
import Layout from '@/components/global/Layout'
import PropTypes from 'prop-types'
import Tags from '@/components/blog/Tags'
import config from '@/lib/config'

const Post = ({post}) => (
  <Layout>
    <article className="post overflow-auto">
      <Hero post={post} />
      <div className="max-w-2xl mx-auto">
        <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        <div className="border-b border-t pt-4 pb-2 my-12">
          <Tags tags={post.tags} />
        </div>
        <GoBack />
      </div>
    </article>
  </Layout>
)

export async function getServerSideProps(context) {
  const id = context.query.id[1]
  const res = await fetch(`${config.apiUrl}posts/${id}?_embed`) // eslint-disable-line no-undef
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

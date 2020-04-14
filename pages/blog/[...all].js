import PostDate from '../../components/blog/PostDate'
import Layout from '../../components/common/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

const Post = ({post}) => (
  <Layout>
    <h1
      className="post-title"
      dangerouslySetInnerHTML={{__html: post.title.rendered}}
    />
    <span className="post-date">
      Posted on <PostDate dateString={post.date} />
    </span>
    <p
      className="post-content"
      dangerouslySetInnerHTML={{__html: post.content.rendered}}
    />
    <FaArrowAltCircleLeft size="16px" />{' '}
    <Link href="/">
      <a>Back home</a>
    </Link>
  </Layout>
)

export async function getServerSideProps(context) {
  const id = context.query.all[0]
  const res = await fetch(`https://webdevstudios.com/wp-json/wp/v2/posts/${id}`)
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

Post.defaultProps = {
  post: []
}

export default Post

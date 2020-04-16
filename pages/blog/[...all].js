import Layout from '../../components/common/Layout'
import Link from 'next/link'
import PostDate from '../../components/blog/PostDate'
import PropTypes from 'prop-types'
import config from '../../lib/config'
import fetch from 'isomorphic-unfetch'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

const Post = ({post}) => (
  <Layout>
    <article
      className="max-w-3xl mx-auto p-4 text-lg"
      style={{fontFamily: 'Libre Franklin,sans-serif'}}
    >
      <h1
        className="text-4xl font-bold mb-4"
        dangerouslySetInnerHTML={{__html: post.title.rendered}}
      />
      <span className="text-sm italic">
        Posted on <PostDate dateString={post.date} />
      </span>
      <div
        className="post my-4 font-normal"
        dangerouslySetInnerHTML={{__html: post.content.rendered}}
      />
      <Link href="/">
        <a className="flex">
          <FaArrowAltCircleLeft size="18px" className="mr-2" /> Go Back
        </a>
      </Link>
    </article>
  </Layout>
)

export async function getServerSideProps(context) {
  const id = context.query.all[0]
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

Post.defaultProps = {
  post: []
}

export default Post

import Hero from '../../../components/blog/Hero'
import Layout from '../../../components/common/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Tags from '../../../components/blog/Tags'
import config from '../../../lib/config'
import fetch from 'isomorphic-unfetch'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

const Post = ({post}) => {
  return (
    <Layout>
      <article
        className="mx-auto text-lg"
        style={{fontFamily: 'Libre Franklin,sans-serif'}}
      >
        <Hero post={post} />
        <div className="max-w-4xl mx-auto">
          <div
            className="post my-4 font-normal"
            dangerouslySetInnerHTML={{__html: post.content.rendered}}
          />
          <div className="border-b border-t py-4 my-12">
            Tagged in <Tags terms={post.tags} />
          </div>
          <Link href="/">
            <a className="flex">
              <FaArrowAltCircleLeft size="18px" className="mr-2" /> Go Back
            </a>
          </Link>
        </div>
      </article>
    </Layout>
  )
}

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

Post.defaultProps = {
  post: []
}

export default Post

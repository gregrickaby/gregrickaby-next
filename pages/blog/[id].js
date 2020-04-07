import Date from '../../components/date'
import Layout from '../../components/layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

const Post = ({post}) => {
  return (
    <Layout>
      <h1
        className="post-title"
        dangerouslySetInnerHTML={{__html: post.title.rendered}}
      />
      <span className="post-date">
        Posted on <Date dateString={post.date} />
      </span>
      <p
        className="post-content"
        dangerouslySetInnerHTML={{__html: post.content.rendered}}
      />
      <FaArrowAltCircleLeft size="16px" />{' '}
      <Link href="/">
        <a>Back home</a>
      </Link>
      <style jsx>{`
        .post-title {
          font-size: 48px;
          line-height: 1.1;
        }

        .post-date {
          font-size: 15px;
          font-style: italic;
        }
      `}</style>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const {id} = context.query
  const res = await fetch(`https://gregrickaby.com/wp-json/wp/v2/posts/${id}`)
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

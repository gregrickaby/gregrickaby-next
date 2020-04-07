import Layout from '../../components/layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import Date from '../../components/date'

const Post = (post) => {
  return (
    <Layout>
      <h1
        className="post-title"
        dangerouslySetInnerHTML={{__html: post.post.title.rendered}}
      />
      <span className="post-date">
        Posted on <Date dateString={post.post.date} />
      </span>
      <p
        className="post-content"
        dangerouslySetInnerHTML={{__html: post.post.content.rendered}}
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

export default Post

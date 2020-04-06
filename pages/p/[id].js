import Layout from '../../components/layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import createDangerousMarkup from '../../helpers/dangerous'

const Post = (props) => (
  <Layout>
    <h1
      dangerouslySetInnerHTML={createDangerousMarkup(props.data.title.rendered)}
    />
    <time>Published on {props.data.date}</time>
    <p
      dangerouslySetInnerHTML={createDangerousMarkup(
        props.data.content.rendered
      )}
    />
    <FaArrowAltCircleLeft size="16px" />{' '}
    <Link href="/">
      <a>Back home</a>
    </Link>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const {id} = context.query
  const res = await fetch(`https://gregrickaby.com/wp-json/wp/v2/posts/${id}`)
  const data = await res.json()

  return {
    data
  }
}

export default Post

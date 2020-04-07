import Layout from '../../components/layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import createDangerousMarkup from '../../helpers/dangerous'
import Date from '../../components/date'

const Post = (props) => {
  return (
    <Layout>
      <h1
        dangerouslySetInnerHTML={createDangerousMarkup(
          props.data.title.rendered
        )}
      />
      Posted on <Date dateString={props.data.date} /> by {props.data.author}
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
}

Post.getInitialProps = async function (context) {
  const {id} = context.query
  const res = await fetch(`https://gregrickaby.com/wp-json/wp/v2/posts/${id}`)
  const data = await res.json()

  return {
    data
  }
}

export default Post

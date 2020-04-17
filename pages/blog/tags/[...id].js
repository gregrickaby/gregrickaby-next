import Hero from '../../../components/blog/Hero'
import Layout from '../../../components/common/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Tags from '../../../components/blog/Tags'
import config from '../../../lib/config'
import fetch from 'isomorphic-unfetch'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

const Archive = ({post}) => {
  return (
    <Layout>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.id[0]
  const res = await fetch(`${config.apiUrl}posts?tags=${id}`)
  const post = await res.json()

  return {
    props: {
      post
    }
  }
}

Archive.propTypes = {
  post: PropTypes.object
}

Archive.defaultProps = {
  post: []
}

export default Archive

import Card from '../../../components/common/Card'
import GoBack from '../../../components/common/GoBack'
import Layout from '../../../components/global/Layout'
import PropTypes from 'prop-types'
import config from '../../../lib/config'
import fetch from 'isomorphic-unfetch'
import {getTermNames} from '../../../lib/api'

const AuthorArchive = ({posts, id}) => {
  const authorname = getTermNames('users', id)
  return (
    <Layout>
      <section className="archive container">
        <h1>Posts by {authorname}</h1>
        <div className="archive-content">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
        <GoBack />
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.id[0]
  const res = await fetch(`${config.apiUrl}posts?author=${id}`)
  const posts = await res.json()

  return {
    props: {
      posts,
      id
    }
  }
}

AuthorArchive.propTypes = {
  posts: PropTypes.array,
  id: PropTypes.string
}

export default AuthorArchive

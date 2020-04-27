import Card from '../../../components/blocks/Card'
import GoBack from '../../../components/common/GoBack'
import Layout from '../../../components/common/Layout'
import PropTypes from 'prop-types'
import config from '../../../lib/config'
import fetch from 'isomorphic-unfetch'
import {getTermNames} from '../../../lib/api'

const CategoryArchive = ({posts, id}) => {
  const categoryname = getTermNames('categories', id)
  return (
    <Layout>
      <section className="archive container">
        <h1>Posts in {categoryname}</h1>
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
  const res = await fetch(`${config.apiUrl}posts?categories=${id}`)
  const posts = await res.json()

  return {
    props: {
      posts,
      id
    }
  }
}

CategoryArchive.propTypes = {
  posts: PropTypes.array,
  id: PropTypes.string
}

export default CategoryArchive

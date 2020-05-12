import Card from '../../../components/common/Card'
import GoBack from '../../../components/common/GoBack'
import Layout from '../../../components/global/Layout'
import PropTypes from 'prop-types'
import config from '../../../lib/config'
import {getTermNames} from '../../../lib/api'

const CategoryArchive = ({posts, id}) => {
  const categoryname = getTermNames('categories', id)
  return (
    <Layout>
      <section className="container px-4 py-8 mx-auto">
        <h1 className="text-center mb-10 text-3xl">Posts in {categoryname}</h1>
        <div className="flex flex-col flex-wrap items-center lg:lex-row lg:items-start lg:justify-around xl:justify-between">
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

import Card from '../../../components/blocks/Card'
import GoBack from '../../../components/common/GoBack'
import Layout from '../../../components/common/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import config from '../../../lib/config'
import fetch from 'isomorphic-unfetch'
import {getTermNames} from '../../../lib/api'

const AuthorArchive = ({posts, id}) => {
  const authorname = getTermNames('users', id)
  return (
    <Layout>
      <section className="container px-5 py-24 mx-auto">
        <h1 className="text-center mb-10 text-3xl">
          <span className="bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">
            #{authorname}
          </span>
        </h1>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="w-full sm:w-1/2 md:w-1/3 mb-4" key={post.id}>
              <Link
                href="/blog/post/[...id]"
                as={`/blog/post/${post.slug}/${post.id}`}
              >
                <a>
                  <Card post={post} />
                </a>
              </Link>
            </div>
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
  posts: PropTypes.object,
  id: PropTypes.string
}

AuthorArchive.defaultProps = {
  posts: []
}

export default AuthorArchive

import Layout from '../../../components/common/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Card from '../../../components/blocks/Card'
import config from '../../../lib/config'
import fetch from 'isomorphic-unfetch'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import {getTermNames} from '../../../lib/api'

const TagArchive = ({posts, id}) => {
  const tagname = getTermNames('tags', id)

  return (
    <Layout>
      <section className="container px-5 py-24 mx-auto">
        <h1 className="text-center mb-10 text-3xl">
          <span className="bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">
            #{tagname}
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

        <Link href="/">
          <a className="flex">
            <FaArrowAltCircleLeft size="18px" className="mr-2" /> Go Back
          </a>
        </Link>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.id[0]
  const res = await fetch(`${config.apiUrl}posts?tags=${id}`)
  const posts = await res.json()

  return {
    props: {
      posts,
      id
    }
  }
}

TagArchive.propTypes = {
  posts: PropTypes.object,
  id: PropTypes.string
}

TagArchive.defaultProps = {
  posts: []
}

export default TagArchive

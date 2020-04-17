import Hero from '../../../components/blog/Hero'
import Layout from '../../../components/common/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Card from '../../../components/blocks/Card'
import config from '../../../lib/config'
import fetch from 'isomorphic-unfetch'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

const TagArchive = ({posts}) => {
  return (
    <Layout>
      <section className="container px-5 py-24 mx-auto">
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
      posts
    }
  }
}

TagArchive.propTypes = {
  posts: PropTypes.object
}

TagArchive.defaultProps = {
  posts: []
}

export default TagArchive

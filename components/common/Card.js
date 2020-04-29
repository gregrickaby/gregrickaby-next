import PropTypes from 'prop-types'
import Tags from '../blog/Tags'
import Link from 'next/link'

const Card = ({post}) => (
  <article
    key={post.id}
    className="max-w-sm rounded overflow-hidden shadow-lg mb-8 lg:w-1/2 lg:mx-2 xl:w-1/3"
  >
    {post.acf.blog_hero_image.url.length > 0 && (
      <Link href="/blog/post/[...id]" as={`/blog/post/${post.slug}/${post.id}`}>
        <a>
          <img
            className="w-full"
            src={post.acf.blog_hero_image.url}
            alt={post.acf.blog_hero_image.title}
          />
        </a>
      </Link>
    )}
    <div className="px-4 py-4">
      <Link href="/blog/post/[...id]" as={`/blog/post/${post.slug}/${post.id}`}>
        <a>
          <h2
            className="mb-2 text-xl text-left font-bold hover:underline"
            dangerouslySetInnerHTML={{__html: post.title.rendered}}
          />
        </a>
      </Link>
      <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
    </div>
    <div className="p-4">
      <Tags tags={post.tags} />
    </div>
  </article>
)

Card.propTypes = {
  post: PropTypes.object
}

export default Card

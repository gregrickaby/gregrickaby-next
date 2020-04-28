import PropTypes from 'prop-types'
import Tags from '../blog/Tags'
import Link from 'next/link'

const Card = ({post}) => (
  <article key={post.id} className="card">
    {post.acf.blog_hero_image.url.length > 0 && (
      <Link href="/blog/post/[...id]" as={`/blog/post/${post.slug}/${post.id}`}>
        <a>
          <img
            src={post.acf.blog_hero_image.url}
            alt={post.acf.blog_hero_image.title}
          />
        </a>
      </Link>
    )}
    <div className="card-content">
      <Link href="/blog/post/[...id]" as={`/blog/post/${post.slug}/${post.id}`}>
        <a>
          <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
        </a>
      </Link>
      <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
    </div>
    <div className="card-tags">
      <Tags tags={post.tags} />
    </div>
  </article>
)

Card.propTypes = {
  post: PropTypes.object
}

export default Card

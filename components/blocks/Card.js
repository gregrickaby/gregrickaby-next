import PropTypes from 'prop-types'
import Tags from '../../components/blog/Tags'

const Card = ({post}) => (
  <article key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg">
    {post.acf.blog_hero_image.url.length > 0 && (
      <img
        className="w-full"
        src={post.acf.blog_hero_image.url}
        alt={post.acf.blog_hero_image.title}
      />
    )}
    <div className="px-6 py-4">
      <h1
        className="font-bold text-xl mb-2"
        dangerouslySetInnerHTML={{__html: post.title.rendered}}
      />
      <div
        className="text-gray-700 text-base"
        dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}
      />
    </div>
    <div className="px-6 py-4">
      <Tags tags={post.tags} />
    </div>
  </article>
)

Card.propTypes = {
  post: PropTypes.object
}

export default Card

import Categories from '../../components/blog/Categories'
import Link from 'next/link'
import PostDate from '../../components/blog/PostDate'
import PropTypes from 'prop-types'

const Hero = ({post}) => (
  <section
    className="hero"
    style={{backgroundImage: `url(${post.acf.blog_hero_image.url})`}}
  >
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
      <div className="hero-content container">
        <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
        <img
          style={{width: 96}}
          src={post._embedded.author[0].avatar_urls['96']}
          alt={post.title.rendered}
        />
        <p>
          By{' '}
          <Link
            href="/blog/author/[...id]"
            as={`/blog/author/${post._embedded.author[0].id}`}
          >
            <a>{post._embedded.author[0].name}</a>
          </Link>{' '}
        </p>
        <span>
          Posted on <PostDate dateString={post.date} /> in{' '}
          <Categories categories={post.categories} />
        </span>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  post: PropTypes.object
}

export default Hero

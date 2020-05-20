import Categories from '../Categories'
import Link from 'next/link'
import PostDate from '../PostDate'
import PropTypes from 'prop-types'

const Hero = ({post}) => (
  <section
    className="mb-16 bg-cover bg-no-repeat text-white text-center"
    style={{backgroundImage: `url(${post.acf.blog_hero_image.url})`}}
  >
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
      <div className="container flex flex-col items-center mx-auto py-12 px-16 lg:py-24 lg:px-32">
        <h1
          className="mb-8 text-3xl font-bold lg:text-4xl"
          dangerouslySetInnerHTML={{__html: post.title.rendered}}
        />
        <img
          className="rounded-full mb-4"
          style={{width: 96}}
          src={post._embedded.author[0].avatar_urls['96']}
          alt={post.title.rendered}
        />
        <p className="mb-2 text-lg text-white">
          By{' '}
          <Link
            href="/blog/author/[...id]"
            as={`/blog/author/${post._embedded.author[0].id}`}
          >
            <a>{post._embedded.author[0].name}</a>
          </Link>{' '}
        </p>
        <span className="text-sm italic lg:text-base">
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

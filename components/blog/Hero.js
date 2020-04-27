import Categories from '../../components/blog/Categories'
import Link from 'next/link'
import PostDate from '../../components/blog/PostDate'
import PropTypes from 'prop-types'

const Hero = ({post}) => (
  <section
    className="mb-16 text-white body-font text-center bg-cover bg-no-repeat"
    style={{backgroundImage: `url(${post.acf.blog_hero_image.url})`}}
  >
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
      <div className="container flex flex-col items-center mx-auto lg:py-48 lg:px-64 py-24 px-32 mx-auto">
        <h1
          className="title-font md:text-5xl sm:text-4xl text-3xl mb-8 font-bold"
          dangerouslySetInnerHTML={{__html: post.title.rendered}}
        />
        <img
          className="rounded-full mb-4"
          style={{width: 96}}
          src={post._embedded.author[0].avatar_urls['96']}
          alt={post.title.rendered}
        />
        <p className="text-lg text-white mb-2">
          By{' '}
          <Link
            href="/blog/author/[...id]"
            as={`/blog/author/${post._embedded.author[0].id}`}
          >
            <a>{post._embedded.author[0].name}</a>
          </Link>{' '}
        </p>
        <span className="italic">
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

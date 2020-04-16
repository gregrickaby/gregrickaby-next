import PropTypes from 'prop-types'
import PostDate from '../../components/blog/PostDate'
import Categories from '../../components/blog/Categories'

const Hero = ({post}) => (
  <section
    className="text-gray-700 body-font text-center bg-cover bg-no-repeat"
    style={{backgroundImage: `url(${post.acf.blog_hero_image.url})`}}
  >
    <div style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="container lg:py-48 lg:px-64 py-24 px-32 mx-auto">
        <div className="mx-auto">
          <h1
            className="title-font md:text-5xl sm:text-4xl text-3xl mb-8 font-bold text-white"
            dangerouslySetInnerHTML={{__html: post.title.rendered}}
          />
          <span className="text-sm italic">
            Posted on <PostDate dateString={post.date} /> in
            <Categories terms={post.categories} />
          </span>
        </div>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  post: PropTypes.array
}

Hero.defaultProps = {
  post: []
}

export default Hero

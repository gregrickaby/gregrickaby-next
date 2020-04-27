import PropTypes from 'prop-types'
import Button from '../common/Button'

const Hero = (props) => (
  <section
    className="text-gray-700 body-font text-center bg-cover bg-no-repeat"
    style={{backgroundImage: `url(${props.image})`}}
  >
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <div className="container lg:py-48 lg:px-64 py-24 px-32 mx-auto">
        <div className="mx-auto">
          <h1 className="title-font md:text-5xl sm:text-4xl text-3xl mb-8 font-bold text-white">
            {props.title}
          </h1>
          <p className="mb-12 leading-snug text-2xl font-medium text-white">
            {props.text}
          </p>
          <Button text={props.buttonText} url={props.buttonUrl} />
        </div>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonText: PropTypes.string
}

Hero.defaultProps = {
  image: 'https://picsum.photos/1280/720',
  title: 'Hero Title',
  description: 'Hero Description',
  buttonUrl: '/',
  buttonText: 'Button Text'
}

export default Hero

import Button from '../components/common/Buttons'
import Hero from '../components/blocks/Hero'
import LatestPosts from '../components/blocks/LatestPosts'
import Layout from '../components/common/Layout'
import PropTypes from 'prop-types'
import TwoColumn from '../components/blocks/TwoColumn'
import config from '../lib/config'
import fetch from 'isomorphic-unfetch'

const Homepage = ({posts}) => (
  <Layout>
    <div>
      <Hero
        image={require('../public/images/wdscamp.jpg?resize&size=1920')}
        title="Your Success Is Our Mission"
        text="WebDevStudios provides end-to-end WordPress opportunities from strategy and planning to website design and development."
        buttonText="Get Started Today"
        buttonUrl="/contact"
      />
      <TwoColumn
        column1={
          <img src={require('../public/images/640x480.png')} alt="column 1" />
        }
        column2={
          <>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4">
              This is column number 1
            </h2>
            <p className="leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex quo,
              id quod omnes expetunt, beate vivendi ratio inveniri et comparari
              potest. Immo videri fortasse. Sed haec ab Antiocho, familiari
              nostro, dicuntur multo melius et fortius, quam a Stasea
              dicebantur. Sed quanta sit alias, nunc tantum possitne esse tanta.
              Quaero igitur, quo modo hae tantae commendationes a natura
              profectae subito a sapientia relictae sint. Duo Reges: constructio
              interrete. Unum est sine dolore esse, alterum cum voluptate. Sed
              haec quidem liberius ab eo dicuntur et saepius.{' '}
            </p>
            <Button text="Learn More" url="/contact" />
          </>
        }
      />
      <TwoColumn
        column1={
          <>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4">
              This is column number 2
            </h2>
            <p className="leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex quo,
              id quod omnes expetunt, beate vivendi ratio inveniri et comparari
              potest. Immo videri fortasse. Sed haec ab Antiocho, familiari
              nostro, dicuntur multo melius et fortius, quam a Stasea
              dicebantur. Sed quanta sit alias, nunc tantum possitne esse tanta.
              Quaero igitur, quo modo hae tantae commendationes a natura
              profectae subito a sapientia relictae sint. Duo Reges: constructio
              interrete. Unum est sine dolore esse, alterum cum voluptate. Sed
              haec quidem liberius ab eo dicuntur et saepius.{' '}
            </p>
            <Button text="Learn More" url="/contact" />
          </>
        }
        column2={
          <img src={require('../public/images/640x480.png')} alt="column 2" />
        }
      />
      <section className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4">
          Latest Posts
        </h1>
        <LatestPosts data={posts} display={3} />
      </section>
    </div>
  </Layout>
)

export async function getStaticProps() {
  const res = await fetch(`${config.apiUrl}posts?_embed`)
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

Homepage.propTypes = {
  posts: PropTypes.array
}

export default Homepage

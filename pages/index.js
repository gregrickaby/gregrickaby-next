import Layout from 'components/global/Layout'
import PropTypes from 'prop-types'
import config from 'lib/config'
import HomepageFold from 'components/blocks/HomepageFold'
import LogoTrain from 'components/blocks/LogoTrain'
import FiftyFifty from 'components/blocks/FiftyFifty'
import {getAcfBlocksSlugs} from 'lib/api'

const Homepage = ({page}) => (
  <Layout>
    {getAcfBlocksSlugs({page}).map((slug) => {
      switch (slug) {
        case 'homepage_fold':
          return <HomepageFold key={slug} data={page} />
        case 'logo_train':
          return <LogoTrain key={slug} data={page} />
        case 'full_width_fiftyfifty':
          return <FiftyFifty key={slug} data={page} />
        case 'featured_work':
          return ''
        case 'testimonial_slideshow':
          return ''
        case 'featured_books':
          return ''
        case 'recent_blog_posts':
          return ''
        default:
          return slug // helps identify which slugs aren't found in the switch!
      }
    })}
  </Layout>
)

export async function getStaticProps() {
  const res = await fetch(`${config.apiUrl}pages/208`)
  const page = await res.json()

  return {
    props: {
      page
    }
  }
}

Homepage.propTypes = {
  page: PropTypes.object
}

export default Homepage

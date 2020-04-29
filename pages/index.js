import Layout from '../components/global/Layout'
import PropTypes from 'prop-types'
import config from '../lib/config'
import fetch from 'isomorphic-unfetch'
import HomepageFold from '../components/blocks/HomepageFold'
import {getAcfBlocksSlugs} from '../lib/api'

const Homepage = ({page}) => (
  <Layout>
    {getAcfBlocksSlugs({page}).map((slug) => {
      switch (slug) {
        case 'homepage_fold':
          return <HomepageFold data={page} />
        case 'logo_train':
          return 'logo_train'
        case 'full_width_fiftyfifty':
          return 'full_width_fiftyfifty'
        case 'featured_work':
          return 'featured_work'
        case 'testimonial_slideshow':
          return 'testimonial_slideshow'
        case 'featured_books':
          return 'featured_books'
        case 'recent_blog_posts':
          return 'recent_blog_posts'
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

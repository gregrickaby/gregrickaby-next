import Button from '../components/common/Buttons'
import Hero from '../components/blocks/Hero'
import Layout from '../components/common/Layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import TwoColumn from '../components/blocks/TwoColumn'
import fetch from 'isomorphic-unfetch'

const Homepage = ({posts}) => (
  <Layout>
    <section>
      <Hero image={require('../public/wdscamp.jpg?resize&size=1920')} />
      <TwoColumn
        column1={<img src={require('../public/640x480.png')} />}
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
            <Button text="Learn More" url="/" />
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
            <Button text="Learn More" url="/" />
          </>
        }
        column2={<img src={require('../public/640x480.png')} />}
      />
      <aside className="latest-posts">
        <h3>Latest from the blog</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href="/blog/[...all]" as={`/blog/${post.id}/${post.slug}`}>
                <a dangerouslySetInnerHTML={{__html: post.title.rendered}} />
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  </Layout>
)

export async function getStaticProps() {
  const res = await fetch('https://webdevstudios.com/wp-json/wp/v2/posts')
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

Homepage.defaultProps = {
  posts: []
}

export default Homepage

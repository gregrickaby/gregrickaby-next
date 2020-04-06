import Layout from '../components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import createDangerousMarkup from '../helpers/dangerous'

const Index = (props) => (
  <Layout>
    <section className="content">
      <img
        className="photo full-width"
        src={require('../public/images/rickaby-family-fall-2019.jpg?resize&size=728')}
      />
      <p>
        Hello! I’m the Director of Engineering at{' '}
        <a href="https://webdevstudios.com/">WebDevStudios</a>, where{' '}
        <strong>
          we build amazing digital platforms for enterprise level corporations
          with WordPress
        </strong>
        . While at WebDevStudios, my engineers and I have solved complex website
        problems for clients like Microsoft, Viacom, News Corporation,
        Campbell’s Soup Company, and the NBA.
      </p>
      <p>
        Over the years,{' '}
        <strong>
          I’ve also contributed to <a href="https://wordpress.org">WordPress</a>{' '}
          Core
        </strong>
        , various WordPress themes, dozens of open source projects, including{' '}
        <strong>
          <a href="https://gatsbyjs.org">GatsbyJS</a>
        </strong>
        ,{' '}
        <strong>
          <a href="https://nextjs.org">Next.JS</a>
        </strong>
        , and <strong>have spoken at a few WordCamps</strong>.
      </p>
      <p>
        I’ve also contracted with{' '}
        <a href="https://www.wiley.com/en-us/">Wiley</a> and{' '}
        <strong>authored a children’s book</strong> about building your first
        website (<a href="https://gregslink.co/create-a-website-am">Amazon</a>),
        and <strong>served as Technical Editor on two other books</strong>,{' '}
        <em>WordPress All-In-One For Dummies, 4E</em> (
        <a href="https://amzn.to/37MMDLp">Amazon</a>) and{' '}
        <em>Professional WordPress Plugin Development, 2E</em> which will be
        published in this spring.
      </p>
      <p>
        <strong>I’m always trying to learn something new</strong>, everything
        from leadership skills, or mastering new technology, to playing music.
        Right now, I’m all in photography. When I’m not at work?{' '}
        <strong>I enjoy being a dad and hanging out with family</strong>, as
        well as <strong>serving my community at</strong>{' '}
        <a href="https://wiregrasschurch.org">Wiregrass Church</a>.
      </p>
      <p>
        Thanks for reading and feel free to contact me{' '}
        <strong>greg@gregrickaby.com</strong>
      </p>
    </section>

    <aside className="latest-posts">
      <h3>Latest from the blog</h3>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href="/p/[id]" as={`/p/${post.id}`}>
              <a
                dangerouslySetInnerHTML={createDangerousMarkup(
                  post.title.rendered
                )}
              />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('https://gregrickaby.com/wp-json/wp/v2/posts')
  const data = await res.json()

  return {
    posts: data.map((entry) => entry)
  }
}

export default Index

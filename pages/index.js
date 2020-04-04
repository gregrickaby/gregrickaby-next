import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header />
      <section className="content">
        <img
          className="photo full-width"
          src="/rickaby-family-fall-2019.jpg"
          alt="Our family"
        />
        <p>
          Hello! I’m the Director of Engineering at
          {' '}
          <a href="https://webdevstudios.com/">WebDevStudios</a>
          , where
          {' '}
          <strong>
            we build amazing digital platforms for enterprise level corporations
            with WordPress
          </strong>
          . While at WebDevStudios, my engineers and I have solved complex
          website problems for clients like Microsoft, Viacom, News Corporation,
          Campbell’s Soup Company, and the NBA.
        </p>
        <p>
          Over the years,
          {' '}
          <strong>
            I’ve also contributed to
            {' '}
            <a href="https://wordpress.org">WordPress</a>
            {' '}
            Core
          </strong>
          , various WordPress themes, dozens of open source projects, including
          {' '}
          <strong>
            <a href="https://gatsbyjs.org">GatsbyJS</a>
          </strong>
          ,
          {' '}
          <strong>
            <a href="https://nextjs.org">Next.JS</a>
          </strong>
          , and
          {' '}
          <strong>have spoken at a few WordCamps</strong>
          .
        </p>
        <p>
          I’ve also contracted with
          {' '}
          <a href="https://www.wiley.com/en-us/">Wiley</a>
          {' '}
          and
          {' '}
          <strong>authored&nbsp;a children’s book</strong>
          {' '}
          about building your
          first website (
          <a href="https://gregslink.co/create-a-website-am">Amazon</a>
          ),
          and
          {' '}
          <strong>served as Technical Editor on two other books</strong>
          ,
          {' '}
          <em>WordPress All-In-One For Dummies, 4E</em>
          {' '}
          (
          <a href="https://amzn.to/37MMDLp">Amazon</a>
          ) and
          {' '}
          <em>Professional WordPress Plugin Development, 2E</em>
          {' '}
          which will be
          published in the spring of 2020.
        </p>
        <p>
          <strong>I’m always trying to learn something new</strong>
          , everything
          from leadership skills, or mastering new technology, to playing music.
          Right now, I’m all in photography.
        </p>
        <p>
          When I’m not at work?
          {' '}
          <strong>I enjoy being a dad and hanging out with family</strong>
          , as
          well as serving my community through
          {' '}
          <a href="https://wiregrasschurch.org">Wiregrass Church</a>
          . I’ve also
          been known to moonlight as a pizzaiolo.
        </p>
        <p>Thanks for reading and feel free to contact me greg@gregrickaby.com</p>
      </section>
    </main>

    <Footer />

    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: column;
          font-size: 18px;
          line-height: 1.4;
          margin: 0 auto;
          max-width: 680px;
          padding: 24px;
        }

        .photo {
          margin: 24px 0;
        }

        .full-width {
          left: -48px;
          position: relative;
          width: calc(100% + 96px);
        }
      `}
    </style>

    <style jsx global>
      {`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          margin: 0;
          padding: 0;
        }

        * {
          box-sizing: border-box;
        }

        img {
          height: auto;
          width: 100%;
        }

        a {
          color: #111;
        }

        a:hover {
          text-decoration: none;
        }
      `}
    </style>
  </div>
);

export default Home;

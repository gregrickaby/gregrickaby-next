import Head from 'next/head'

const Header = () => (
  <>
    <Head>
      <title>Greg Rickaby</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header>
      <img src="logo.png" alt="Greg Rickaby Development logo" />
      <h1 className="site-title">Greg Rickaby</h1>
      <p className="site-description">
        Director of Engineering{' '}
        <a href="https://webdevstudios.com">@WebDevStudios</a> / Author & Editor{' '}
        <a href="https://www.wiley.com/en-us">@Wiley</a>
      </p>

      <style jsx>
        {`
          header {
            text-align: center;
          }

          img {
            width: 96px;
          }

          .site-description {
            font-size: 16px;
          }
        `}
      </style>
    </header>
  </>
)

export default Header

import Head from 'next/head'
import Link from 'next/link'

const Header = () => (
  <>
    <Head>
      <title>WebDevStudios</title>
      <link rel="icon" href="images/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header>
      <Link href="/">
        <a>
          <img
            src={require('../../public/images/wds-logo.svg')}
            alt="webdevstudios logo"
          />
        </a>
      </Link>
      <h1 className="site-title">WebDevStudios</h1>
      <p className="site-description">Your Success Is Our Mission.</p>
    </header>
  </>
)

export default Header

import AlertBar from '../common/AlertBar'
import Head from 'next/head'
import Logo from '../common/Logo'
import Menu from '../common/Menu'
import config from 'lib/config'

const Header = () => (
  <>
    <Head>
      <title>{config.siteName}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header style={{backgroundColor: '#3f4040'}}>
      <AlertBar />
      <div className="container flex flex-wrap flex-col mx-auto justify-center items-center p-4 lg:flex-row lg:justify-between">
        <Logo fill="#fff" />
        <Menu />
      </div>
    </header>
  </>
)

export default Header

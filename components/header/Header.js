import AlertBar from './AlertBar'
import Head from 'next/head'
import Logo from '../common/Logo'
import Menu from './Menu'
import config from '../../lib/config'

const Header = () => (
  <>
    <Head>
      <title>{config.siteName}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header className="text-gray-700 body-font">
      <AlertBar />
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <Menu />
      </div>
    </header>
  </>
)

export default Header

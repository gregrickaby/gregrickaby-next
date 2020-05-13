import Footer from './Footer'
import Header from './Header'
import PropTypes from 'prop-types'

const Layout = ({children}) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.array
}

export default Layout

import PropTypes from 'prop-types'
import '../styles/index.css'

const App = ({Component, pageProps}) => <Component {...pageProps} />

App.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.element.isRequired
}

export default App

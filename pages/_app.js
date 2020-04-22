import PropTypes from 'prop-types'
import '../styles/index.css'

const App = ({Component, pageProps}) => <Component {...pageProps} />

App.propTypes = {
  Component: PropTypes.is.required,
  pageProps: PropTypes.is.required
}

export default App

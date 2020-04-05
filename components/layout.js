import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'

const Layout = ({children}) => (
  <div className="container">
    <Header />
    <main>{children}</main>
    <Footer />
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

        .container {
          display: flex;
          flex-direction: column;
          font-size: 18px;
          line-height: 1.4;
          margin: 0 auto;
          max-width: 680px;
          overflow: hidden;
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
  </div>
)

Layout.propTypes = {
  children: PropTypes.array
}

Layout.defaultProps = {
  children: ''
}

export default Layout

import Logo from '../common/Logo'

const Footer = () => (
  <footer className="footer">
    <section className="footer-wrap container">
      <Logo fill="#fff" />
      <div className="footer-text">
        Proudly powered by <a href="https://wordpress.org">WordPress</a> and{' '}
        <a href="https://nextjs.org">NextJS</a>. Hosted by{' '}
        <a href="https://wpengine.com">WP Engine</a>. WebDevStudios is a{' '}
        <a href="https://wd3.co/">
          <strong>
            WD<span style={{color: '#ff00f0'}}>3</span> Party
          </strong>
        </a>
      </div>
      <div className="footer-contact">
        <a href="tel:1-855-932-3380">(855) 932-3380</a>
      </div>
    </section>
  </footer>
)

export default Footer

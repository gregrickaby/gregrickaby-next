import Logo from '../common/Logo'

const Footer = () => (
  <footer className="px-4 py-8 text-white" style={{backgroundColor: '#3f4040'}}>
    <section className="container flex flex-col items-center lg:flex-row lg:justify-between mx-auto text-center">
      <Logo fill="#fff" />
      <div className="mt-4 text-sm lg:mt-0">
        Proudly powered by <a href="https://wordpress.org">WordPress</a> and{' '}
        <a href="https://nextjs.org">NextJS</a>. Hosted by{' '}
        <a href="https://wpengine.com">WP Engine</a>. WebDevStudios is a{' '}
        <a href="https://wd3.co/">
          <strong>
            WD<span style={{color: '#ff00f0'}}>3</span> Party
          </strong>
        </a>
      </div>
      <div className="mt-4 text-sm lg:mt-0">
        <a href="tel:1-855-932-3380">(855) 932-3380</a>
      </div>
    </section>
  </footer>
)

export default Footer

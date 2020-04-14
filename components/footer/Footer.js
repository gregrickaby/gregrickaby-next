import Logo from '../common/Logo'
import StayConnected from '../blocks/StayConnected'

const Footer = () => (
  <footer className="text-gray-700 body-font">
    <StayConnected />
    <section className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <Logo />
      <p className="text-sm text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        Proudly powered by <a href="https://wordpress.org">WordPress</a> and{' '}
        <a href="https://nextjs.org">NextJS</a>. Hosted by{' '}
        <a href="https://wpengine.com">WP Engine</a>. WebDevStudios is a{' '}
        <a href="https://wd3.co/">
          <strong>
            WD<span style={{color: '#ff00f0'}}>3</span> Party
          </strong>
        </a>
      </p>
      <p className="text-sm text-gray-700 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="mr-1" href="mailto:contact@webdevstudios.com">
          contact@webdevstudios
        </a>{' '}
        /{' '}
        <a className="ml-1" href="tel:1-855-932-3380">
          (855) 932-3380
        </a>
      </p>
    </section>
  </footer>
)

export default Footer

import {FaLinkedin, FaTwitterSquare, FaGithubSquare} from 'react-icons/fa'

const Footer = () => (
  <footer>
    <div className="social-icons">
      <a href="https://twitter.com/webdevstudios" aria-label="twitter">
        <FaTwitterSquare size="36px" />
      </a>
      <a href="https://github.com/webdevstudios" aria-label="github">
        <FaGithubSquare size="36px" />
      </a>
      <a href="https://www.linkedin.com/in/webdevstudios" aria-label="linkedin">
        <FaLinkedin size="36px" />
      </a>
    </div>

    <div>
      Powered by <a href="https://nextjs.org">Next.JS</a> and hosted on{' '}
      <a href="https://zeit.co/">Now</a>.
    </div>
  </footer>
)

export default Footer

import {FaLinkedin, FaTwitterSquare, FaGithubSquare} from 'react-icons/fa'

const Footer = () => (
  <footer>
    <div className="social-icons">
      <a href="https://twitter.com/gregrickaby" aria-label="twitter">
        <FaTwitterSquare size="36px" />
      </a>
      <a href="https://github.com/gregrickaby" aria-label="github">
        <FaGithubSquare size="36px" />
      </a>
      <a href="https://www.linkedin.com/in/gregrickaby" aria-label="linkedin">
        <FaLinkedin size="36px" />
      </a>
    </div>

    <div>
      Powered by <a href="https://nextjs.org">Next.JS</a>
    </div>

    <style jsx>
      {`
        footer {
          align-items: center;
          border-top: 1px solid #111;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          padding-top: 48px;
          margin-top: 24px;
        }

        .social-icons {
          margin-bottom: 24px;
        }

        .social-icons a {
          margin-right: 24px;
        }

        .social-icons a:last-child {
          margin-right: 0;
        }
      `}
    </style>
  </footer>
)

export default Footer

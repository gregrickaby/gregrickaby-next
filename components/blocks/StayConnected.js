import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa'

const StayConnected = () => (
  <section className="bg-black">
    <div className="container p-12 m-auto">
      <h2 className="sm:text-3xl text-2xl font-medium text-center title-font mb-8 text-white">
        Stay Connected
      </h2>
      <div className="flex mb-4 md:flex-row flex-col">
        <div className="md:w-1/4 sm:w-full mb-4">
          <a
            href="https://www.facebook.com/webdevstudios"
            className="flex justify-center"
          >
            <button
              className="text-white py-2 px-4 rounded flex justify-between items-center"
              style={{backgroundColor: '#036ee4'}}
            >
              <FaFacebookSquare />
              <span className="ml-2">Facebook</span>
            </button>
          </a>
        </div>
        <div className="md:w-1/4 sm:w-full mb-4">
          <a
            href="https://twitter.com/webdevstudios"
            className="flex justify-center"
          >
            <button
              className="text-white py-2 px-4 rounded flex justify-between items-center"
              style={{backgroundColor: '#1da1f2'}}
            >
              <FaTwitterSquare />
              <span className="ml-2">Twitter</span>
            </button>
          </a>
        </div>
        <div className="md:w-1/4 sm:w-full mb-4">
          <a
            href="https://instagram.com/webdevstudios"
            className="flex justify-center"
          >
            <button
              className="text-white py-2 px-4 rounded flex justify-between items-center"
              style={{backgroundColor: '#eb007a'}}
            >
              <FaInstagram />
              <span className="ml-2">Instagram</span>
            </button>
          </a>
        </div>
        <div className="md:w-1/4 md:m-0 sm:w-full sm:mb-4">
          <a
            href="https://mailchimp.com/webdevstudios"
            className="flex justify-center"
          >
            <button
              className="text-gray-900 py-2 px-4 rounded flex justify-between items-center"
              style={{backgroundColor: '#fbe050'}}
            >
              <FaEnvelope />
              <span className="ml-2">Mailing List</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default StayConnected

import PropTypes from 'prop-types'
import {getBlockData, getFeaturedImage, GetPost} from 'lib/api'

const FeaturedWork = (props) => {
  const blockData = getBlockData(props.data.acf.content_blocks, 'featured_work')

  return (
    <section
      className=""
      style={{
        backgroundColor: `${blockData.block_options.background_color}`,
        color: `${blockData.block_options.font_color}`
      }}
    >
      <h3 className="mb-3 text-3xl font-light uppercase text-center tracking-widest">
        {blockData.block_options.section_title}
      </h3>
      <div className="grid grid-cols-3">
        {
          // Map over featured work...
          blockData.featured_work.map((item) => {
            // Grab the post data for the portoflio item.
            let featuredWork = GetPost('portfolio', item.ID)

            // Find the logo for the portfolio item.
            let featuredLogo = getFeaturedImage('portfolio', item.ID)

            // Display the featured work.
            return (
              <div
                key={item.ID}
                className="bg-cover bg-no-repeat"
                style={{backgroundImage: `url(${featuredLogo.source_url})`}}
              >
                <div className="bg-cover bg-no-repeat">
                  <img
                    src={featuredWork.acf.portfolio_item_logo.url}
                    alt={featuredWork.acf.portfolio_item_logo.title}
                  />
                </div>
                <div className="bg-white text-black">{item.post_title}</div>
              </div>
            )
          })
        }
        {/* {
          // Map over optional featured work...
          blockData.optional_featured_work.map((post) => {
            // Find the logo associated with the portfolio item.
            let logo = getFeaturedImage('portfolio', post.ID)
            // Display the logo.
            return (
              <div
                key={post.ID}
                className="bg-cover bg-no-repeat"
                style={{backgroundImage: `url(${logo.source_url})`}}
              >
                <div className="bg-white text-black">{post.post_title}</div>
              </div>
            )
          })
        } */}
      </div>
    </section>
  )
}

FeaturedWork.propTypes = {
  data: PropTypes.object
}

export default FeaturedWork

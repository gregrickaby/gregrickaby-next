import PropTypes from 'prop-types'
import {getBlockData, getFeaturedImage} from 'lib/api'

const FeaturedWork = (props) => {
  const blockData = getBlockData(props.data.acf.content_blocks, 'featured_work')

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{
        backgroundColor: `${blockData.block_options.background_color}`,
        color: `${blockData.block_options.font_color}`
      }}
    >
      <h3 className="mb-3 text-3xl font-light uppercase text-center tracking-widest">
        {blockData.block_options.section_title}
      </h3>
      <div className="grid lg:grid-cols-4">
        {
          // This is a funky masonry grid
          // Display title overlay on top
          // Note the hover state (background gradient fades away)
          // Map over featured work...
          blockData.featured_work.map((post) => {
            // Find the logo associated with the portfolio item.
            let logo = getFeaturedImage('portfolio', post.ID)
            // Display the logo.
            return (
              <div
                key={post.ID}
                className="bg-cover bg-no-repeat"
                style={{backgroundImage: `url(${logo.source_url})`}}
              >
                <div className="">{post.post_title}</div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

FeaturedWork.propTypes = {
  data: PropTypes.object
}

export default FeaturedWork

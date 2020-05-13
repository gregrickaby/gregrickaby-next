import PropTypes from 'prop-types'
import {getBlockData} from 'lib/api'

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
      {
        // Map over featured_work
        // Look up each Portfolio item's featured ID
        // Get the media based on featured ID
        // Display title overlay on top
        // This is a funky masonry grid
        // Note the hover state (background gradient fades away)
      }
      <pre>{JSON.stringify(blockData, null, 2)}</pre>
    </section>
  )
}

FeaturedWork.propTypes = {
  data: PropTypes.object
}

export default FeaturedWork

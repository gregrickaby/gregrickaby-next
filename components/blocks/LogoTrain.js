import PropTypes from 'prop-types'
import {getBlockData} from '../../lib/api'
import {getLogoTrainFeaturedMedia} from '../../lib/api'

const LogoTrain = (props) => {
  // Get the block data for the Logo Train.
  const blockData = getBlockData(props.data.acf.content_blocks, 'logo_train')

  return (
    <section
      style={{backgroundColor: `${blockData.block_options.background_color}`}}
    >
      <h3>{blockData.block_options.section_title}</h3>
      {
        // Map over logos...
        blockData.logos.map((media) => {
          // Find the logo associated with the client.
          let logo = getLogoTrainFeaturedMedia(media.ID)
          // Display the logo.
          return <img key={logo.ID} src={logo.source_url} alt={logo.alt_text} />
        })
      }
    </section>
  )
}

LogoTrain.propTypes = {
  data: PropTypes.object
}

export default LogoTrain

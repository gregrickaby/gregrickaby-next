import PropTypes from 'prop-types'
import {getBlockData, getLogoTrainFeaturedMedia} from 'lib/api'

const LogoTrain = (props) => {
  // Get the block data for the Logo Train.
  const blockData = getBlockData(props.data.acf.content_blocks, 'logo_train')

  return (
    <section
      className="p-12"
      style={{backgroundColor: `${blockData.block_options.background_color}`}}
    >
      <h3 className="text-center uppercase text-xl mb-8 tracking-widest">
        {blockData.block_options.section_title}
      </h3>
      <div className="flex flex-wrap space-x-4 md:flex-row">
        {
          // Map over logos...
          blockData.logos.map((media) => {
            // Find the logo associated with the client.
            let logo = getLogoTrainFeaturedMedia(media.ID)
            // Display the logo.
            return (
              <img
                key={media.ID}
                className="flex-auto object-scale-down w-4"
                src={logo.source_url}
                alt={logo.alt_text}
              />
            )
          })
        }
      </div>
    </section>
  )
}

LogoTrain.propTypes = {
  data: PropTypes.object
}

export default LogoTrain

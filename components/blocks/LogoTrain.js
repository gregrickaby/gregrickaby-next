import Button from '../common/Button'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {getBlockData} from '../../lib/api'

const LogoTrain = (props) => {
  const blockData = getBlockData(props.data.acf.content_blocks, 'logo_train')

  return (
    <section
      style={{backgroundColor: `${blockData.block_options.background_color}`}}
    >
      <h3>{blockData.block_options.section_title}</h3>
      {blockData.logos.map((logo) => (
        <p key={logo.id}>{logo.post_title}</p>
      ))}
    </section>
  )
}

LogoTrain.propTypes = {
  data: PropTypes.object
}

export default LogoTrain

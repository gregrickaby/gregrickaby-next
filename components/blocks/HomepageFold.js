import PropTypes from 'prop-types'
import {arrayToObject} from '../../lib/api'

const HomepageFold = (props) => {
  // Convert the Array of Objects.
  const blockObject = arrayToObject(
    props.data.acf.content_blocks,
    'acf_fc_layout'
  )

  // Grab the block data.
  const blockData = blockObject['homepage_fold']

  return (
    <div>
      <pre>
        <pre>{JSON.stringify(blockData, null, 2)}</pre>
      </pre>
    </div>
  )
}

HomepageFold.propTypes = {
  data: PropTypes.object
}

export default HomepageFold

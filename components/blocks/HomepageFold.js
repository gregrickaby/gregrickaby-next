import PropTypes from 'prop-types'

const HomepageFold = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  )
}

HomepageFold.propTypes = {
  data: PropTypes.object
}

export default HomepageFold

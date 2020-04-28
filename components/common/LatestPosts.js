import PropTypes from 'prop-types'
import Card from './Card'

const LatestPosts = (props) => (
  <section className="latest-posts container">
    <h1>{props.title}</h1>
    <div className="latest-posts-content">
      {props.data.slice(0, props.display).map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  </section>
)

LatestPosts.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  display: PropTypes.number
}

LatestPosts.defaultProps = {
  display: 9
}

export default LatestPosts

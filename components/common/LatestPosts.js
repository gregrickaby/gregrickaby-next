import PropTypes from 'prop-types'
import Card from './Card'

const LatestPosts = (props) => (
  <section className="container mx-auto">
    <h1 className="mb-4 text-3xl text-center">{props.title}</h1>
    <div className="flex flex-col flex-wrap items-center lg:flex-row lg:items-start lg:justify-around xl:justify-between">
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

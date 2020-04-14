import PropTypes from 'prop-types'

const TwoColumn = (props) => (
  <section className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-12">
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        {props.column1}
      </div>
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        {props.column2}
      </div>
    </div>
  </section>
)

TwoColumn.propTypes = {
  column1: PropTypes.object,
  column2: PropTypes.object
}

export default TwoColumn

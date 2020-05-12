import Link from 'next/link'
import PropTypes from 'prop-types'
import {getTermNames} from 'lib/api'

const Categories = (props) => (
  <>
    {props.categories.length > 0 && (
      <div className="inline-block">
        {props.categories.map((id) => {
          let categoryName = getTermNames('categories', id)
          return (
            <Link
              key={id}
              href="/blog/category/[...id]"
              as={`/blog/category/${id}`}
            >
              <a>{categoryName} </a>
            </Link>
          )
        })}
      </div>
    )}
  </>
)

Categories.propTypes = {
  categories: PropTypes.array
}

export default Categories

import PropTypes from 'prop-types'
import {parseISO, format} from 'date-fns'

const PostDate = ({dateString}) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

PostDate.propTypes = {
  dateString: PropTypes.string
}

export default PostDate

import {useFetch} from '../lib/hooks'
import PropTypes from 'prop-types'

/**
 * Convert term ID(s) to their names.
 *
 * @author Greg Rickaby
 * @param endpoint   string  The API endpoint for a term, eg. "categories", "tags", "users".
 * @param ids        mixed   The array or integer of terms.
 * return            array   The term names.
 */
export function getTermNames(endpoint, ids) {
  // If ids is an array, fetch and build an array of term names.
  if (Array.isArray(ids)) {
    let termNames = []
    ids.map((term) => {
      let data = useFetch(`${endpoint}/${term}`)
      termNames.push(data.name)
    })

    return termNames
  }

  // If not an array, fetch a single term name.
  let termName = useFetch(`${endpoint}/${ids}`)

  return termName.name
}

getTermNames.propTypes = {
  endpoint: PropTypes.string,
  terms: PropTypes.any.isRequired
}

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
  // If ids is an array...
  if (Array.isArray(ids)) {
    // Set up variable.
    let termNames = []

    // Fetch and build an array of term names.
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

/**
 * Get all the ACF blocks slugs in use on a page.
 *
 * @author Greg Rickaby
 * @param page       object  The page object.
 * return            array   Each ACF block slug for that page, e.g., logo_train, homepage_fold, etc...
 */
export function getAcfBlocksSlugs({page}) {
  // Set our variable.
  let slugs = []

  // Build an array of ACF block slugs.
  page.acf.content_blocks.map((block) => {
    slugs.push(block.acf_fc_layout)
  })

  return slugs
}

getAcfBlocksSlugs.propTypes = {
  page: PropTypes.object
}

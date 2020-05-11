import {useFetch} from '../lib/hooks'
import PropTypes from 'prop-types'

/**
 * Convert term ID(s) to their names.
 *
 * @author Greg Rickaby
 * @param  {endpoint} string The API endpoint for a term, eg. "categories", "tags", "users".
 * @param  {ids}      mixed  The array or integer of terms.
 * return  {array}           The term names.
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
 * @param  {page}       object The page object.
 * return  {array}      array  Each ACF block slug for that page, e.g., logo_train, homepage_fold, etc...
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

/**
 * Convert an Array of Objects to an Object.
 *
 * @author Chris Burgin
 * @link   https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
 * @param  {arr}           array  The array you need to convert to an object.
 * @param  {keyField}      string The ID of the new object.
 * @return {object}               An object with IDs.
 */
export function arrayToObject(arr, keyField) {
  return arr.reduce((obj, item) => {
    obj[item[keyField]] = item
    return obj
  }, {})
}

arrayToObject.propTypes = {
  arr: PropTypes.array,
  keyField: PropTypes.string
}

/**
 * Get block data from ACF Flexible Content.
 *
 * @author Greg Rickaby
 * @param  {contentBlocks} array  The array of content blocks.
 * @param  {blockID}       string The block ID you want to display.
 * @return {object}               The block data.
 */
export function getBlockData(contentBlocks, blockID) {
  // Convert the content block array to an object.
  const blockData = arrayToObject(contentBlocks, 'acf_fc_layout')

  // Return the data from the block ID.
  return blockData[blockID]
}

getBlockData.propTypes = {
  contentBlocks: PropTypes.array,
  blockID: PropTypes.string
}

/**
 * Get data for any piece of media.
 *
 * @author Greg Rickaby
 * @param {mediaID} int  The ID of the media you want to fetch from WordPress.
 * @return object        All the data about that piece of media.
 */
export function getMedia(mediaID) {
  return useFetch(`media/${mediaID}`)
}

getMedia.propTypes = {
  mediaID: PropTypes.integer
}

/**
 * Get the featured media for each Logo Train item.
 *
 * @author Gregrickaby
 * @param {clientID} int  The Client ID from the Clients post type.
 * @return object         The data object for that piece of media.
 */
export function getLogoTrainFeaturedMedia(clientID) {
  // The Logo Train uses the relationship field selector
  // in ACF, so we need to fetch the post data for each
  // client in the train.
  const client = useFetch(`clients/${clientID}`)

  // Return the media data.
  return getMedia(client.featured_media)
}

getLogoTrainFeaturedMedia.propTypes = {
  clientID: PropTypes.integer
}

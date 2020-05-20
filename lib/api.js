import PropTypes from 'prop-types'
import config from './config'
import useSWR from 'swr'

/**
 * A generic function for querying different types of post data.
 *
 * @author Greg Rickaby
 * @link https://github.com/zeit/swr#api
 * @param {string}  endpoint The content type endpoint e.g., 'posts', 'pages', 'client', 'portfolio', etc...
 * @param {integer} postID   The post ID for the content type.
 * @return {object}          A JSON object for the post.
 */
export function GetPost(endpoint, postID) {
  // A simple fetcher for SWR.
  const fetcher = (url) => fetch(url).then((r) => r.json()) // eslint-disable-line no-undef

  // Setup data for fetching.
  const {data, error} = useSWR(`${config.apiUrl}${endpoint}/${postID}`, fetcher)

  // If there's an error, pass it along.
  if (error) return `${error}`

  // Return an object while waiting.
  if (!data) return {}

  // Finally, return the data.
  return data
}

GetPost.propTypes = {
  endpoint: PropTypes.string,
  postID: PropTypes.integer
}

/**
 * Convert term ID(s) to their names.
 *
 * @author Greg Rickaby
 * @param  {string} endpoint The API endpoint for a term, eg. "categories", "tags", "users".
 * @param  {mixed}  mixed    The array or integer of terms.
 * return  {array}           The term names.
 */
export function getTermNames(endpoint, ids) {
  // If ids is an array...
  if (Array.isArray(ids)) {
    // Set up variable.
    let termNames = []

    // Fetch and build an array of term names.
    ids.map((term) => {
      let data = GetPost(`${endpoint}/${term}`)
      termNames.push(data.name)
    })

    return termNames
  }

  // If not an array, fetch a single term name.
  let termName = GetPost(`${endpoint}/${ids}`)

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
 * @param  {object} page The page object.
 * return  {array}       Each ACF block slug for that page, e.g., logo_train, homepage_fold, etc...
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
 * @param  {array}  arr      The array you need to convert to an object.
 * @param  {string} keyField The ID of the new object.
 * @return {object}          An object with IDs.
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
 * @param  {array}  contentBlocks The array of content blocks.
 * @param  {string} blockID       The block ID you want to display.
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
 * @param {integer} mediaID The ID of the media you want to fetch from WordPress.
 * @return {object}         All the data about that piece of media.
 */
export function getMedia(mediaID) {
  return GetPost(`media/${mediaID}`)
}

getMedia.propTypes = {
  mediaID: PropTypes.integer
}

/**
 * Reach in and grab the featured image from a post.
 *
 * @author Greg Rickaby
 * @param {string}  endpoint The content type endpoint e.g., 'posts', 'pages', 'client', 'portfolio', etc...
 * @param {integer} postID   The post ID for the content type.
 * @return {object}          A JSON object for the media.
 */
export function getFeaturedImage(endpoint, postID) {
  const data = GetPost(`${endpoint}/${postID}`)

  // Return the media data.
  return getMedia(data.featured_media)
}

getFeaturedImage.propTypes = {
  endpoint: PropTypes.string,
  postID: PropTypes.integer
}

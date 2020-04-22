import config from './config'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import {useState, useEffect} from 'react'

/**
 * Custom fetch method.
 *
 * @param {endpoint} String The API endpoint.
 * @return Object           The API endpoint response.
 */
export function useFetch(endpoint) {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${config.apiUrl}${endpoint}`)
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [endpoint])

  return data
}

useFetch.propTypes = {
  endpoint: PropTypes.string
}

useFetch.defaultProps = {
  terms: ''
}

/**
 * Convert term ID(s) to their names.
 *
 * @param {endpoint} string  The API endpoint for a term, eg. "categories", "tags", "users".
 * @param {ids}      mixed   The array or integer of terms.
 * return            mixed   The term names.
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

getTermNames.defaultProps = {
  endpoint: 'categories',
  terms: []
}

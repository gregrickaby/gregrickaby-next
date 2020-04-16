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
 * Convert term IDs to their names.
 *
 * @param {endpoint} String  The API endpoint for term, eg. "categories" or "tags".
 * @param {id}       Array   The array of categories.
 * return            Array   The term names.
 */
export function getTermNames(endpoint, terms) {
  let termNames = []

  if (Array.isArray(terms)) {
    terms.map((term) => {
      let data = useFetch(`${endpoint}/${term}`)
      termNames.push(data.name)
    })

    return termNames
  }

  return termNames
}

getTermNames.propTypes = {
  endpoint: PropTypes.string,
  terms: PropTypes.array
}

getTermNames.defaultProps = {
  endpoint: 'categories',
  terms: []
}

import config from './config'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import {useState, useEffect} from 'react'

/**
 * A hook to deal with closing Alert or Modal components.
 *
 * @author Greg Rickaby
 * @return mixed        The value of isShowing; toggle function as a hook.
 */
export function useCloseButton() {
  // Instantiate state values.
  const [isShowing, setIsShowing] = useState(true)

  // Change the value of isShowing to the opposite of current state.
  function toggle() {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggle
  }
}

/**
 * Custom data fetching hook using async/await.
 *
 * @author Greg Rickaby
 * @param {endpoint} String The API endpoint.
 * @return Object           The API endpoint response.
 */
export function useFetch(endpoint) {
  // Instantiate state values.
  const [data, setData] = useState([])

  // Fetch data, then setData state.
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

import config from './config'
import fetch from 'isomorphic-unfetch'
import {useState, useEffect} from 'react'

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

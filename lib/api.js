import {useState, useEffect} from 'react'
import fetch from 'isomorphic-unfetch'

export function useFetch(endpoint) {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://webdevstudios.com/wp-json/wp/v2/${endpoint}`
      )
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [endpoint])

  return data
}

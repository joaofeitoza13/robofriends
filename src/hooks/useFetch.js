import { useState, useEffect, useRef } from 'react'
import { fetchRobots } from '../utils/index'

export const useFetch = (num, page) => {
  const cache = useRef({})
  const [data, setData] = useState([])

  const getData = async (num, page) => {
    if (cache.current[page]) {
      const cachedData = cache.current[page]
      setData(cachedData)
    } else {
      const fetchedData = await fetchRobots(num, page)
      cache.current[page] = fetchedData
      setData(cache.current[page])
    }
  }

  useEffect(() => {
    getData(num, page)
  }, [page])

  return [data]
}

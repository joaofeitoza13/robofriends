import { useState, useEffect } from 'react'
import fetchRobots from './fetchRobots'

export const useFetch = (num, page) => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData(num, page)
  }, [page])

  const getData = async (num, page) => {
    const fetchedData = await fetchRobots(num, page)
    setData(fetchedData)
  }

  return [data]
}

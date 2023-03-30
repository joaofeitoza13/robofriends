import { useState, useEffect } from 'react'

export const useFilter = (list) => {
  const [data, setData] = useState(list)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    filterByUsername(list, filter)
  }, [list, filter])

  const filterByUsername = (list, dataFilter) => {
    const filteredList = list.filter((data) =>
      data.username.includes(dataFilter.toLowerCase())
    )
    setData(filteredList)
  }

  return [data, setFilter]
}

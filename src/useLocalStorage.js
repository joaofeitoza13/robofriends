import { useState, useEffect } from 'react'

const getLocalStorageData = (key) => {
  const storedItem = localStorage.getItem(key)
  return JSON.parse(storedItem)
}

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(
    () => getLocalStorageData(key) || initialValue
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

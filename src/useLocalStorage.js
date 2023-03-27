import { useState, useEffect } from 'react'

const getLocalStorageData = (keyName) => {
  const storedItem = localStorage.getItem(keyName)
  const parsedItem = JSON.parse(storedItem)
  return parsedItem
}

export const useLocalStorage = (keyName, initialValue) => {
  const [value, setValue] = useState(
    () => getLocalStorageData(keyName) || initialValue
  )

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value))
  }, [keyName, value])

  return [value, setValue]
}

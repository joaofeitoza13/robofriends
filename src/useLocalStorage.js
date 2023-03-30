import { useState, useEffect } from 'react'

const getItem = (key) => {
  const storedItem = localStorage.getItem(key)
  return JSON.parse(storedItem)
}

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getItem(key) || initialValue)

  useEffect(() => {
    setItem(key, value)
  }, [key, value])

  return [value, setValue]
}

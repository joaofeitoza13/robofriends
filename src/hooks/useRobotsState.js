import { useContext } from 'react'

export const useRobotsState = () => {
  const context = useContext(null)

  if (!context) {
    throw new Error('RobotsContext problem')
  }

  return context
}

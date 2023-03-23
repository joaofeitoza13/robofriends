import { useContext } from 'react'
// import { createContext, useContext } from "react"

// export const RobotsContext = createContext();

export const useRobotsState = () => {
  // const context = useContext(RobotsContext)
  const context = useContext(null)

  if (!context) {
    throw new Error('RobotsContext problem')
  }

  return context
}

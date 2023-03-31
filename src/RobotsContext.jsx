import { createContext } from 'react'
import { useContext } from 'react'

const RobotsContext = createContext()

export const RobotsProvider = ({ robot, children }) => {
  return (
    <RobotsContext.Provider value={robot}>{children}</RobotsContext.Provider>
  )
}

export const useRobot = () => useContext(RobotsContext)

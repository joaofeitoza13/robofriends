import { useState, useEffect } from "react"
import SearchBox from "./SearchBox"
import CardList from "./CardList"
import fetchRobots from './fetchRobots'

const Index = () => {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    if (robots.length === 0) {
      getRobots()
    }
  }, [searchField])

  const getRobots = async () => {
    const robots = await fetchRobots(14)
    setRobots(robots)
  }

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }
  const filteredRobots = robots.filter((robot) =>
    robot.username.includes(searchField.toLowerCase())
  )
  return(
    <>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </>
  ) 
}

export default Index

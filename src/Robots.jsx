import { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import CardList from './CardList'
import fetchRobots from './fetchRobots'
import { useLocalStorage } from './useLocalStorage'

const Index = () => {
  let filteredRobots = []
  const [searchField, setSearchField] = useState('')
  const [storedRobots, setStoredRobots] = useLocalStorage('robots', '')

  useEffect(() => {
    if (storedRobots.length === 0) {
      getRobots()
    }
  }, [searchField])

  const getRobots = async () => {
    const robots = await fetchRobots(15)
    setStoredRobots(robots)
  }

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  if (storedRobots) {
    filteredRobots = storedRobots.filter((robot) =>
      robot.username.includes(searchField.toLowerCase())
    )
  }

  return (
    <>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </>
  )
}

export default Index

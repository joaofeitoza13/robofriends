import { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Pagination from './Pagination'
import fetchRobots from './fetchRobots'

const Index = () => {
  let filteredRobots = []
  const [currentPage, setCurrentPage] = useState(1)
  const [numberOfRobots] = useState(10)
  const [searchField, setSearchField] = useState('')
  const [storedRobots, setStoredRobots] = useLocalStorage(
    `robots-page-${currentPage}`,
    ''
  )

  useEffect(() => {
    getRobots()
  }, [searchField, currentPage])

  const getRobots = async () => {
    const robots = await fetchRobots(numberOfRobots, currentPage)
    setStoredRobots({ currentPage, robots })
  }

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  if (storedRobots) {
    filteredRobots = storedRobots.robots.filter((robot) =>
      robot.username.includes(searchField.toLowerCase())
    )
  }

  return (
    <>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} currentPage={currentPage} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default Index

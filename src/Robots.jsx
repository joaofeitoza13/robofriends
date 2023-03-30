import { useState, useEffect } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Pagination from './Pagination'
import { useFetch } from './useFetch'
import { useFilter } from './useFilter'

const Robots = () => {
  const numberOfRobots = 12
  const [currentPage, setCurrentPage] = useState(1)
  const [robots] = useFetch(numberOfRobots, currentPage)
  const [filteredRobots, setRobotFilter] = useFilter(robots)

  useEffect(() => {}, [robots, filteredRobots, currentPage])

  const onSearchChange = (event) => {
    setRobotFilter(event.target.value)
  }

  return (
    <>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} currentPage={currentPage} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default Robots

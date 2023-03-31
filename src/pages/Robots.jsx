import { useState, useEffect } from 'react'
import { CardList } from '../components/CardList'
import { SearchBox } from '../components/SearchBox'
import { Pagination } from '../components/Pagination'
import { useFetch, useFilter } from '../hooks/index'

export const Robots = () => {
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

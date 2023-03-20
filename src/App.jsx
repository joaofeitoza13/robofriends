import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import CardList from './CardList'
import SearchBox from './SearchBox'
import fetchRobots from './fetchRobots'
import 'tachyons'
import './index.css'

const App = () => {
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

  return (
    <div className="tc">
      <h1 id="robotitle" className="font-face">
        Robo Friends
      </h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

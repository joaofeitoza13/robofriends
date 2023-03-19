import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'tachyons'

import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'

const App = () => {
  const [fetchedRobots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    )
    setRobots(filteredRobots)
  }, [searchField])

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  return (
    <div className="tc">
      <h1 id="robotitle" className="font-face">
        Robo Friends
      </h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={fetchedRobots} />
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

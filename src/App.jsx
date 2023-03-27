import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Robots from './Robots'
import Details from './Details'
import 'tachyons'
import './index.css'
import { useState } from 'react'
import { RobotsContext } from './RobotContext'

const App = () => {
  const robots = useState('None selected')

  return (
    <div className="tc">
      <BrowserRouter>
        <Link to="/">
          <h1 id="robot-title" className="font-face">
            Hire Dev Robots
          </h1>
        </Link>
        <RobotsContext.Provider value={robots}>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Robots />} />
          </Routes>
        </RobotsContext.Provider>
      </BrowserRouter>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

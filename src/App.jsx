import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Index from './Index'
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
          <h1 id="robotitle" className="font-face">
            Robo Friends
          </h1>
        </Link>
        <RobotsContext.Provider value={robots}>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Index />} />
          </Routes>
        </RobotsContext.Provider>
      </BrowserRouter>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

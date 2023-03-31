import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { RobotsProvider } from './RobotsContext'
import { Details } from './Details'
import { Robots } from './Robots'
import 'tachyons'
import './index.css'

const App = () => {
  const robot = useState(null)

  return (
    <React.StrictMode>
      <div id="app" className="tc">
        <BrowserRouter>
          <Link id="app-link" to="/">
            <h1 id="robot-title" className="font-face">
              Hire Dev Robots
            </h1>
          </Link>
          <RobotsProvider robot={robot}>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<Robots />} />
            </Routes>
          </RobotsProvider>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

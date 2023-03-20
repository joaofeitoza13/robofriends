import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Index from './Index'
import 'tachyons'
import './index.css'

const App = () => {
  return (
    <div className="tc">
      <BrowserRouter>
        <Link to="/">
          <h1 id="robotitle" className="font-face">
            Robo Friends
          </h1>
        </Link>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

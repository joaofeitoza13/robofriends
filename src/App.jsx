import { createRoot } from 'react-dom/client'
import Index from './Index'
import 'tachyons'
import './index.css'

const App = () => {
  return (
    <div className="tc">
      <h1 id="robotitle" className="font-face">
        Robo Friends
      </h1>
      <Index />
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

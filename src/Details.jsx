import { useContext } from 'react'
// import { useParams } from 'react-router'
import { RobotsContext } from './RobotContext'

function Details() {
  // const { id } = useParams()
  const [robot] = useContext(RobotsContext)
  return (
    <div className="tc bg-light-green dib br3 pa4 ma4 shadow-5">
      <div className="user-image">
        <img src={`${robot.photo}`} alt="" />
      </div>
      <h2 className="user-name">{robot.username}</h2>
      <p className="about-user">{`My name is ${robot.name} and I'm a robot frontend web developer`}</p>
      <p>{`I'm from ${robot.city}, ${robot.country}`}</p>
      <div className="social-container">
        <span className="">{`I have ${Math.abs(
          Math.random() * 1000
        ).toFixed()} projets`}</span>
      </div>
      <button className="hire-me">Hire Me</button>
    </div>
  )
}

Details.propTypes = {}

export default Details

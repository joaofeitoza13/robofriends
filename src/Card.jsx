import { Link } from 'react-router-dom'
import { useRobot } from './RobotsContext'

const Card = ({ robot, currentPage }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setRobot] = useRobot()
  return (
    <Link
      to={`/details/${robot.id}`}
      onClick={() => {
        setRobot({ robot, currentPage })
      }}
    >
      <div id="card" className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5">
        <img alt="robots" src={`${robot.photo}`} />
        <div>
          <h2>{robot.username}</h2>
          <p>{robot.name}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card

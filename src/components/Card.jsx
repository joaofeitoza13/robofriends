import { Link } from 'react-router-dom'
import { useRobot } from '../context/RobotsContext'

export const Card = ({ robot, currentPage }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setRobot] = useRobot()
  return (
    <Link
      id="card-link"
      to={`/details/${robot.id}`}
      onClick={() => {
        setRobot({ robot, currentPage })
      }}
    >
      <section id="card" className="tc dib br3 pa3 ma2 bw2 shadow-5">
        <img id="photo" alt="robots" src={`${robot.photo}`} />
        <section id="description">
          <p id="name">{robot.name}</p>
          <p id="username">{robot.username}</p>
        </section>
      </section>
    </Link>
  )
}

import { useContext } from 'react'
import { useParams } from 'react-router'
import { RobotsContext } from './RobotContext'

function Details() {
  const { id } = useParams()
  const [robot] = useContext(RobotsContext)

  console.log(robot)

  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

Details.propTypes = {}

export default Details

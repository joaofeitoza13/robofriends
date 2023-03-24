import { useContext } from 'react'
import { useParams } from 'react-router'
import { RobotsContext } from './RobotContext'
// import { Modal } from "./Modal"

function Details() {
  const { id } = useParams()
  const [{ photo, username, name, job, location, projects }] =
    useContext(RobotsContext)
  return (
    <div className="tc bg-light-green dib br3 pa4 ma4 shadow-5" key={id}>
      <div className="user-image">
        <img src={`${photo}`} alt="" />
      </div>
      <p className="robot-user">{username}</p>
      <p className="f3">
        <b>{name}</b>
      </p>
      <p className="f4">{job}</p>
      <p className="f4">{location}</p>
      <p className="f3">
        <b>I have {projects} projects</b>
      </p>
      <br />
      <button className="hire-me bg-dark-blue f3 near-white link dim br2 bn pa10">
        Hire Me
      </button>
    </div>
  )
}

Details.propTypes = {}

export default Details

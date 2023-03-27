import { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { RobotsContext } from './RobotContext'
import { Modal } from './Modal'
import { useLocalStorage } from './useLocalStorage'

function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [robot, setRobots] = useContext(RobotsContext)

  const [selectedRobot] = useLocalStorage(`${id}`, robot)

  const { photo, username, name, job, location, projects } = selectedRobot

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
      <button
        className="hire-me bg-dark-blue f3 near-white link dim br2 bn pa10"
        onClick={() => {
          setShowModal(true)
        }}
      >
        Hire Me
      </button>
      {showModal ? (
        <Modal>
          <div className="modal">
            <p className="f2">
              Would you like to hire <span>{username}</span> ?
            </p>
            <div className="buttons">
              <button
                onClick={() => {
                  setRobots({ photo, username, name })
                  navigate('/')
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setShowModal(false)
                }}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

Details.propTypes = {}

export default Details

import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { useLocalStorage } from './useLocalStorage'
import { RobotsContext } from './RobotsContext'
import { Modal } from './Modal'
import hiredImg from '../public/hired.png'

function Details() {
  const { id } = useParams()
  const [robot] = useContext(RobotsContext)
  const [showModal, setShowModal] = useState(false)
  const [details, setDetails] = useLocalStorage(`${id}`, robot)

  useEffect(() => {
    toggleHiredCSSClass(details)
  }, [details.hired])

  const toggleHiredCSSClass = () => {
    const detailsClass = document.getElementById('hired')
    if (!details.hired) {
      detailsClass.classList.add('dn-l')
    } else {
      detailsClass.classList.remove('dn-l')
    }
  }

  const hireRobot = (flag) => {
    details.hired = flag
    setDetails(structuredClone(details))
  }

  return (
    <div
      className="tc bg-light-green dib br3 pa4 ma4 shadow-5"
      key={details.id}
    >
      <div className="user-image">
        <img src={`${details.photo}`} alt="robot portrait" />
        <img id="hired" src={hiredImg} alt="hired logo" width="550px" />
      </div>
      <p className="robot-user">{details.username}</p>
      <p className="f3">
        <b>{details.name}</b>
      </p>
      <p className="f4">{details.job}</p>
      <p className="f4">{details.location}</p>
      <p className="f3">
        <b>I have {details.projects} projects</b>
      </p>
      <br />
      <button
        className="hire-me bg-dark-blue f3 near-white link dim br2 bn pa10"
        onClick={() => {
          setShowModal(true)
        }}
      >
        {!details.hired ? 'Hire Me' : 'Unhire Me'}
      </button>
      {showModal ? (
        <Modal>
          <div className="modal">
            <p className="f2">
              Would you like to {!details.hired ? 'HIRE' : 'UNHIRE'}{' '}
              <span>{details.username}</span> ?
            </p>
            {!details.hired ? (
              <div className="buttons">
                <button
                  onClick={() => {
                    hireRobot(true)
                    setShowModal(false)
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
            ) : (
              <div className="buttons">
                <button
                  onClick={() => {
                    hireRobot(false)
                    setShowModal(false)
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
            )}
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

Details.propTypes = {}

export default Details

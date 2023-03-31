import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useRobot } from '../context/index'
import { Modal } from '../components/Modal'
import hiredImg from '../assets/hired.png'

export function Details() {
  const { id } = useParams()
  const [robot] = useRobot()
  const [showModal, setShowModal] = useState(false)
  const [details, setDetails] = useLocalStorage(`${id}`, robot.robot)

  useEffect(() => {
    toggleHiredCSSClass(details)
  }, [details.hired])

  // const updateRobotHiredStatusInStorage = (id) => {
  //   const storageKey = `robots-page-${robot.currentPage}`
  //   const storedItem = localStorage.getItem(storageKey)
  //   const fetchedList = JSON.parse(storedItem)
  //   const robotList = fetchedList.robots
  //   const robotIndex = robotList.findIndex((robot) => robot.id === id)
  //   fetchedList.robots[robotIndex].hired = details.hired
  //   const newItem = structuredClone(fetchedList)
  //   localStorage.setItem(storageKey, JSON.stringify(newItem))
  // }

  const toggleHiredCSSClass = () => {
    const detailsClass = document.getElementById('hired-image')
    if (!details.hired) {
      detailsClass.classList.add('dn-l')
    } else {
      detailsClass.classList.remove('dn-l')
    }
  }

  const hireRobot = (flag) => {
    details.hired = flag
    setDetails(structuredClone(details))
    // updateRobotHiredStatusInStorage(id)
  }

  return (
    <div className="tc dib br3 pa4 ma4 shadow-5" id="details" key={details.id}>
      <img
        id="photo"
        src={`${details.photo}`}
        alt="robot portrait"
        width="550px"
      />
      <section id="description">
        <img id="hired-image" src={hiredImg} alt="hired logo" />
        <p id="username">{details.username}</p>
        <p id="name">{details.name}</p>
        <p id="job">{details.job}</p>
        <p id="location">{details.location}</p>
        <p id="projects">I have {details.projects} projects</p>
      </section>
      <br />
      <button
        id="hire-btn"
        className="bg-dark-blue f3 near-white link dim br2 bn pa10"
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

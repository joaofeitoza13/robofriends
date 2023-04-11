import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useRobot } from '../context/index'
import { Modal, Hire } from '../components/index'
import { DetailsCard } from '../components/DetailsCard'

export function Details() {
  const { id } = useParams()
  const [robot] = useRobot()
  const [showModal, setShowModal] = useState(false)
  const [details, setDetails] = useLocalStorage(`${id}`, robot.robot)

  useEffect(() => {
    toggleHiredCSSClass(details)
  }, [details.hired])

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
      <DetailsCard robot={details} setShowModal={setShowModal} />
      {showModal ? (
        <Modal>
          <Hire
            robot={details}
            hireRobot={hireRobot}
            setShowModal={setShowModal}
          />
        </Modal>
      ) : null}
    </div>
  )
}

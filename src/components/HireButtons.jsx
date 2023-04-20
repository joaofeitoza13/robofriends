export const HireButtons = ({ hireRobot, setShowModal, show }) => {
  return (
    <div className="buttons">
      <button
        onClick={() => {
          hireRobot(show)
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
  )
}

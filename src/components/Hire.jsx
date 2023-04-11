import { HireButtons } from './HireButtons'

export const Hire = ({ robot, hireRobot, setShowModal }) => {
  return (
    <div className="modal">
      <p className="f2">
        Would you like to {!robot.hired ? 'HIRE' : 'UNHIRE'}{' '}
        <span>{robot.username}</span> ?
      </p>
      {!robot.hired ? (
        <HireButtons
          hireRobot={hireRobot}
          setShowModal={setShowModal}
          show={true}
        />
      ) : (
        <HireButtons hireRobot={hireRobot} show={false} />
      )}
    </div>
  )
}

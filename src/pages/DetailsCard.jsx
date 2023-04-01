import hiredImg from '../assets/hired.png'

export const DetailsCard = ({ robot, setShowModal }) => {
  return (
    <>
      <img
        id="photo"
        src={`${robot.photo}`}
        alt="robot portrait"
        width="550px"
      />
      <section id="description">
        <img id="hired-image" src={hiredImg} alt="hired logo" />
        <p id="username">{robot.username}</p>
        <p id="name">{robot.name}</p>
        <p id="job">{robot.job}</p>
        <p id="location">{robot.location}</p>
        <p id="projects">I have {robot.projects} projects</p>
      </section>
      <br />
      <button
        id="hire-btn"
        className="bg-dark-blue f3 near-white link dim br2 bn pa10"
        onClick={() => {
          setShowModal(true)
        }}
      >
        {!robot.hired ? 'Hire Me' : 'Unhire Me'}
      </button>
    </>
  )
}

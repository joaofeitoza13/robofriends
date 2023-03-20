import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <Link to={``}>
      <div
        id="card"
        className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
      >
        <img alt="robots" src={`https://robohash.org/${props.id}?200x200`} />
        <div>
          <h2>{props.username}</h2>
          <p>{props.name}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card

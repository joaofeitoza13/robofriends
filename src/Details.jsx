import { useParams } from "react-router"

function Details() {
  const { id } = useParams()
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

Details.propTypes = {}

export default Details

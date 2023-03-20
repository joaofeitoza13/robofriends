import Card from './Card'

const CardList = ({ robots }) => {
  return robots.length ? (
    <div className="cardlist">
      {robots.map((_, i) => {
        return (
          <Card
            key={robots[i].uuid}
            id={robots[i].uuid}
            name={robots[i].name}
            username={robots[i].username}
          />
        )
      })}
    </div>
  ) : (
    <h1>Empty array.</h1>
  )
}

export default CardList

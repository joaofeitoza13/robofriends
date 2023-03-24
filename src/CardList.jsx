import Card from './Card'

const CardList = ({ robots }) => {
  return robots.length ? (
    <div className="cardlist">
      {robots.map((_, i) => {
        return <Card key={robots[i].uuid} robot={robots[i]} />
      })}
    </div>
  ) : (
    <h1>Empty array.</h1>
  )
}

export default CardList

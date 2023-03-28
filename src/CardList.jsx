import Card from './Card'

const CardList = ({ robots, currentPage }) => {
  return robots.length ? (
    <div className="cardlist">
      {robots.map((_, i) => {
        return (
          <Card
            key={robots[i].id}
            robot={robots[i]}
            currentPage={currentPage}
          />
        )
      })}
    </div>
  ) : (
    <h1 className="tc f1 light-green">
      Sorry, robot not found <br /> :/
    </h1>
  )
}

export default CardList

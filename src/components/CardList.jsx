import { Card } from './Card'

export const CardList = ({ robots, currentPage }) => {
  return robots.length ? (
    <div id="card-list">
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
    //TODO create error handling component
    <h1 className="tc f1 light-green">
      Sorry, robot not found <br /> :/
    </h1>
  )
}

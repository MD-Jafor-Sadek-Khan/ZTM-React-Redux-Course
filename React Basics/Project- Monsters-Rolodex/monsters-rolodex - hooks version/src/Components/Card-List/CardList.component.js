import "./card-list.css"
import Card from "../Card/Card.component"

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />
    })}
  </div>
)

export default CardList

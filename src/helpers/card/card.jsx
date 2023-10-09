import { Card } from "react-bootstrap"
import './card.scss'

const CardComp = (item) => {
  return (
    <Card className="card-comp">
      <Card.Header className="card-header">
          <Card.Img
              variant="top"
              src={item.image}
              className="img-fluid"
        />
        </Card.Header>
          <Card.Body className="card-comp-text">
        <Card.Subtitle>{item.title}</Card.Subtitle>
        <br />
        <Card.Title>$ {item.price}</Card.Title>
          </Card.Body>
    </Card>
  )
}

export default CardComp
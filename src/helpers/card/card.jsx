/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap"
import './card.scss'
import { Link } from "react-router-dom";
import StarRating from "../create-star/StarRing";

const CardComp = ({ item }) => {
  return (
    <>
    <Card className="card-comp">
      <Card.Header className="card-header">
      <Link to={`/products/${item.id}`}>
          <Card.Img
              variant="top"
              src={item.image}
              className="img-fluid"
          />
          </Link>
        </Card.Header>
      <Card.Body className="card-comp-text">
      <Link to={`/products/${item.id}`}>
          <Card.Subtitle>
            <StarRating rate={item.rating.rate} />
        </Card.Subtitle>
        <br />
            <Card.Subtitle >
              {
                item.title.length > 20
                  ?  (item.title.slice(0, 19) + "..." )
                  :  item.title
              }
              
            </Card.Subtitle>
        <br />
          <Card.Title>$ {item.price}</Card.Title>
          </Link>
        </Card.Body>
        <Button
          variant="outline-primary" className="card-btn d-none" >
          Add to Basket</Button>
    </Card>
      </>
  )
}

export default CardComp
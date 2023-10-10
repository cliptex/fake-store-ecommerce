import {  Col, Container,  Image,  Row } from "react-bootstrap"
import { discover } from "../../helpers/data/discover"
import './discover.scss' 

const Discover = () => {
  return (
      <Container className="discover">
          <h2 className="my-5 text-center">CATEGORIES</h2>
          <Row>
              {
                  discover.map((item,i) => (
                      <Col
                          key={i}
                          md={item.col}
                          className="mb-4"
                      >
                          <Image
                              src={item.img}
                              className="img-fluid h-100"
                          />
                          <div className="texts">
                              <h5>{item.first}</h5>
                              <h5>{item.second}</h5>
                              <p>{item.third}</p>
                          </div>
                      </Col>
                  ))
              }
          </Row>
    </Container>
  )
}

export default Discover
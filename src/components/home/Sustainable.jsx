import { Col, Container, Image, Row } from "react-bootstrap"
import './sustianable.scss'

const Sustainable = () => {
    return (
        <Container className="sustianable" > 
            <Row>
                <Col>
                <a target="blank" href="https://kids.nationalgeographic.com/nature/save-the-earth"><Image src="/photos/home-page/sustainable.png" /></a>
                </Col>
            </Row>
      </Container>
  )
}

export default Sustainable
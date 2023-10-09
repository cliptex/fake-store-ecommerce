import { Col, Container, Image, Row } from "react-bootstrap"
import './sustianable.scss'

const Sustainable = () => {
    return (
        <Container className="sustianable" > 
            <Row>
                <Col>
                    <Image src="/photos/home-page/sustainable.png" />
                </Col>
            </Row>
      </Container>
  )
}

export default Sustainable
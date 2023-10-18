import { Col, Container, Image, Row } from "react-bootstrap"
import Spacer from "../../components/common/spacer"


const ErrorPage = () => {

    return (
        <>
        <Spacer/>
        <Container className="text-center py-5">
           <Row>
            <Col>
            <img src="/error/404.png" className="img-fluid" alt="notfound" />
            </Col>
           </Row>
        </Container>
        <Spacer/>
        </>
    )
}

export default ErrorPage
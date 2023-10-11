import { Button, Col, Container, Row } from "react-bootstrap"
import { SwiperComp } from "../../helpers/swiper/SwiperComp"
import Spacer from "../../components/common/spacer";
import { Link } from "react-router-dom";

const nameAndTypes = [
  { name: "Woman", type: "women's" },
  { name: "Man", type: "men's" },
  { name: "Jawelery", type: "jewelery" },
  { name: "Electronics", type: "electronics" }
];
const AllProduct = () => {

  return (
    <Container>
      <Row className="text-center">
      {
          nameAndTypes.map((item, i) => (
          <Col key={i}>
          <h2>{item.name}</h2>
              <SwiperComp type={item.type} btn={item.name} />
              <Link to={item.name}><Button variant="outline-dark" className="w-100">
        See All
      </Button></Link>
              <Spacer />

            </Col>
            
        ))
          }
        </Row>
        
      </Container>
  )
}

export default AllProduct
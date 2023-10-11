
import { Col, Container, Row } from "react-bootstrap"
import CardComp from "../../helpers/card/card";
import DataApi from "../../components/context/store";
import { useContext } from "react";

const ProductCardPart = (props) => {

  const store = useContext(DataApi)

  // eslint-disable-next-line react/prop-types
  const newData = store.filter((item) => item.category.startsWith(`${props.item}`));

  return (
    <Container>
      <Row>
        {
          newData.map((item, i) => (
            <Col
              md={6}
              lg={4}
              xl={3}
              key={i}
              className="text-center"
            >
              <CardComp item={item} />
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default ProductCardPart
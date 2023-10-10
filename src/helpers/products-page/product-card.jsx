/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Col, Container, Row, Spinner } from "react-bootstrap"
import CardComp from "../../helpers/card/card";
const DATA_API = import.meta.env.VITE_REACT_APP_CLOTHES_API;

const ProductCardPart = (props) => {
  const [data, setData] = useState([])
  const [spiner, setSpiner] = useState(false)
  useEffect(() => {
    setSpiner(true)
    const getData = async () => {
      await fetch(`${DATA_API}/products/category/${props.item}`)
        .then((res) => res.json())
        .then((datas) => setData(datas))
      setSpiner(false)
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [],)


  return (
    <Container>
      <Row>
        {
          spiner
            ? <Spinner />
            : data.map((item, i) => (
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
/* eslint-disable react/no-unescaped-entities */
import { Container } from "react-bootstrap"
import ProductCardPart from "../../helpers/products-page/product-card"
import Spacer from "../common/Spacer"

const Electronics = () => {
  return (
    <Container>
      <Spacer />
      <h1>Electronics</h1>
      <Spacer />
      <ProductCardPart item="electronics" />
    </Container>
  )
}

export default Electronics
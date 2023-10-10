/* eslint-disable react/no-unescaped-entities */
import { Container } from "react-bootstrap"
import ProductCardPart from "../../helpers/products-page/product-card"
import Spacer from "../common/Spacer"

const Man = () => {
  return (
    <Container>
      <Spacer />
      <h1>Men's Clothing</h1>
      <Spacer />
      <ProductCardPart item="men's clothing" />
    </Container>
  )
}

export default Man
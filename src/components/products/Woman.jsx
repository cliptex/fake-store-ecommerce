/* eslint-disable react/no-unescaped-entities */
import { Container } from "react-bootstrap"
import ProductCardPart from "../../helpers/products-page/product-card"
import Spacer from "../common/spacer"

const Woman = () => {
  return (
    <Container>
      <Spacer />
      <h1>Women's Clothing</h1>
      <Spacer />
      <ProductCardPart item="women's clothing" />
    </Container>
  )
}

export default Woman
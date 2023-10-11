/* eslint-disable react/no-unescaped-entities */
import { Container } from "react-bootstrap"
import ProductCardPart from "../../helpers/products-page/product-card"
import Spacer from "../common/spacer"

const Jawlering = () => {
  return (
    <Container>
      <Spacer />
      <h1>Jawlering</h1>
      <Spacer />
      <ProductCardPart item="jewelery" />
    </Container>
  )
}

export default Jawlering
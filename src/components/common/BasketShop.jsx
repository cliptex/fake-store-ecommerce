import { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsHandbag } from 'react-icons/bs';
import BasketApi from '../context/basket';
import { Col, Container, Row } from 'react-bootstrap';
import DataApi from '../context/store';

function BasketShop() {
  const store = useContext(BasketApi);
  const data = useContext(DataApi);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  const groupItems = () => {
    const groupedItems = {};
    store.basket.forEach((item) => {
      const productId = item.newItem?.product;
      if (productId) {
        if (groupedItems[productId]) {
          groupedItems[productId].quantity += 1;
        } else {
          groupedItems[productId] = {
            title: data[productId - 1].title,
            price: data[productId - 1].price,
            quantity: 1,
          };
        }
      }
    });

    // Toplam fiyat hesapla
    let totalPrice = 0;
    Object.values(groupedItems).forEach((item) => {
      item.totalPrice = item.price * item.quantity;
      totalPrice += item.totalPrice;
    });

    return { groupedItems: Object.values(groupedItems), totalPrice };
  };

  const { groupedItems, totalPrice } = groupItems();

  return (
    <>
      <BsHandbag variant="primary" onClick={handleShow} />
      <Offcanvas show={show} onHide={handleShow}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            {store.basket.length === 0
              ? "Your Shopping Basket is Empty 🙁"
              : `Number of Items in the Shopping Basket: ${store.basket.length}`}
          </p>
          <Container>
            <Row className="row-cols-1">
              {groupedItems.map((groupedItem, i) => (
                <div key={i}>
                  <Col className='m-2'>
                    <b>Product:</b> {groupedItem.title} x{groupedItem.quantity}
                  </Col>
                  <Col className='mb-4 mx-2'>
                    <b>Price:</b> ${groupedItem.price * groupedItem.quantity}
                  </Col>
                </div>
              ))}
            </Row>
          </Container>
          <hr />
          <Container>
            <Row>
              <Col className='mb-4 mx-2'>
                <b>Total Price:</b> ${totalPrice.toFixed(2)}
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BasketShop;

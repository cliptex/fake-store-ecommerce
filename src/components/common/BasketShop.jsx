import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BsHandbag} from 'react-icons/bs'

function BasketShop() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show === true ? setShow(false) : setShow(true)
  };

  return (
    <>
      <BsHandbag variant="primary" onClick={handleShow}/>
      <Offcanvas show={show} onHide={handleShow}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          ITEMS
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BasketShop;
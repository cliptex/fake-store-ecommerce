import { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import DataApi from '../context/store';
import StarRating from '../../helpers/create-star/StarRing';
import './singlePageCard.scss'
import BasketApi from '../context/basket';
import toast from 'react-hot-toast';

function SinglePageCard(id) {
    const store = useContext(DataApi)
    const [el, setEl] = useState([])

    const basket = useContext(BasketApi)
    useEffect(() => {
        toast.success('Product added to the shopping basket')
    }, [basket.basket])
    
    useEffect(() => {
        const filtredItem = store.filter((item) => item.id == id.id)
        setEl(filtredItem)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, basket])
    
    const handleClick = (e) => {
      const newItem = {product: e.target.name}
      basket.setBasket((prev) => [...prev, newItem] );
    };

  return (
      <Container className='single-page-card'>
          <Row>
              <Col md={7}>
              <Image src={el[0]?.image} />
              </Col>
              <Col className='single-line d-none d-md-block' md={1}>
              </Col>
              <Col className="single-text-area my-5" md={4}>
                  <h2 className="text-center">{el[0]?.title}</h2>
                  <div className="d-flex ">
                  <h4 className='me-5'>$ {el[0]?.price} </h4>
                      <StarRating rate={el[0]?.rating.rate} />
                  </div>
                  <p>{el[0]?.description} </p>
                  <Button
                      onClick={handleClick}
                      name={el[0]?.id}
                  >Add to Basket</Button>
              </Col>
          </Row>
    </Container>
  );
}

export default SinglePageCard;
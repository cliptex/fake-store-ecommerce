import {  Col, Container,  Image,  Row } from "react-bootstrap"
import './discover.scss' 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Discover = () => {
    const [discoverr, setDiscoverr] = useState([]);

    useEffect(() => {
      const getDiscover = async () => { 
        await fetch(`${import.meta.env.VITE_REACT_APP_DISCOVER_API}/content`)
        .then((res) => res.json())
        .then((data) => setDiscoverr(data))
      }
      getDiscover()
    }, [])
  return (
      <Container className="discover">
          <h2 className="my-5 text-center">CATEGORIES</h2>
          <Row>
              {
                  discoverr.map((item,i) => (
                      <Col
                          key={i}
                          md={item.col}
                          className="mb-4"
                      >
                          <Link to={item.category}>
                          <Image
                              src={item.image}
                              className="img-fluid h-100"
                              />
                          </Link>
                          <Link to={item.category}>
                          <div className="texts">
                              <h5>{item.first}</h5>
                              <h5>{item.second}</h5>
                              <p>{item.third}</p>
                              </div>
                              </Link>
                      </Col>
                  ))
              }
          </Row>
    </Container>
  )
}

export default Discover
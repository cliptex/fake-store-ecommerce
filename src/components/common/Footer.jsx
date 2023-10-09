import { Col, Container, Row } from "react-bootstrap"
import { data } from "../../helpers/data/data"
import {BsFacebook,BsTwitter,BsYoutube,BsFillTelephoneFill} from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import './footer.scss'
import { useRef, useState } from "react"

const Footer = () => {

    const [text, setText] = useState(false)
    const description = useRef()
    const handleClick = () => { 
        setText(!text)
    }
    
    


    return (
      <footer>
      <Container fluid>
          <Row className="text-center ">
              <Col md={4}>
                  <a style={{fontSize:"1.7rem"}} href="/">{data.store.name}</a>
                  <p className="fs-4" ref={description}>{text ? data.store.desc : data.store.halfDesc}<a id="more" className="fs-4 custom-cursor" onClick={handleClick}> { text ? "Less More" : "Read More..."}</a> </p>
              </Col>
              <Col xs={5} md={4}>
                  <h4>Contact</h4>
                  <div id="contact">
                  <div><a href={`tel:${data.contact.tel}`}><BsFillTelephoneFill/>  {data.contact.tel}</a></div>
                  <div><a href={`mailto:${data.contact.email}`}><HiMail/> {data.contact.email}</a></div>
                  <iframe className="img-fluid" src={data.contact.address}  loading="lazy" > asd</iframe>
                  </div>
                  
              </Col>
              <Col xs={5} md={4} >
                  <h4>Follow US</h4>
                  <div id="brands">
                  <div><a href={data.brands.facebook} target="blank"><BsFacebook /></a></div>
                  <div><a href={data.brands.twitter} target="blank"><BsTwitter /></a></div>
                  <div><a href={data.brands.instagram} target="blank"><AiFillInstagram /></a></div>
                  <div><a href={data.brands.youtube} target="blank"><BsYoutube /></a></div>
                  </div>
                  
              </Col>
          </Row>
          <Row className="text-center">
              <Col>
              <h4>Design by Enes ALICI &copy;2023</h4>
              </Col>
          </Row>
            </Container>
            </footer>
  )
}

export default Footer
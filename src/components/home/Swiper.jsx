import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Button, Container, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import CardComp from '../../helpers/card/card';
const DATA_API = import.meta.env.VITE_REACT_APP_CLOTHES_API;

export const SwiperSlider = () => {

  const [data, setData] = useState([])
  const [spinner, setSpinner] = useState(false)
  const [cardWidth, setCardWidth] = useState("5.3")

    useEffect(() => {
      setSpinner(true)
        const getData = async () => {
            await fetch(`${DATA_API}/products`)
                .then((res) => res.json())
                .then((data) => setData(data))
                setSpinner(false)
        }
        getData()
    }, [])
  
    useEffect(() => {
      const handleResize = () => {
        setCardWidth(window.innerWidth);
      };
    
      window.addEventListener("resize", handleResize);
    
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [cardWidth]);
  
  return (
      <Container  className="text-center">
      <h3>Our Selections for You</h3>
      {
        spinner
          ? <Container className="text-center" fluid>
          <Spinner />
          </Container>
          :
          <Swiper
      spaceBetween={50}
            slidesPerView={
              (cardWidth < 768)
                ? 1.3
                : (cardWidth < 992)
                  ? 2.3
                  : (cardWidth < 1200)
                    ? 4.1
                    : 5.3}
            className='my-5'
      >
        {
          
          data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="swiper-item"
            >
              <CardComp {...item} />
            </SwiperSlide>
          ))
        }
          </Swiper>}
          <Button variant='outline-dark'>See All</Button>
    </Container>
  )
}

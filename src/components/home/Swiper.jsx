import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Button, Container, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import CardComp from '../../helpers/card/card';
const DATA_API = import.meta.env.VITE_REACT_APP_CLOTHES_API;

export const SwiperSlider = () => {

  const [data, setData] = useState([])
  const [spinner, setSpinner] = useState(false)

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
            slidesPerView={1}
            className='my-5'
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Button, Container, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import CardComp from '../../helpers/card/card';
import 'swiper/css/navigation';
const DATA_API = import.meta.env.VITE_REACT_APP_CLOTHES_API;
import { Navigation } from 'swiper/modules';
import { GrPrevious, GrNext } from 'react-icons/gr'
import './swiper.scss'


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
    <Container className="text-center">
      <h3>Our Selections for You</h3>
      {
        spinner
          ?
          <Container className="text-center" fluid>
          <Spinner />
          </Container>
          :
          <Container fluid className="swiper-inside">
            <GrPrevious className="prev arrow me-3" />
            <Swiper
              className='my-5'
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next'
          }} 
            breakpoints={{
              768: {
                slidesPerView: 2.1,
              },
              992: {
                slidesPerView: 3.1,
              },
              1200: {
                slidesPerView: 4.1,
              },
            }}
      >
        {
          
          data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="swiper-item"
            >
              <CardComp item = {item} />
            </SwiperSlide>
          ))
        }
            </Swiper>
            <GrNext className="next arrow ms-3"  />
            </Container>
          }
          <Button variant='outline-dark' className="w-50">See All</Button>
    </Container>
  )
}

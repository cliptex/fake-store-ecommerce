import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Button, Container } from 'react-bootstrap';
import {useContext } from 'react';
import CardComp from '../../helpers/card/card';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { GrPrevious, GrNext } from 'react-icons/gr'
import './swiper.scss'
import { Link } from 'react-router-dom';
import DataApi from '../context/store';


export const SwiperSlider = () => {
const store = useContext(DataApi)

    
    
  return (
    <Container className="text-center">
      <h3>Our Selections for You</h3>
      {
          <Container fluid className=" swiper-inside">
            <GrPrevious className="prev arrow me-3" />
            <Swiper
              className='my-5 swiper'
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next'
          }} 
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
      >
        {
          store.map((item) => (
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
          <Link to="/products"><Button variant='outline-dark' className="w-50">See All</Button></Link>
    </Container>
  )
}

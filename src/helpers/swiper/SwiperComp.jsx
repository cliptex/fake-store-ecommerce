/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Container} from 'react-bootstrap';
import { useContext,} from 'react';
import CardComp from '../../helpers/card/card';
import 'swiper/css/navigation';
import './swiper.scss';
import DataApi from '../../components/context/store';

export const SwiperComp = ({ type }) => {


  const store = useContext(DataApi)

          const newData = store.filter((item) => item.category.startsWith(type));

  return (
    <Container className="text-center">
      { 
        <Container fluid className="swiper-inside">
          <Swiper
            className="my-5"
            spaceBetween={50}
            slidesPerView={1}
            
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
            {newData.map((item) => (
              <SwiperSlide key={item.id} className="swiper-item">
                <CardComp item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      }
      
    </Container>
  );
};

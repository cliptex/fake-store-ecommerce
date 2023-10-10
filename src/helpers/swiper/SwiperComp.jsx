/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Button, Container, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import CardComp from '../../helpers/card/card';
import 'swiper/css/navigation';
import './swiper.scss';

export const SwiperComp = ({ type }) => {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setSpinner(true);
      await fetch(`${import.meta.env.VITE_REACT_APP_CLOTHES_API}/products`)
        .then((res) => res.json())
        .then((data) => {
          const newData = data.filter((item) => item.category.startsWith(type));
          setData(newData);
          setSpinner(false);
        });
    };
    getData();
  }, [type]);

  return (
    <Container className="text-center">
      {spinner ? (
        <Container className="text-center" fluid>
          <Spinner />
        </Container>
      ) : (
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
            {data.map((item) => (
              <SwiperSlide key={item.id} className="swiper-item">
                <CardComp {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      )}
      <Button variant="outline-dark" className="w-100">
        See All
      </Button>
    </Container>
  );
};

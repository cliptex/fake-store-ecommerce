import { useEffect, useState } from "react";
import { Carousel, Container, Image, Spinner } from "react-bootstrap";
import './carousel.scss'
import StarRating from "../../helpers/create-star/StarRing";


const DATA_API = import.meta.env.VITE_REACT_APP_CLOTHES_API;

const CarouselComp = () => {
  

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
    
    spinner
      ? <Container className="text-center">
      <Spinner />
      </Container>
      :
      <Carousel>
      {
              data
                  .filter((item) => (item.rating.rate >= 4 && item.category.includes("clothing") ))
                  .map((item) => (
                <Carousel.Item className="carouselItem" key={item.id}>
                      <Image
                          src={item.image}/>
                <Carousel.Caption className="carouselText">
                  <p>{item.title} </p>
                        {<StarRating rate={item.rating.rate} />}
                </Carousel.Caption>
              </Carousel.Item>
              ))
    }
        </Carousel>
  )
}

export default CarouselComp
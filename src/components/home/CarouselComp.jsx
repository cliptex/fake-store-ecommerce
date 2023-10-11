import { useContext } from "react";
import { Carousel, Image } from "react-bootstrap";
import './carousel.scss'
import StarRating from "../../helpers/create-star/StarRing";
import DataApi from "../context/store";
import { Link } from "react-router-dom";


const CarouselComp = () => {
  const store = useContext(DataApi)


  return (
    
      <Carousel className="carousel-comp">
      {
              store
                  .filter((item) => (item.rating.rate >= 4 && item.category.includes("clothing") ))
                  .map((item) => (
                    <Carousel.Item className="carouselItem" key={item.id}>
                      <Link to={"products"}>
                      <Image
                          src={item.image} />
                        </Link>
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
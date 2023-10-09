
import CarouselComp from "../../components/home/CarouselComp"
import Spacer from "../../components/common/spacer"
import FollowUs from "../../components/home/FollowUs"
import Discover from "../../components/home/discover"
import Sustainable from "../../components/home/Sustainable"
import { SwiperSlider } from "../../components/home/Swiper"

const HomePage = () => {
  return (
    <>
      <Spacer />
      <CarouselComp />
      <Spacer />
      <Discover />
      <Spacer />
      <FollowUs />
      <Spacer />
      <Spacer />
      <SwiperSlider />
      <Spacer />
      <Sustainable />
      <Spacer />
    </>
  )
}

export default HomePage
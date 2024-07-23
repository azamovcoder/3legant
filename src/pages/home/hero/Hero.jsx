import "./Hero.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Fragment } from "react";
import HeroImg from "../../../assets/home/hero.png";

const Hero = () => {
  return (
    <Fragment>
      <div className="hero container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="hero__img" src={HeroImg} alt="hero.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="hero__img" src={HeroImg} alt="hero.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="hero__img" src={HeroImg} alt="hero.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="hero__img" src={HeroImg} alt="hero.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="hero__img" src={HeroImg} alt="hero.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="hero__img" src={HeroImg} alt="hero.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default Hero;

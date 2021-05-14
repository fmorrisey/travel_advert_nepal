import React from "react";

// import Swiper core and required modules
import SwiperCore, { Navigation, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import Slide1Img from "../../assets/images/raimond-klavins-nepal.jpeg";
import Slide2Img from "../../assets/images/benjamin-grant-nepal.jpeg";
import Slide3Img from "../../assets/images/Iqx-azmi-nepal.jpeg";

import UnderLine from "../../assets/icons/underline.png";

import PlaceIcon from "../../assets/icons/ic_place.png";

import TitleImg from "../../assets/icons/nepal_title_alt.png";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper modules
SwiperCore.use([Navigation, EffectFade]);

export default function TravelSlides() {
  function NavBox(props) {
    return (
      <a className=" nav nav-box">
        <img className="icon-nav" src={PlaceIcon} />
        <h2 className="nav-title">Kathmandu</h2>
        <img className="nav-underline" src={UnderLine} />
        <text className="nav-description">The Royal City</text>
      </a>
    );
  }

  function NepalTitle() {
    return (
      <div className="slide-title">
        <img src={TitleImg} />
      </div>
    );
  }

  return (
    <>
      <NepalTitle />
      <NavBox />
      <Swiper
        effect="fade"
        className="slide-wrapper"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        //   pagination={{ clickable: false }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            className="slide-image"
            src={Slide1Img}
            alt="Stupa Bodhnath Kathmandu, Nepal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-image"
            src={Slide2Img}
            alt="Gazing upon Himalaya, Nepal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-image"
            src={Slide3Img}
            alt="Hike on the Road to Annapurna"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

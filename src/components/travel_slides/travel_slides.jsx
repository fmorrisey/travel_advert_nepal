import React, { useState } from "react";

// import Swiper core and required modules
import SwiperCore, { Navigation, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import Slide1Img from "../../assets/images/raimond-klavins-nepal.jpeg";
import Slide2Img from "../../assets/images/benjamin-grant-nepal.jpeg";
import Slide3Img from "../../assets/images/Iqx-azmi-nepal.jpeg";

import UnderLine from "../../assets/icons/underline.png";

import PlaceIcon from "../../assets/icons/ic_place.png";
import MountainIcon from "../../assets/icons/ic_terrain.png";
import HikingIcon from "../../assets/icons/ic_directions_walk.png";

import TitleImg from "../../assets/icons/nepal_title_alt.png";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper modules
SwiperCore.use([Navigation, EffectFade]);

export default function TravelSlides() {
  const [slideIndex, setSlideIndex] = useState(null);

  function SlideNav() {
    return (
      <div className="nav">
        <NavBox
          leftIcon={PlaceIcon}
          title="Kathmandu"
          tagline="The Royal Palace"
          activeSlide={0}
        />
        <NavBox
          leftIcon={MountainIcon}
          title="Mt. Everest"
          tagline="Peak of Heaven"
          activeSlide={1}
        />
        <NavBox
          leftIcon={HikingIcon}
          title="Annapurna"
          tagline="Sanctuary Trail"
          activeSlide={2}
        />
      </div>
    );
  }

  function NavBox(props) {
    console.log("here", slideIndex);
    return (
      <div
        className={
          slideIndex === props.activeSlide ? "nav-box__active" : "nav-box"
        }
      >
        <span>
          <img className="icon-nav" src={props.leftIcon} />
          <text className="nav-title">{props.title}</text>
        </span>
        <img className="nav-underline" src={UnderLine} />
        <span className="nav-description">{props.tagline}</span>
      </div>
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
      <Swiper
        effect="fade"
        className="slide-wrapper noselect"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        //   pagination={{ clickable: false }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(e) => setSlideIndex(e.realIndex)}
        onSlideChange={(e) => setSlideIndex(e.realIndex)}
        watchSlidesVisibility
        watchSlidesProgress
      >
        <SwiperSlide>
          <SlideNav />
          <img
            className="slide-image"
            src={Slide1Img}
            alt="Stupa Bodhnath Kathmandu, Nepal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideNav />
          <img
            className="slide-image"
            src={Slide2Img}
            alt="Gazing upon Himalaya, Nepal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideNav />
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

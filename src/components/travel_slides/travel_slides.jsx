import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

// import Swiper core and required modules
import SwiperCore, { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Assets Import
import TitleImg from "../../assets/icons/nepal_title_alt.png";

import Slide1Img from "../../assets/images/raimond-klavins-nepal.jpeg";
import Slide2Img from "../../assets/images/benjamin-grant-nepal.jpeg";
import Slide3Img from "../../assets/images/Iqx-azmi-nepal.jpeg";

import UnderLine from "../../assets/icons/underline.png";

import PlaceIcon from "../../assets/icons/ic_place.png";
import MountainIcon from "../../assets/icons/ic_terrain.png";
import HikingIcon from "../../assets/icons/ic_directions_walk.png";

import LeftArrow from "../../assets/icons/ic_arrow_left_24px.png";
import RightArrow from "../../assets/icons/ic_arrow_right_24px.png";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper modules
SwiperCore.use([Navigation, EffectFade]);

export default function TravelSlides() {
  const [slideIndex, setSlideIndex] = useState(null);

  function SlideNavButton() {
    return (
      <span
        className={
          slideIndex === 0 ? "nav-button nav-button__fix" : "nav-button"
        }
      >
        1 / {slideIndex + 1}
      </span>
    );
  }

  function SlideNavbar() {
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
      <div className="slide-explore-nepal">
        <img src={TitleImg} />
      </div>
    );
  }

  return (
    <>
      <NepalTitle />
      <SlideNavButton />
      <Swiper
        effect="fade"
        className="slide-wrapper noselect"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop
        //   pagination={{ clickable: false }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(e) => setSlideIndex(e.realIndex)}
        onSlideChange={(e) => setSlideIndex(e.realIndex)}
        slideTo
        watchSlidesVisibility
        watchSlidesProgress
      >
        <SwiperSlide>
          <SlideNavbar />
          <img
            className="slide-image"
            src={Slide1Img}
            alt="Stupa Bodhnath Kathmandu, Nepal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideNavbar />
          <img
            className="slide-image"
            src={Slide2Img}
            alt="Gazing upon Himalaya, Nepal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideNavbar />
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

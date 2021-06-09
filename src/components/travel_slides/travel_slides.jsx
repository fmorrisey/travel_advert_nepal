import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

// import Swiper core and required modules
import SwiperCore, { Navigation, EffectFade, Pagination } from "swiper";
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

import SearchIcon from "../../assets/icons/ic_search.png";

import LeftArrow from "../../assets/icons/ic_arrow_left_24px.png";
import RightArrow from "../../assets/icons/ic_arrow_right_24px.png";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper modules
SwiperCore.use([Navigation, EffectFade, Pagination]);

export default function TravelSlides() {
  const [slideIndex, setSlideIndex] = useState(0);

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
          key={"Kathmandu"}
        />
        <NavBox
          leftIcon={MountainIcon}
          title="Mt. Everest"
          tagline="Peak of Heaven"
          activeSlide={1}
          key={"Mt. Everest"}
        />
        <NavBox
          leftIcon={HikingIcon}
          title="Annapurna"
          tagline="Sanctuary Trail"
          activeSlide={2}
          key={"Annapurna"}
        />
      </div>
    );
  }

  function NavBox(props) {
    function clickedMe() {
      setSlideIndex(props.activeSlide);
    }
    return (
      <div
        onClick={clickedMe}
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

  function MenuBar(props) {
    return (
      <navbar className="menu menu-bar">
        <span className="search">
          <img src={SearchIcon} alt="search travel" />
          <input type="search" placeholder="Search"></input>
        </span>
      </navbar>
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
      <SlideNavbar />
      <Swiper
        effect="fade"
        className="slide-wrapper noselect"
        spaceBetween={0}
        slidesPerView={1}
        // slideToClickedSlide={true}
        navigation
        loop
        //   pagination={{ clickable: false }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(e) => setSlideIndex(e.realIndex)}
        onSlideChange={(e) => setSlideIndex(e.realIndex)}
        slideTo={slideIndex}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        observer={true}
        observeParents={true}
      >
        {/* SLIDE 1, i = 0 */}
        <SwiperSlide>
          {slideIndex === 0 ? (
            <img
              className="slide-image"
              src={Slide1Img}
              alt="Stupa Bodhnath Kathmandu, Nepal"
            />
          ) : (
            <></>
          )}
        </SwiperSlide>

        {/* SLIDE 2, i = 1 */}
        <SwiperSlide>
          {slideIndex === 1 ? (
            <img
              className="slide-image"
              src={Slide2Img}
              alt="Gazing upon Himalaya, Nepal"
            />
          ) : (
            <></>
          )}
        </SwiperSlide>

        {/* SLIDE 3, i = 2 */}
        <SwiperSlide>
          {slideIndex === 2 ? (
            <img
              className="slide-image"
              src={Slide3Img}
              alt="Hike on the Road to Annapurna"
            />
          ) : (
            <></>
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
}

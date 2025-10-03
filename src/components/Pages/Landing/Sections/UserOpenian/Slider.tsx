"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import UserOpenianCard from "./UserOpenianCard";
import RightButton02 from "@/components/Ui/SliderButtons/RightButton02";
import LeftButton02 from "@/components/Ui/SliderButtons/LeftButton02";

const Slider = () => {
  const swiperRef = useRef<{ swiper: SwiperClass }>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isEnd, setIsEnd] = useState(false);
  
  // update buttons and check status of thats
  const handleUpdateButtons = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsBeginning(swiperRef.current.swiper.isBeginning)
      setIsEnd(swiperRef.current.swiper.isEnd)
    }
  };
  
  // func for went next slide
  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // func for went prev slide
  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  
  // useEffect for manage slider 
  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      handleUpdateButtons();
      swiper.on('slideChange', handleUpdateButtons);
    }
    
    const handleResize = () => {
      const width = window.innerWidth;
       if (width < 900) {
         setSlidesPerView(1)
       } else if (width < 1200) { 
         setSlidesPerView(2)
       } else {
         setSlidesPerView(3)
       }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

   return () => {
      if (swiper) {
        swiper.off("slideChange", handleUpdateButtons);
      }
      window.removeEventListener('resize', handleResize)
    };
  }, [])

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={65}
        slidesPerView={slidesPerView}
        className="relative right-3"
        onSwiper={(swiper) => {
          if (swiperRef.current) {
            swiperRef.current.swiper = swiper;
            handleUpdateButtons();    
          }
        }}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <SwiperSlide key={i}>
            <UserOpenianCard />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-5 pt-10">
        <RightButton02 onClick={handlePrevSlide} disabled={isBeginning}/>
        <LeftButton02 onClick={handleNextSlide} disabled={isEnd}/>
      </div>
    </div>
  );
};

export default Slider;

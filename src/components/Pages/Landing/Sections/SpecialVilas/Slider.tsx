"use client";
import HouseCard from "@/components/Ui/HouseCard";
import { IHouse } from "@/core/types/IHouse";
import React, { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LeftButton from "@/components/Ui/SliderButtons/LeftButton";
import RightButton from "@/components/Ui/SliderButtons/RightButton";

interface IProps {
  filterData: IHouse[];
}

const Slider: FC<IProps> = ({ filterData }) => {
  const swiperRef = useRef<{ swiper: SwiperClass }>(null);
  const [slidesPerView, setSlidePerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 930) {
        setSlidePerView(1);
      } else if (width < 1350) {
        setSlidePerView(2); 
      } else {
        setSlidePerView(3); 
      }
    };
    handleResize()
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // for went to next slide
  const SlideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // for went to prev slide
  const SlidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative flex justify-center items-center">
      <RightButton onClick={SlidePrev} />
      <Swiper
        ref={swiperRef}
        spaceBetween={65}
        slidesPerView={slidesPerView}
        className="w-full h-[460px] flex relative right-1 bottom-2"
        // loop
      >
        {filterData.map((house) => (
          <SwiperSlide key={house.id}>
            <HouseCard
              id={house.id}
              HomeName={house.title}
              HomeAddress={house.address}
              HomePrice={house.price}
              HomeOffer={house.discounted_price}
              HomeImage={house.photos}
              HomeBathroomCount={house.bathrooms}
              HomeParkingCount={house.parking}
              HomeCapacityCount={house.capacity}
              HomeRoomCount={house.rooms}
              DetailAdress={'mortageAndRent'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <LeftButton onClick={SlideNext} />
    </div>
  );
};

export default Slider;
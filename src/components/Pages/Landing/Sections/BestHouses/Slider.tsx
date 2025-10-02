"use client";
import HouseCard from "@/components/Ui/HouseCard";
import { IHouse } from "@/core/types/IHouse";
import React, { FC, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import RightButton from "@/components/Ui/SliderButtons/RightButton";
import LeftButton from "@/components/Ui/SliderButtons/LeftButton";

interface IProps {
  filterData: IHouse[];
}

const Slider: FC<IProps> = ({ filterData }) => {
  const swiperRef = useRef<{ swiper: SwiperClass }>(null);
  
  // for went to next slide
  const handleNextSlide = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
         swiperRef.current.swiper.slideNext();
      }
  }
  
  // for went to prev slide
  const handlePrevSlide = () => {
     if (swiperRef.current && swiperRef.current.swiper) {
       swiperRef.current.swiper.slidePrev();
     }
  }

  return (
    <div className="relative">
      <RightButton onClick={handlePrevSlide}/>
      <Swiper 
        ref={swiperRef}
        spaceBetween={65} 
        slidesPerView={3} 
        className="flex relative right-1"
        // loop
      >
        {filterData.map((house) => (
          <SwiperSlide key={house.id}>
            <HouseCard 
              HomeName={house.title}
              HomeAddress={house.address}
              HomePrice={house.price}
              HomeOffer={house.discounted_price}
              HomeImage={house.photos}
              HomeBathroomCount={house.bathrooms}
              HomeParkingCount={house.parking}
              HomeCapacityCount={house.capacity}
              HomeRoomCount={house.rooms}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <LeftButton onClick={handleNextSlide}/>
    </div>
  );
};

export default Slider;

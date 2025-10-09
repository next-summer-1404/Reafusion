"use client";
import HouseCard from "@/components/Ui/HouseCard";
import React, { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import RightButton from "@/components/Ui/SliderButtons/RightButton";
import LeftButton from "@/components/Ui/SliderButtons/LeftButton";
import { IHouse } from "@/core/Types/IHouse";

interface IProps {
  filterData: IHouse[];
}

const Slider: FC<IProps> = ({ filterData }) => {
  const swiperRef = useRef<{ swiper: SwiperClass }>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 975) {
        setSlidesPerView(1);
      } else if (width < 1350) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  // for went to next slide
  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // for went to prev slide
  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative">
      <RightButton onClick={handlePrevSlide} />
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        className="flex relative right-1 bottom-1"
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
      <LeftButton onClick={handleNextSlide} />
    </div>
  );
};

export default Slider;

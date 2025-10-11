"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { Bath, BedSingle, Car, MapPin, Users } from "lucide-react";
import home from "../../../assets/images/HomeImgs/05.jpg";
import { IHouseCard } from "@/core/types/IHouseCard";
import FillButton from "../Buttons/FillButton";

const HouseCard: FC<IHouseCard> = ({
  HomeName,
  HomeAddress,
  HomePrice,
  HomeOffer,
  HomeImage,
  HomeBathroomCount,
  HomeCapacityCount,
  HomeParkingCount,
  HomeRoomCount,
}) => {
  const [isClick, setIsClick] = useState(false);

  // get percentage of discount houses
  const discountPercentage = HomeOffer
    ? Math.round(
        (Number(HomeOffer) - Number(HomePrice) / Number(HomeOffer)) * 100
      )
        .toFixed(0)
        .slice(0, 2)
    : 0;

  return (
    <div
      onClick={() => setIsClick(!isClick)}
      className={`border ${
        isClick ? "border-4 border-[#0d3b66]" : "border-[#DDDDDD]"
      } w-[431px] max-sm:w-[411px] min-h-[458px] rounded-[24px] overflow-hidden cursor-pointer transition-all`}
    >
      {/* house cover */}
      <div className="relative">
        <Image
          src={
            HomeImage && HomeImage[0] && HomeImage[0] !== ""
              ? HomeImage[0]
              : home
          }
          alt={HomeName}
          width={421}
          height={408}
          style={{ width: "431px", height: "240px", objectFit: "cover" }}
        />
        {HomeOffer && (
          <div className="size-12 bg-[#FF5555] absolute top-4 left-4 text-[16px] rounded-full flex justify-center items-center text-white">
            {discountPercentage}%-
          </div>
        )}
      </div>
      {/* house cover end */}
      {/* house contents */}
      <div className="px-7 py-3">
        <div className="py-3 border-b border-[#DDDDDD]">
          {/* house price */}
          <div className="flex gap-5">
            {HomeOffer && (
              <h3 className="text-[20px] text-[#777777] font-bold line-through">
                {HomeOffer}
                <span className="font-normal text-[16px] pr-1.5">تومان</span>
              </h3>
            )}
            <h3 className="text-[20px] text-[#1E2022] font-bold">
              {HomePrice}
              <span className="font-normal text-[#777777] text-[16px] pr-1.5">
                تومان
              </span>
            </h3>
          </div>
          {/* house price end */}
          {/* house name and location */}
          <h3 className="text-[20px] text-[#1E2022] text-right pt-3 font-bold">
            {HomeName}
          </h3>
          <div className="text-[#777777] text-[16px] flex gap-1.5 pt-3">
            <MapPin size={20} /> {HomeAddress}
          </div>
          {/* house name and location end */}
        </div>
        {/* the abilitys of house */}
        <div className="flex gap-4.5 py-3">
          <div className="text-[#777777] text-[16px] flex gap-1">
            <BedSingle size={20} /> {HomeRoomCount} خواب
          </div>
          <div className="text-[#777777] text-[16px] flex gap-1">
            <Bath size={20} /> {HomeBathroomCount} حمام
          </div>
          <div className="text-[#777777] text-[16px] flex gap-1">
            <Users size={20} /> {HomeCapacityCount} نفر
          </div>
          <div className="text-[#777777] text-[16px] flex gap-1">
            <Car size={20} /> {HomeParkingCount} پارکینگ
          </div>
        </div>
        {/* the abilitys of house */}
      </div>
      {isClick && (
        <div className="flex justify-center items-center mb-6">
          <FillButton className="p-2 px-10" ButtonText="بررسی و رزرو هتل" />
        </div>
      )}
      {/* house contents end */}
    </div>
  );
};

export default HouseCard;

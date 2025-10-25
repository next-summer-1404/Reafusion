"use client";
import Image from "next/image";
import React, { FC } from "react";
import { Bath, BedSingle, Car, MapPin, Users } from "lucide-react";
import home from "../../../assets/images/EmptyImages/House Card.png";
import FillButton from "../Buttons/FillButton";
import Link from "next/link";
import { IHouseCard } from "@/core/Types/IHouseCard";

const HouseCard: FC<IHouseCard> = ({ id, HomeName, HomeAddress, HomePrice,
  HomeOffer, HomeImage, HomeBathroomCount, HomeCapacityCount, DetailAdress,
  HomeParkingCount, HomeRoomCount, isQuickReservation, onReserveClick
}) => {
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
      className={`border border-borderColor dark:border-thidary dark:bg-white w-[431px] min-h-[458px] rounded-[24px] overflow-hidden transition-all`}
    >
      {/* house cover */}
      <Link href={`/${DetailAdress}/${id}`} className="relative cursor-pointer">
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
          <div className="size-12 bg-red absolute text-[16px] top-3 right-[365px]  rounded-full flex justify-center items-center text-whiteColor">
            {discountPercentage}%-
          </div>
        )}
      </Link>
      {/* house cover end */}
      {/* house contents */}
      <div className="px-7 py-3">
        <div className="py-3 border-b border-borderColor">
          {/* house price */}
          <div className="flex gap-5">
            {HomeOffer && (
              <h3 className="text-[20px] text-gray font-bold line-through">
                {HomeOffer}
                <span className="font-normal text-[16px] pr-1.5">تومان</span>
              </h3>
            )}
            <h3 className="text-[20px] text-dark font-bold">
              {HomePrice}
              <span className="font-normal text-gray text-[16px] pr-1.5">
                تومان
              </span>
            </h3>
          </div>
          {/* house price end */}
          {/* house name and location */}
          <h3 className="text-[20px] text-dark text-right pt-3 font-bold">
            {HomeName}
          </h3>
          <div className="text-gray text-[16px] flex gap-1.5 pt-3">
            <MapPin size={20} /> {HomeAddress}
          </div>
          {/* house name and location end */}
        </div>
        {/* the abilitys of house */}
        <div className="flex gap-4.5 py-3">
          <div className="text-gray text-[16px] flex gap-1">
            <BedSingle size={20} /> {HomeRoomCount} خواب
          </div>
          <div className="text-gray text-[16px] flex gap-1">
            <Bath size={20} /> {HomeBathroomCount} حمام
          </div>
          <div className="text-gray text-[16px] flex gap-1">
            <Users size={20} /> {HomeCapacityCount} نفر
          </div>
          <div className="text-gray text-[16px] flex gap-1">
            <Car size={20} /> {HomeParkingCount} پارکینگ
          </div>
        </div>
        {/* the abilitys of house */}
      </div>
      {isQuickReservation && (
        <div className="flex justify-center items-center mb-6">
          <FillButton className="p-2 px-10" ButtonText="بررسی و رزرو هتل" onClick={onReserveClick} />
        </div>
      )}
      {/* house contents end */}
    </div>
  );
};

export default HouseCard;
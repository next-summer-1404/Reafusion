"use client";

import React from "react";
import HouseCard from "@/components/Ui/HouseCard";
import { IHouse } from "@/core/Types/IHouse";

interface IHouseListGridProps {
  houses: IHouse[];
}

const HouseListGrid: React.FC<IHouseListGridProps> = ({ houses }) => {
  if (!houses || houses.length === 0) {
    return <div className="text-center">داده‌ای برای نمایش وجود ندارد.</div>;
  }

  return (
    <div className="flex flex-wrap gap-10">
      {houses.map((item) => (
        <HouseCard
          key={item.id}
          HomeName={item.title}
          HomeAddress={item.address}
          HomePrice={item.price}
          HomeOffer={item.discounted_price}
          HomeImage={item.photos}
          HomeBathroomCount={item.bathrooms}
          HomeParkingCount={item.parking}
          HomeCapacityCount={item.capacity}
          HomeRoomCount={item.rooms}
          customClass="!w-[31%]"
        />
      ))}
    </div>
  );
};

export default HouseListGrid;

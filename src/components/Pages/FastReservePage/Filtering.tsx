"use client";
import CustomInputSearch from "@/components/Ui/ReusableInputs/InputSearch";
import CustomSelectOption from "@/components/Ui/ReusableInputs/SelectOption";
import React, { FC, useEffect, useState } from "react";
import PriceRangeSlider from "./PriceRangeComponent";
import { useRouter, useSearchParams } from "next/navigation";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import HouseCard from "@/components/Ui/HouseCard";
import { IHouse } from "@/core/types/IHouse";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// Configure Leaflet default marker icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
interface IProps {
  ItemLength?: number;
  locations: {
    lat: number;
    lng: number;
  }[];
  houses: IHouse[];
}

const FilteringList: FC<IProps> = ({ ItemLength, locations, houses }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // state for get data from user and send to the api
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [transactionType, setTransactionType] = useState(searchParams.get("transactionType") || "");
  const [minPrice, setMinPrice] = useState(Number(searchParams.get("minPrice") || 1000000));
  const [maxPrice, setMaxPrice] = useState(Number(searchParams.get("maxPrice") || 200000000));
  const [selectedLocation, setSelectedLocation] = useState<{lat: number; lng: number;} | null>(null);
  // state for get data from user and send to the api end
  // func for send prices data to parents
  const handlePriceRangeChanged = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };
  // Callback for HouseCard button click
  const handleReserveClick = (location: { lat: number; lng: number }) => {
    setSelectedLocation(location);
  };
  // useEffect for send data to searchParams
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", search);
    params.set("transactionType", transactionType);
    params.set("minPrice", minPrice.toString());
    params.set("maxPrice", maxPrice.toString());
    router.push(`?${params.toString()}`);
  }, [search, router, searchParams, transactionType, minPrice, maxPrice]);
  // useEffect for send data to searchParams end
  // Use selectedLocation if provided, otherwise use first location or default
  const center: [number, number] = selectedLocation
    ? [selectedLocation.lat, selectedLocation.lng]
    : locations.length
      ? [locations[0].lat, locations[0].lng]
      : [35.6892, 51.389];
  // Show only selected location's marker if provided, otherwise show all
  const markers = selectedLocation
    ? [{ lat: selectedLocation.lat, lng: selectedLocation.lng }]
    : locations;

  return (
    <div className="pt-10">
      {/* the title and item count */}
      <div className="w-[810px] max-xl:w-full flex justify-between text-[#0D3B66] text-[20px]">
        <h2 className="text-[24px] text-[#1E2022] font-bold">فیلتر ها</h2>
        <span>{ItemLength} نتیجه</span>
      </div>
      {/* filtering form */}
      <div className="flex justify-between py-10 max-xl:block">
        <div className="border border-[#DDDDDD] space-y-7 w-[810px] max-xl:w-full max-xl:justify-around px-4 pt-6 max-md:pb-6 rounded-[24px] flex justify-between flex-wrap">
          <CustomInputSearch
            labelText="جستجو"
            placeholder="نام خانه مورد نظر ..."
            customClass="w-[378px]"
            value={search}
            setState={setSearch}
          />
          <CustomSelectOption
            labelText="مرتب سازی بر اساس"
            customClass="w-[378px]"
            value={transactionType}
            setState={setTransactionType}
            options={[
                { value: 'rental', label: 'خانه های اجاره ای ' },
                { value: 'mortgage', label: 'خانه های رهن' },
            ]}
          />
          <CustomSelectOption
            labelText="امکانات خانه"
            customClass="w-[378px]"
            options={[
                { value: 'rental', label: 'اجاره' },
                { value: 'mortgage', label: 'رهن' },
            ]}
          />
          <PriceRangeSlider 
             setPriceRange={handlePriceRangeChanged} 
             value01={1000000} 
             value02={200000000}
             priceRangeName={'رنج قیمت'}
          />
        </div>
        {/* the location map */}
        <div className="border border-[#DDDDDD] w-[575px] h-[280px] overflow-hidden max-xl:w-full max-xl:mt-6 rounded-[24px] flex justify-center items-center py-10">
          <MapContainer
            center={center}
            zoom={selectedLocation ? 20 : 4.5} // Zoom in for single location
            style={{ width: "100%", height: "150%" }} // Fixed height
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((loc, i) => (
              <Marker key={i} position={[loc.lat, loc.lng]}>
                <Popup>خانه شماره {i + 1}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      {/* list of the houses */}
      <div className="pt-2 flex justify-between flex-wrap space-y-10 max-lg:justify-around">
        {houses.map((house) => (
          <HouseCard
            key={house.id}
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
            DetailAdress={'FastReservePage'}
            isQuickReservation={true}
            onReserveClick={() => handleReserveClick(house.location)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteringList;
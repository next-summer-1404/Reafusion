import HouseCard from '@/components/Ui/HouseCard';
import { getHousesByFilter } from '@/core/Apis/GetHousesByFilter'
import { IApiResponse } from '@/core/Types/IApiResForGetHouses';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react'

const HouseListGrid = async () => {

  const response = await getHousesByFilter() as AxiosResponse<IApiResponse>;

  const { houses } = response.data;

  return (
    <div className='flex flex-col gap-10'>

      {/* house list */}
      <div className='bg-red-700'>
        {
          houses.map((item) => (
            <HouseCard
              HomeName={item.title}
              HomeAddress={item.address}
              HomePrice={item.price}
              HomeOffer={item.discounted_price}
              HomeImage={item.photos}
              HomeBathroomCount={item.bathrooms}
              HomeParkingCount={item.parking}
              HomeCapacityCount={item.capacity}
              HomeRoomCount={item.rooms}
            />
          ))
        }
      </div>
      {/* house list end */}

    </div>
  )
}

export default HouseListGrid
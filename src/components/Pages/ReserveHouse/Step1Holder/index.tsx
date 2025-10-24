'use client'
import React, { useEffect, useState } from 'react'
import HouseCard from '../ReservedHouseCard'
import CustomerInfoCard from '../CustomerInfoCard'
import SendOthersTicket from '../SendOthersTicket'
import FillButton from '@/components/Ui/Buttons/FillButton';
import { GetHouseDetail } from '@/core/Apis/GetHouseDetail'
import { IHouse } from '@/core/types/IHouse'
import Link from 'next/link'

const Step1Holder = () => {
  const [houseData, setHosueData] = useState<IHouse>();
  const arrivalDate = sessionStorage.getItem('arrivalDate');
  const departureDate = sessionStorage.getItem('departureDate');
  sessionStorage.setItem('price', houseData?.price as string)

  useEffect(() => {
    const id = sessionStorage.getItem('houseId') as string;
    const getHouseInfo = async () => {
      const response = await GetHouseDetail(id);
      setHosueData(response.data)
    }
    getHouseInfo()
  }, [])


  return (
    <div className='flex flex-col gap-8 mt-10 py-8 px-4 bg-lightGray rounded-3xl'>
      <HouseCard 
        houseImage={houseData?.photos[0] as string}
        houseName={houseData?.title as string}
        arrivalDate={arrivalDate as string}
        departureDate={departureDate as string}
        houseAddress={houseData?.address as string}
        housePrice={houseData?.price as string}
        houseOffer={houseData?.discounted_price as string}
      />
      <CustomerInfoCard />
      <SendOthersTicket />

      {/* final price */}
      <div className='flex gap-2 items-center'>
        <h5 className='text-dark md:text-2xl font-bold max-md:text-xl'>قیمت کل :</h5>
        <span className='text-primary text-[32px] max-sm:text-[28px] font-bold'>{houseData?.price}</span>
        <span className='text-primary text-xl'>تومان</span>
      </div>
      {/* final price end */}

      {/* submit button */}
      <Link href={'/reserveHouse/step2'} className='flex justify-end w-full'>
        <FillButton className='py-4 px-5 !rounded-2xl' ButtonText='تایید و ادامه فرایند' />
      </Link>
      {/* submit button end */}
    </div>
  )
}

export default Step1Holder
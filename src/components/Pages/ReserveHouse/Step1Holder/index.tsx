import React from 'react'
import HouseCard from '../ReservedHouseCard'
import CustomerInfoCard from '../CustomerInfoCard'
import SendOthersTicket from '../SendOthersTicket'
import FillButton from '@/components/Ui/Buttons/FillButton';

const Step1Holder = () => {
  return (
    <div className='flex flex-col gap-8 mt-10 py-8 px-4 bg-lightGray rounded-3xl'>
      <HouseCard />
      <CustomerInfoCard />
      <SendOthersTicket />

      {/* final price */}
      <div className='flex gap-2 items-center'>
        <h5 className='text-dark md:text-2xl font-bold max-md:text-xl'>قیمت کل :</h5>
        <span className='text-primary text-[32px] max-sm:text-[28px] font-bold'>2,500,000</span>
        <span className='text-primary text-xl'>تومان</span>
      </div>

      {/* final price end */}

      {/* submit button */}
      <div className='flex justify-end w-full'>
        <FillButton className='py-4 px-5 !rounded-2xl' ButtonText='تایید و ادامه فرایند' />
      </div>
      {/* submit button end */}
    </div>
  )
}

export default Step1Holder
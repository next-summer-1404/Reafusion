import { ArrowUpLeft } from 'lucide-react'
import React, { ComponentType, FC } from 'react'

interface IProps {
  Icon: ComponentType;
  label: string;
  value: string | number;
  moneyName?: string;
};

const StatusCard: FC<IProps> = ({ Icon, label, value, moneyName }) => {
  return (
    <div className='bg-whiteColor dark:bg-background h-[87px] w-[23.6%] max-xl:w-[31.6%] max-lg:w-[31.7%] max-md:w-[48.5%] max-sm:w-full rounded-[24px] px-4 py-4.5 flex gap-3'>
      <div className='size-[48px] bg-lightPrimary dark:bg-primary dark:text-lightPrimary text-primary rounded-[8px] flex justify-center items-center'>
        <Icon />
      </div>
      <div className='w-[75%] max-sm:w-full'>
        <div className='text-[16px] text-dark dark:text-whiteColor flex justify-between items-center'>
          <h4 className='w-[90%] truncate'>{label}</h4>
           <ArrowUpLeft size={18} />
        </div>
        <h3 className='text-[24px] text-dark dark:text-whiteColor font-bold'>{value} <span className='text-gray text-[14px]'>{moneyName || ''}</span></h3>
      </div>
    </div>
  )
}

export default StatusCard
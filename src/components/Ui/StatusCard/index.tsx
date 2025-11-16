import { ArrowUpLeft } from 'lucide-react'
import React, { ComponentType, FC } from 'react'

interface IProps {
    Icon: ComponentType;
    label: string;
    value: number;
    moneyName?: string;
};

const StatusCard: FC<IProps> = ({ Icon, label, value, moneyName }) => {
  return (
    <div className='bg-whiteColor h-[87px] w-[245px] rounded-[24px] px-4 py-4.5 flex gap-3'>
       <div className='size-[48px] bg-lightPrimary text-primary rounded-[8px] flex justify-center items-center'>
            <Icon />
       </div>
       <div className='w-[75%]'>
           <div className='text-[16px] text-dark flex justify-between items-center'>
               <h4>{label}</h4> <ArrowUpLeft size={18}/>
           </div>
           <h3 className='text-[24px] text-dark font-bold'>{value} <span className='text-gray text-[14px]'>{moneyName || ''}</span></h3>
       </div>
    </div>
  )
}

export default StatusCard
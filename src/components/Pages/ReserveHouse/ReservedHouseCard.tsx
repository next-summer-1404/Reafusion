import React, { FC } from 'react'
import Image from 'next/image';
import EmptyhouseImage from '../../../assets/images/HomeImgs/01.png';
import { CalendarClock, MapPin } from 'lucide-react';
import IconButton from '@/components/Ui/IconButton';

interface IProps {
   houseImage: string;
   houseName: string;
   arrivalDate: string;
   departureDate: string;
   houseAddress: string;
   housePrice: string;
   houseOffer: string;
}

const HouseCard: FC<IProps> = ({ houseImage, houseName, arrivalDate, departureDate, houseAddress, 
                housePrice, houseOffer 
}) => {
   const discountPercentage = houseOffer
    ? Math.round(
        (Number(houseOffer) - Number(housePrice) / Number(houseOffer)) * 100
      )
        .toFixed(0)
        .slice(0, 2)
   : 0; 

    return (
        <div className='flex justify-between p-4 rounded-3xl border border-borderColor bg-whiteColor box-border h-[190px]'>
            {/* detail */}
            <div className='flex gap-6'>
                <Image
                    className='rounded-lg'
                    src={houseImage ? houseImage : EmptyhouseImage}
                    alt={'houseName'}
                    width={250}
                    height={158}
                />
                <ul className='flex flex-col gap-4'>
                    {/* house name */}
                    <li className='text-xl text-dark font-bold'>{houseName}</li>
                    {/* house name end */}
                    {/* start date */}
                    <li className='flex gap-2'>
                        <span className='flex gap-1 items-center text-gray'>
                            <CalendarClock size={16} />
                            تاریخ ورود :
                        </span>
                        <span className='text-dark'>{arrivalDate}</span>
                    </li>
                    {/* start date end */}
                    {/* end date */}
                    <li className='flex gap-2'>
                        <span className='flex gap-1 items-center text-gray'>
                            <CalendarClock size={16} />
                            تاریخ خروج :
                        </span>
                        <span className='text-dark'>{departureDate}</span>
                    </li>
                    {/* end date end */}
                    {/* address */}
                    <li className='flex gap-2'>
                        <span className='flex gap-1 items-center text-gray'>
                            <MapPin size={16} />
                            آدرس :
                        </span>
                        <span className='text-dark'>{houseAddress}</span>
                    </li>
                    {/* address end */}
                </ul>
            </div>
            {/* detail end */}
            {/* price */}
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-2'>
                   {houseOffer && (
                    <div className='flex gap-2 items-center justify-end'>
                        <span className='text-gray text-xl font-bold line-through'>{houseOffer}</span>
                        <span className='text-sm text-gray'>تومان</span>
                        <span className='text-sm py-1 px-2 rounded-2xl bg-red text-center text-whiteColor'>%{discountPercentage}</span>
                    </div>
                    )}
                    <div className='flex gap-2 items-center justify-end'>
                        <span className='text-dark text-2xl font-bold'>{housePrice}</span>
                        <span className='text-dark'>تومان</span>
                    </div>
                </div>
                <div className='flex justify-end'><IconButton title='تغییر هتل' iconName={'building'} /></div>
            </div>
            {/* price end */}
        </div>
    )
}

export default HouseCard
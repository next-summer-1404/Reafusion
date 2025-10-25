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
        <div className='flex max-md:flex-col h-[190px] max-md:h-fit
         justify-between p-4 rounded-3xl border border-borderColor
          bg-whiteColor dark:bg-dark box-border max-lg:gap-4 max-lg:flex-wrap max-lg:h-fit'>
            {/* detail */}
            <div className='flex max-md:w-full max-md:flex-col max-lg:gap-4 gap-6'>
                <Image
                    className='rounded-lg max-lg:w-[40%] max-md:!w-full max-md:h-[240px] max-lg:h-[158px]'
                    src={houseImage ? houseImage : EmptyhouseImage}
                    alt={'houseName'}
                    width={250}
                    height={158}
                />
                <ul className='flex flex-col gap-4 max-xl:w-[60%] max-md:[240px] max-lg:h-[158px]'>
                    {/* house name */}
                    <li className='text-xl text-dark font-bold dark:text-White'>{houseName}</li>
                    {/* house name end */}
                    {/* start date */}
                    <li className='flex max-sm:flex-col gap-2'>
                        <span className='flex gap-1 items-center text-gray dark:text-White'>
                            <CalendarClock size={16} />
                            تاریخ ورود :
                        </span>
                        <span className='text-dark max-sm:w-full dark:text-thidary'>{arrivalDate}</span>
                    </li>
                    {/* start date end */}
                    {/* end date */}
                    <li className='flex max-sm:flex-col gap-2'>
                        <span className='flex gap-1 items-center text-gray dark:text-White'>
                            <CalendarClock size={16} />
                            تاریخ خروج :
                        </span>
                        <span className='text-dark max-sm:w-full dark:text-thidary'>{departureDate}</span>
                    </li>
                    {/* end date end */}
                    {/* address */}
                    <li className='flex max-sm:flex-col gap-2'>
                        <span className='flex gap-1 items-center text-gray dark:text-White'>
                            <MapPin size={16} />
                            آدرس :
                        </span>
                        <span className='text-dark dark:text-thidary truncate max-lg:w-[80%] max-sm:w-full'>{houseAddress}</span>
                    </li>
                    {/* address end */}
                </ul>
            </div>
            {/* detail end */}
            {/* price */}
            <div className='flex flex-col max-lg:w-full max-lg:gap-4 justify-between'>
                <div className='flex flex-col max-lg:flex-row max-lg:justify-between gap-2 max-sm:flex-col'>
                   {houseOffer && (
                    <div className='flex gap-2 items-center justify-end'>
                        <span className='text-gray text-xl font-bold line-through'>{houseOffer}</span>
                        <span className='text-sm text-gray'>تومان</span>
                        <span className='text-sm py-1 px-2 rounded-2xl bg-red text-center text-whiteColor'>%{discountPercentage}</span>
                    </div>
                    )}
                    <div className='flex gap-2 items-center justify-end'>
                        <span className='text-dark text-2xl font-bold dark:text-White'>{housePrice}</span>
                        <span className='text-dark dark:text-White'>تومان</span>
                    </div>
                </div>
                <div className='flex justify-end'><IconButton customClass='max-lg:w-full justify-center mt-3' title='تغییر هتل' iconName={'building'} /></div>
            </div>
            {/* price end */}
        </div>
    )
}

export default HouseCard
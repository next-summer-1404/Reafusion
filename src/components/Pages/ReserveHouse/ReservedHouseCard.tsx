import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import houseImage from '../../../assets/images/HomeImgs/01.png';
import { CalendarClock, MapPin } from 'lucide-react';
import IconButton from '@/components/Ui/IconButton';

const HouseCard = () => {
    return (
        <div className='flex max-md:flex-col h-[190px] max-md:h-fit
         justify-between p-4 rounded-3xl border border-borderColor
          bg-whiteColor box-border max-lg:gap-4 max-lg:flex-wrap max-lg:h-fit'>
            {/* detail */}
            <div className='flex max-md:w-full max-md:flex-col max-lg:gap-4 gap-6'>
                <Image
                    className='rounded-lg max-lg:w-[40%] max-md:!w-full max-md:h-[240px] max-lg:h-[158px]'
                    src={houseImage}
                    alt={'houseName'}
                    width={250}
                    height={158}
                />

                <ul className='flex flex-col gap-4 max-xl:w-[60%] max-lg:w-[60%]'>
                    {/* house name */}
                    <li className='text-xl text-dark font-bold'>هتل همایون فر کیش ایران</li>
                    {/* house name end */}
                    {/* start date */}
                    <li className='flex max-sm:flex-col gap-2'>
                        <span className='flex gap-1 items-center text-gray'>
                            <CalendarClock size={16} />
                            تاریخ ورود :
                        </span>
                        <span className='text-dark'>12 شهریور 1404 - ساعت 12:30</span>
                    </li>
                    {/* start date end */}
                    {/* end date */}
                    <li className='flex max-sm:flex-col gap-2'>
                        <span className='flex gap-1 items-center text-gray'>
                            <CalendarClock size={16} />
                            تاریخ خروج :
                        </span>
                        <span className='text-dark'>1 مهر 1404 - ساعت 06:30</span>
                    </li>
                    {/* end date end */}
                    {/* address */}
                    <li className='flex max-sm:flex-col gap-2'>
                        <span className='flex gap-1 items-center text-gray'>
                            <MapPin size={16} />
                            آدرس :
                        </span>
                        <span className='text-dark truncate max-xl:w-[80%] max-sm:w-full'>گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیم گیلان ، رشت ، میدان آزادی ، جنب چهار راه</span>
                    </li>
                    {/* address end */}
                </ul>
            </div>
            {/* detail end */}

            {/* price */}
            <div className='flex flex-col max-lg:w-full max-lg:gap-4 justify-between'>
                <div className='flex flex-col max-lg:flex-row max-lg:justify-between gap-2'>
                    <div className='flex gap-2 items-center justify-end'>
                        <span className='text-gray text-xl font-bold line-through'>200,000</span>
                        <span className='text-sm text-gray'>تومان</span>
                        <span className='text-sm py-1 px-2 rounded-2xl bg-red text-center text-whiteColor'>%50</span>
                    </div>

                    <div className='flex gap-2 items-center justify-end'>
                        <span className='text-dark text-2xl font-bold'>200,000</span>
                        <span className='text-dark'>تومان</span>
                    </div>
                </div>

                <div className='flex justify-end'>
                    <IconButton customClass='max-lg:!w-full justify-center' title='تغییر هتل' iconName={'building'} />
                </div>
            </div>
            {/* price end */}
        </div>
    )
}

export default HouseCard
'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import EmptyuserImg from '../../../../assets/images/UnKnownUserImg/UnKnownUser.jpg'
import { Banknote, BanknoteArrowUp, CalendarDays, Clock, MessageCircleMore } from 'lucide-react'
import FillButton from '../../Buttons/FillButton'

const Mortagehouse = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formattedDate = currentDateTime.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentDateTime.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className='border border-borderColor rounded-[24px] w-[388px] h-[500] py-4 px-5 space-y-5'>
      <div className='flex justify-center items-center'>
        <Image src={EmptyuserImg} alt='selerImg' width={120} height={120} className='rounded-full overflow-hidden' />
      </div>
      <h3 className='text-center text-dark text-[20px]'>پویا اژکان</h3>
      <div className='flex justify-between'>
        <h3 className='text-primary text-[16px] flex gap-2'><Banknote /> قیمت رهن از  :</h3>
        <h3 className='text-dark text-[20px] font-bold'>20,000,000 تومان</h3>
      </div>
      <div className='flex justify-between'>
        <h3 className='text-primary text-[16px] flex gap-2'><BanknoteArrowUp /> قیمت اجاره از  :</h3>
        <h3 className='text-dark text-[20px] font-bold'>15,000,000 تومان</h3>
      </div>
      <FillButton ButtonText='تماس با 353****0939' className='w-full p-3' />
      <button className='border border-secondary text-secondary w-full p-3 rounded-[40px] flex justify-center items-center gap-2 text-[16px] cursor-pointer'><MessageCircleMore size={23} /> گفت و گو با فروشنده</button>
      <div className='flex justify-between text-gray text-[14px]'>
        <p className='flex gap-2'><CalendarDays size={17} /> {formattedDate}</p>
        <p className='flex gap-2'><Clock size={17} /> {formattedTime} </p>
      </div>
    </div>
  )
}

export default Mortagehouse
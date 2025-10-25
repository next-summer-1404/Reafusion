import React from 'react'
import MainReafusionLogo from '../../../assets/images/ReafusionLogo/MainReafusionLogo.jpg'
import Img01 from '../../../assets/images/FooterImg/FooterImg01.svg'
import Img02 from '../../../assets/images/FooterImg/FooterImg02.svg'
import Img03 from '../../../assets/images/FooterImg/FooterImg03.svg'
import Image from 'next/image'
import { Instagram, Linkedin, Send } from 'lucide-react'
import Container from '../Container/Container'
const Footer = () => {
   return (
      <Container className='mx-10 max-xl:mx-7 mb-8 mt-8 min-h-[435px] rounded-[24px] bg-primary'>
         <div className='min-h-[275px] border-b border-White pt-9 flex justify-between max-xl:block'>
            <div className='space-y-7'>
               <div className='flex gap-5 text-[40px] text-secondary font-bold max-xl:justify-center'>
                  <Image src={MainReafusionLogo} alt='logo' width={65} height={55} className='rounded-full'/>
                  ریفیوژن
               </div>
               <p className='w-[500px] max-xl:w-full text-White text-[16px]'>ما همراه شما هستیم در مسیر اجاره، خرید و فروش ویلا؛ تا با اطمینان و آرامش، تجربه‌ای دلنشین از انتخاب اقامتگاه یا سرمایه‌گذاری به‌یادماندنی داشته باشید.</p>
               <div className='flex gap-5 max-xl:justify-between max-xl:px-12'>
                  <Send className='text-White cursor-pointer' />
                  <Instagram className='text-White cursor-pointer' />
                  <Linkedin className='text-White cursor-pointer' />
               </div>
            </div>
            <div className='flex justify-around max-xl:flex-wrap gap-11 max-xl:px-10 py-10'>
               <ul className='space-y-3'>
                  <li className='text-[20px] font-bold text-secondary indent-[-25px]'>نحوه رزرو اقامتگاه</li>
                  <li className='text-[16px] text-White indent-2 list-disc '>راهنمای رزرو اقامتگاه</li>
                  <li className='text-[16px] text-White indent-2 list-disc '>شیوه پرداخت</li>
                  <li className='text-[16px] text-White indent-2 list-disc '>لغو رزرو اقامتگاه</li>
               </ul>
               <ul className='space-y-3'>
                  <li className='text-[20px] font-bold text-secondary indent-[-25px]'>خدمات مشتریان</li>
                  <li className='text-[16px] text-White indent-2 list-disc'>پرسش های متداول مهمان</li>
                  <li className='text-[16px] text-White indent-2 list-disc'>پرسش های متداول میزبان</li>
                  <li className='text-[16px] text-White indent-2 list-disc'>چطور اقامتگاه ثبت کنم ؟</li>
                  <li className='text-[16px] text-White indent-2 list-disc'>حریم شخصی کاربران</li>
               </ul>
               <ul className='space-y-3'>
                  <li className='text-[20px] font-bold text-secondary'>راه ارتباطی با ما</li>
                  <li className='text-[16px] text-White indent-2'>09911279296 - 09393800353</li>
                  <li className='text-[16px] text-White indent-2'>codpoya.azhkan@gmail.com</li>
                  <li className='text-[16px] text-White indent-2'>مازندران , ساری , آکادمی سپهر</li>
               </ul>
            </div>
         </div>
         <div className='flex justify-between max-sm:block max-sm:space-y-8 items-center py-9'>
            <p className='text-White text-[16px] max-sm:text-[14px]'>تمام حقوق مادی و معنوی این اثر برای برند شما محفوظ است .</p>
            <div className='flex gap-4 max-sm:justify-center'>
               <div className='size-12 rounded-[16px] bg-White flex justify-center items-center'>
                  <Image src={Img01} alt='01' width={29} height={32} />
               </div>
               <div className='size-12 rounded-[16px] bg-White  flex justify-center items-center'>
                  <Image src={Img02} alt='01' width={34} height={32} />
               </div>
               <div className='size-12 rounded-[16px] bg-White flex justify-center items-center'>
                  <Image src={Img03} alt='01' width={32} height={35} />
               </div>
            </div>
         </div>
      </Container>
   )
}

export default Footer
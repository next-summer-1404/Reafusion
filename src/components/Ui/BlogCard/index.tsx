import Image from 'next/image'
import BlogCardImg from '../../../assets/images/EmptyImages/BlogCard.png'
import React, { FC } from 'react'

interface IProps {
  title: string;
  caption: string;
  estimatedReadingTime: number;
}

const BlogCard: FC<IProps> = ({ title, caption, estimatedReadingTime }) => {
  return (
    <div className='border border-borderColor dark:border-thidary text-dark rounded-[15px] overflow-hidden w-[300px] max-md:w-[400px]'>
      <div className='w-full h-[170px] relative'>
        <Image 
          src={BlogCardImg} 
          alt='blogImage' 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className='px-4 py-4 space-y-3'>
        <h3 className='text-[24px] font-bold text-primary dark:text-thidary'>{title}</h3>
        <p className='text-[16px] text-gray dark:text-white text-wrap text-justify min-h-[70px]'>{caption}</p>
      </div>
      <div className='px-4 pb-4 dark:text-white'>
          <h3>زمان خواندن این مقاله : <strong className='text-primary dark:text-thidary'>{estimatedReadingTime}</strong> ثانیه</h3>
      </div>
    </div>
  )
}

export default BlogCard
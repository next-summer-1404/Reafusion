import React, { FC, ReactNode } from 'react';
import backgroundImg from '../../assets/images/AuthPagesImg/AuthBg.jpg';
import user1 from '../../assets/images/AuthPagesImg/User1.webp';
import user2 from '../../assets/images/AuthPagesImg/User2.avif';
import Image from 'next/image';

interface IChildren {
    children: ReactNode;
}

const AuthLayout: FC<IChildren> = ({ children }) => {
    return (
        <div className='w-full h-screen bg-pageBg dark:bg-primary xl:p-12 lg:p-5 max-lg:p-5 max-sm:px-3'>
            <div className='flex justify-between h-full xl:gap-12 max-xl:gap-12 lg:gap-5 max-lg:gap-5'>
                {/* form */}
                <div className='h-full bg-white dark:bg-dark md:w-[50%] max-md:w-full rounded-[40px]'
                    style={{ boxShadow: '2px 4px 8px 0px rgba(0, 0, 0, 0.15)' }}>
                    {children}
                </div>
                {/* form end */}

                {/* left side */}
                <div className='flex p-6 justify-center items-end w-[50%] rounded-[40px] bg-cover bg-center max-md:hidden'
                    style={{ backgroundImage: `url(${backgroundImg.src})`, boxShadow: '2px 4px 8px 0px rgba(0, 0, 0, 0.15)' }}>
                    <div className='flex xl:flex-row md:flex-col max-md:flex-col
                     gap-6 w-full items-center bg-black/60 rounded-[40px] p-8

                     '>
                        {/* users image list */}
                        <div className='flex w-36'>
                            <Image className='relative rounded-full !w-12 !h-12 border border-lightGray box-border' src={user1} alt='' width={48} height={48} />
                            <Image className='relative left-4 rounded-full !w-12 !h-12 border border-lightGray box-border' src={user2} alt='' width={48} height={48} />
                            <Image className='relative left-8  rounded-full !w-12 !h-12 border border-lightGray box-border' src={user1} alt='' width={48} height={48} />
                            <Image className='relative left-12 rounded-full !w-12 !h-12 border border-lightGray box-border' src={user2} alt='' width={48} height={48} />
                        </div>
                        {/* users image list end */}

                        {/* join us */}
                        <div className='text-whiteColor flex flex-col gap-2'>
                            <h2>همین حالا به ما بپیوند!</h2>
                            <p className='text-sm'> همراه هزاران کاربر دیگر از خدمات ما استفاده کنید.</p>
                        </div>
                        {/* join us end */}
                    </div>
                </div>
                {/* left side end */}
            </div>
        </div>
    );
};

export default AuthLayout;
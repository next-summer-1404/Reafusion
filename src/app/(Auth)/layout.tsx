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
        <div className='w-full h-screen bg-[#F3F4F6] p-12'>
            <div className='flex justify-between h-full gap-12'>
                {/* form */}
                <div className='bg-white w-[50%] rounded-[40px]'
                    style={{ boxShadow: '2px 4px 8px 0px rgba(0, 0, 0, 0.15)' }}>
                    {children}
                </div>
                {/* form end */}

                {/* left side */}
                <div className='flex p-6 justify-center items-end w-[50%] rounded-[40px] bg-cover bg-center'
                    style={{ backgroundImage: `url(${backgroundImg.src})`, boxShadow: '2px 4px 8px 0px rgba(0, 0, 0, 0.15)' }}>
                    <div className='flex gap-6 w-full items-center bg-black/60 rounded-[40px] p-8'>
                        {/* users image list */}
                        <div className='flex w-36'>
                            <Image className='relative rounded-full !w-12 !h-12 border border-[#F5F5F5] box-border' src={user1} alt='' width={48} height={48} />
                            <Image className='relative left-4 rounded-full !w-12 !h-12 border border-[#F5F5F5] box-border' src={user2} alt='' width={48} height={48} />
                            <Image className='relative left-8  rounded-full !w-12 !h-12 border border-[#F5F5F5] box-border' src={user1} alt='' width={48} height={48} />
                            <Image className='relative left-12 rounded-full !w-12 !h-12 border border-[#F5F5F5] box-border' src={user2} alt='' width={48} height={48} />
                        </div>
                        {/* users image list end */}

                        {/* join us */}
                        <div className='text-white flex flex-col gap-2'>
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
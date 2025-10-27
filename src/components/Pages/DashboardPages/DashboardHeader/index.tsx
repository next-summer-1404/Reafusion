import React from 'react'
import IconButton from '@/components/Ui/IconButton';
import Image from 'next/image';
import userImage from '@/assets/images/UnKnownUserImg/UnKnownUser.jpg';
import Link from 'next/link';
import { House } from 'lucide-react';

const DashboardHeader = () => {
    return (
        <div className='flex justify-between items-center px-4 py-2 bg-lightGray border border-borderColor rounded-3xl'>
            {/* user info */}
            <div className='flex gap-4 items-center'>
                <Image className='rounded-full size-10' alt='' src={userImage} width={40} height={40} />
                {/* user detail */}
                <div>
                    {/* name and role */}
                    <div className='flex gap-1 items-center'>
                        <span className='text-xl'>متین قربانزاده</span>
                        <span className='text-sm text-primary'>( فروشنده )</span>
                    </div>
                    {/* name and role end */}
                    {/* money */}
                    <div className='flex gap-1'>
                        <span>موجودی :</span>
                        <span className='text-gray'>2,000,000 تومان</span>
                    </div>
                    {/* money end */}
                </div>
                {/* user detail end */}
            </div>
            {/* user info end */}

            {/* actions */}
            <div className='flex gap-4'>
                <IconButton
                    iconName='sun'
                    customClass='!size-[40px] !p-0 items-center justify-center rounded-full bg-lightYellow text-yellow hover:!bg-lightYellow hover:!text-yellow border-0'
                />

                <Link href={'/'} className='flex size-10 items-center justify-center rounded-full bg-primary text-white'>
                    <House size={24} strokeWidth={1.5} />
                </Link>
            </div>
            {/* actions end */}
        </div>
    )
}

export default DashboardHeader
import React, { FC } from 'react'
import IconButton from '@/components/Ui/IconButton';
import Image from 'next/image';
import userImage from '@/assets/images/UnKnownUserImg/UnKnownUser.jpg';
import Link from 'next/link';
import { GetUserInformation } from '@/core/Apis/Dashboard/UserInformation';
import { AxiosResponse } from 'axios';
import { IUserInformation } from '@/core/types/IUserInformation';
import { Bell, House } from 'lucide-react';
import HeaderMenu from './HeaderMenu';

interface IProps {
    role: string;
}

const DashboardHeader: FC<IProps> = async ({ role }) => {
    const response = await GetUserInformation() as AxiosResponse<IUserInformation>
    const { user } = response.data;
    console.log(user)

    return (
        <div className='flex justify-between items-center px-4 py-2 bg-lightGray border border-borderColor rounded-3xl'>
            {/* user info */}
            <div className='flex gap-4 items-center'>
                <Image className='rounded-full size-10' alt='userProfile' src={user.profilePicture ? user.profilePicture : userImage} width={40} height={40} />
                {/* user detail */}
                <div>
                    {/* name and role */}
                    <div className='flex gap-1 items-center'>
                        <span className='text-xl'>{user.fullName || 'کاربر بدون نام'}</span>
                        <span className='text-sm text-primary'>( {user.role === 'buyer' && 'خریدار' || user.role === 'seller' && 'فروشنده' || user.role === 'admin' && 'ادمین' } )</span>
                    </div>
                    {/* name and role end */}
                    {/* user phoneNumber */}
                    <div className='flex gap-1'>
                        <span>شماره تماس :</span>
                        <span className='text-gray'>{user.phoneNumber || '-'}</span>
                    </div>
                    {/* user phoneNumber */}
                </div>
                {/* user detail end */}
            </div>
            {/* user info end */}

            {/* actions */}
            <div className='flex gap-4'>
                <IconButton
                    iconName='sun'
                    customClass='!size-[40px] !p-0 items-center justify-center rounded-full bg-whiteColor text-yellow hover:!bg-lightYellow hover:!text-yellow border-0'
                />

                <Link 
                href={'/dashboard/notifications'} 
                className='flex size-10 items-center justify-center rounded-full bg-primary text-white max-md:hidden'>
                    <Bell size={24} strokeWidth={1.5} />
                </Link>

                <Link href={'/'} className='flex size-10 items-center justify-center rounded-full bg-primary text-white'>
                    <House size={24} strokeWidth={1.5} />
                </Link>
                
                <HeaderMenu role={role}/>
            </div>
            {/* actions end */}
        </div>
    )
}

export default DashboardHeader
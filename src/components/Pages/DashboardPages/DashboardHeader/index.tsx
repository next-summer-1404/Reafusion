'use client';

import React from 'react';
import IconButton from '@/components/Ui/IconButton';
import Image from 'next/image';
import userImage from '@/assets/images/UnKnownUserImg/UnKnownUser.jpg';
import Link from 'next/link';
import { GetUserInformation } from '@/core/Apis/Dashboard/UserInformation';
import { Bell, House } from 'lucide-react';
import { IUserInformation } from '@/core/Types/IUserInformation';

interface DashboardHeaderProps {
  toggleMenu: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ toggleMenu }) => {

  return (
    <div className='flex justify-between items-center px-4 py-2 bg-lightGray border border-borderColor rounded-3xl'>
      {/* user info */}
      <div className='flex gap-4 items-center'>
        <Image className='rounded-full size-10' alt='userProfile' src={userImage} width={40} height={40} />
        <div className='max-sm:hidden'>
          <div className='flex gap-1 items-center'>
            <span className='text-xl'>نام کاربر</span>
            <span className='text-sm text-primary'>( خریدار )</span>
          </div>
          <div className='flex gap-1'>
            <span>شماره تلفن شما :</span>
            <span className='text-gray'>09123456789</span>
          </div>
        </div>
      </div>
      {/* actions */}
      <div className='flex gap-4'>
        <IconButton
          iconName='sun'
          customClass='!size-[40px] !p-0 items-center justify-center rounded-full bg-whiteColor text-yellow hover:!bg-lightYellow hover:!text-yellow border-0'
        />
        <Link href={'/dashboard/notifications'} className='flex size-10 items-center justify-center rounded-full bg-primary text-white max-sm:hidden'>
          <Bell size={24} strokeWidth={1.5} />
        </Link>
        <Link href={'/'} className='flex size-10 items-center justify-center rounded-full bg-primary text-white'>
          <House size={24} strokeWidth={1.5} />
        </Link>
        <IconButton
          iconName='menu'
          onClick={toggleMenu}
          customClass='!size-[40px] !p-0 items-center justify-center rounded-full border-0 bg-primary text-white lg:hidden'
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
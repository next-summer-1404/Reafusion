'use client';

import DashboardHeader from '@/components/Pages/DashboardPages/DashboardHeader';
import DashboardMenu from '@/components/Pages/DashboardPages/DashboardMenu';
import React, { FC, ReactNode, useState } from 'react';

interface IProps {
  children: ReactNode;
}

const DashboardLayout: FC<IProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='p-8 max-xl:p-4 bg-whiteColor text-dark flex gap-8 h-screen max-h-screen'>
      <DashboardMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* main layout */}
      <div className='flex flex-col gap-8 w-[80%] max-lg:w-full'>
        <DashboardHeader toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
        <div className='h-full overflow-scroll p-6 bg-lightGray border border-borderColor rounded-[40px]'>
          {children}
        </div>
      </div>
      {/* main layout end */}
    </div>
  );
};

export default DashboardLayout;
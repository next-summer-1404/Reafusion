import DashboardHeader from '@/components/Pages/DashboardPages/DashboardHeader';
import DashboardMenu from '@/components/Pages/DashboardPages/DashboardMenu';
import React, { FC, ReactNode } from 'react'

interface IProps {
    children: ReactNode;
}

const DashboardLayout: FC<IProps> = async ({ children }) => {
    return (
        <div className='p-8 bg-whiteColor text-dark flex gap-8 h-screen max-h-screen'>
            <DashboardMenu />

            {/* main layout */}
            <div className='flex flex-col gap-8 w-[80%]'>
                <DashboardHeader />
                <div className='h-full overflow-scroll p-6 bg-lightGray border border-borderColor rounded-[40px]'>
                    {children}
                </div>
            </div>
            {/* main layout end */}
        </div>
    )
}

export default DashboardLayout
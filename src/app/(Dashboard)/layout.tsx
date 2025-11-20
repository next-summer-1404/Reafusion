import DashboardHeader from '@/components/Pages/DashboardPages/DashboardHeader';
import DashboardMenu from '@/components/Pages/DashboardPages/DashboardMenu';
import ScrollReveal from '@/components/Ui/Animations/ScrollReveal';
import { cookies } from 'next/headers';
import React, { FC, ReactNode } from 'react'

interface IProps {
    children: ReactNode;
}

const DashboardLayout: FC<IProps> = async ({ children }) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");
    const tokenValue = token?.value as string;
    const decodToken = JSON.parse(Buffer.from(tokenValue.split(".")[1], 'base64url').toString('utf-8'));
    
    return (
        <ScrollReveal className='p-8 max-lg:p-4 bg-whiteColor text-dark flex gap-8 h-screen max-h-screen'>
            <DashboardMenu className='max-md:hidden' role={decodToken.role}/>

            {/* main layout */}
            <div className='flex flex-col gap-8 w-[80%]'>
                <DashboardHeader role={decodToken.role}/>
                <div className='h-full overflow-scroll p-6 bg-lightGray border border-borderColor rounded-[40px]'>
                    {children}
                </div>
            </div>
            {/* main layout end */}
        </ScrollReveal>
    )
}

export default DashboardLayout
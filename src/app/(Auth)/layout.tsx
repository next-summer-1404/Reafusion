import React, { FC, ReactNode } from 'react'
import baclgroundImg from '../../assets/images//AuthPagesImg/AuthBg.jpg'

interface IChildren {
    children: ReactNode;
}

const AuthLayout: FC<IChildren> = ({ children }) => {

    return (
        <div className='w-full h-screen bg-[#F3F4F6] p-12'>
            <div className='flex justify-between h-full gap-12'>
                <div className='flex justify-center items-center gap-40 bg-white w-[50%] rounded-[40px]'
                    style={{ boxShadow: '2px 4px 8px 0px rgba(0, 0, 0, 0.15)' }}>
                    {children}
                </div>

                <div className='flex p-6 justify-center items-end bg-blue-600 w-[50%] rounded-[40px] bg-cover bg-center'
                    style={{ backgroundImage: `url(${baclgroundImg.src})`, boxShadow: '2px 4px 8px 0px rgba(0, 0, 0, 0.15)' }}>
                    <div className='bg-black'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
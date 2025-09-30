import React, { FC, ReactNode } from 'react'
import BackBtn from './../BackBtn/index';

interface IChildren {
    children: ReactNode;
    title: string;
    desc: string;
}

const AuthForm: FC<IChildren> = ({ children, title, desc }) => {
    return (
        <form className='box-border h-full w-full flex flex-col justify-center items-center gap-10 p-12'>
            {/* back btn */}
            <div className='w-full'>
                <BackBtn href='/' title='صفحه اصلی' iconName='home' />
            </div>
            {/* back btn end */}

            <div className='w-full flex flex-col gap-4'>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p>{desc}</p>
            </div>

            <div className='w-full'>
                {children}
            </div>

            <button >submit btn</button>

        </form>
    )
}

export default AuthForm
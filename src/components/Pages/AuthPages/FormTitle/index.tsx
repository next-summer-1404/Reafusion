import React, { FC } from 'react'

interface IProps {
    title: string;
    desc: string;
}

const FormTitle: FC<IProps> = ({ title, desc }) => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <h2 className='text-2xl max-sm:text-lg font-bold text-dark dark:text-thidary'>{title}</h2>
            <p className='max-sm:hidden text-dark dark:text-white'>{desc}</p>
        </div>
    )
}

export default FormTitle
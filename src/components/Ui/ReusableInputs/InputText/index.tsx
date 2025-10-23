import React, { FC } from 'react'

interface IProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    labelText: string;
    customClass?: string;
    name?: string;
    value?: string;
}

const CustomInputText: FC<IProps> = ({ labelText, customClass, name, value, placeholder, type }) => {
    return (
        <div className={`${customClass} flex flex-col gap-4 w-[250px] max-sm:w-full`}>
            <label className='text-[#1E2022] font-bold'>{labelText}</label>
            <input className='bg-[#F5F5F5] h-[46px] rounded-[40px] px-5 placeholder:text-gray text-dark outline-0' type={type || 'text'} placeholder={placeholder} />
        </div>
    )
}

export default CustomInputText
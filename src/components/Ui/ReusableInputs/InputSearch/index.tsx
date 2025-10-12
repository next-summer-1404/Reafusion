import { Search } from 'lucide-react';
import React, { FC } from 'react'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    labelText: string;
    customClass?: string;
    placeholder?: string;
    value?: string;
    setState?: (value: string) => void;
}

const CustomInputSearch: FC<IProps> = ({ name, customClass, labelText, placeholder, value, setState }) => {
    return (
        <div className={`${customClass} flex flex-col gap-4 w-[250px] max-md:w-full`}>
            <label htmlFor="" className='text-[#1E2022] font-bold'>{labelText}</label>
            <div className='flex justify-between items-center bg-[#F5F5F5] w-full h-[46px] rounded-[40px] px-5 gap-1'>
                <input
                    type="search"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={(event) => setState && setState(event.target.value)}
                    className='w-full h-full py-3 outline-0 text-[#1E2022]'
                />

                <Search color='#1E2022' />
            </div>
        </div>
    )
}

export default CustomInputSearch
import React, { FC } from 'react'

interface IProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    labelText: string;
    customClass?: string;
    name?: string;
    value?: string;
    setState?: (value: string) => void;
}

const CustomInputText: FC<IProps> = ({ labelText, customClass, name, value, placeholder, type, setState }) => {
    return (
        <div className={`${customClass} flex flex-col gap-4 w-[250px] max-sm:!w-full`}>
            <label className='text-dark dark:text-White font-bold'>{labelText}</label>
            <input 
               value={value} 
               onChange={(event) => setState && setState(event.target.value)}
               className='bg-[#F5F5F5] h-[46px] rounded-[40px] px-5 placeholder:text-gray text-dark outline-0' 
               type={type || 'text'} 
               placeholder={placeholder} 
            />
        </div>
    )
}

export default CustomInputText
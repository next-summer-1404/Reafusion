import React, { FC } from 'react'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText: string;
    customClass?: string;
}

const CustomSelectOption: FC<IProps> = ({ customClass, labelText }) => {
    return (
        <div className={`${customClass} flex flex-col gap-4 w-[250px]`}>
            <label htmlFor="" className='text-[#1E2022] font-bold'>{labelText}</label>

            <div className='bg-[#F5F5F5] h-[46px] rounded-[40px] px-5'>
                <select name="" id="" className='w-full h-full py-3 outline-0'>
                    <option value="">انتخاب کنید</option>
                    <option value="">تست 1</option>
                    <option value="">تست 2</option>
                </select>
            </div>
        </div>
    )
}

export default CustomSelectOption
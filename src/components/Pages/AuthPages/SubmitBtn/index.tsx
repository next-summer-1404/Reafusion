import React, { FC } from 'react'

interface IProps {
    title: string;
    customStyle?: string;
    disabled?: any;
}

const SubmitBtn: FC<IProps> = ({ title, customStyle, disabled }) => {
    return (
        <button
            type='submit'
            disabled={disabled}
            className={`${customStyle} w-full bg-[#0D3B66] text-white text-center p-5 rounded-[40px] cursor-pointer`}
        >
            {title}
        </button>
    )
}

export default SubmitBtn
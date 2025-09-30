import React, { FC } from 'react'

interface IProps {
    title: string;
    customStyle?: string;
}

const SubmitBtn: FC<IProps> = ({ title, customStyle }) => {
    return (
        <button
            type='submit'
            className={`${customStyle} w-full bg-[#0D3B66] text-white text-center p-5 rounded-[40px] cursor-pointer`}
        >
            {title}
        </button>
    )
}

export default SubmitBtn
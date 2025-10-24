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
            className={`${customStyle} w-full bg-primary dark:bg-thidary dark:text-dark text-whiteColor text-center p-5 max-sm:p-3 max-sm:text-sm rounded-[40px] cursor-pointer`}
        >
            {title}
        </button>
    )
}

export default SubmitBtn
import React, { FC } from 'react'

interface IProps {
   sharedEmail: string;
   phoneNumber: string;
}

const InformTravel: FC<IProps> = ({ sharedEmail, phoneNumber }) => {
    return (
        <div className='flex flex-col gap-8 justify-between p-4 rounded-3xl border border-borderColor bg-whiteColor box-border'>
            {/* title */}
            <div className='flex items-center gap-1'>
                <h3 className='text-2xl text-dark font-bold'>اطلاع رسانی سفر</h3>
                <span className='text-gray'>( اطلاعات بلیط و اطلاع رسانی بعدی به این آدرس ارسال می شود  )</span>
            </div>
            {/* title end */}

            {/* detail */}
            <div className='flex gap-2'>
                {/* phone number */}
                <div className='flex flex-col gap-4 w-[250px] max-sm:w-full'>
                    <label className='text-[#1E2022] font-bold'>شماره تلفن</label>
                    <p className='text-gray'>{phoneNumber}</p>
                </div>
                {/* phone number end */}

                {/* email */}
                <div className='flex flex-col gap-4 w-[250px] max-sm:w-full'>
                    <label className='text-[#1E2022] font-bold'>ایمیل</label>
                    <p className='text-gray'>{sharedEmail}</p>
                </div>
                {/* email end */}
            </div>
            {/* detail end */}
        </div>
    )
}

export default InformTravel
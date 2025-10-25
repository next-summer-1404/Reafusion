import React, { FC } from 'react'

interface IProps {
   sharedEmail: string;
   phoneNumber: string;
}

const InformTravel: FC<IProps> = ({ sharedEmail, phoneNumber }) => {
    return (
        <div className='flex flex-col gap-8 justify-between p-4 rounded-3xl border border-borderColor bg-whiteColor dark:bg-dark box-border'>
            {/* title */}
            <div className='flex max-md:flex-col items-center max-md:items-start gap-1'>
                <h3 className='text-2xl max-md:text-xl text-dark font-bold dark:text-White'>اطلاع رسانی سفر</h3>
                <span className='text-gray max-sm:text-xs'>( اطلاعات بلیط و اطلاع رسانی بعدی به این آدرس ارسال می شود  )</span>
            </div>
            {/* title end */}

            {/* detail */}
            <div className='flex max-sm:flex-col gap-2'>
                {/* phone number */}
                <div className='flex flex-col gap-4 w-[250px] max-sm:w-full'>
                    <label className='text-[#1E2022] dark:text-White font-bold'>شماره تلفن</label>
                    <p className='text-gray dark:text-thidary'>{phoneNumber}</p>
                </div>
                {/* phone number end */}

                {/* email */}
                <div className='flex flex-col gap-4 w-[250px] max-sm:w-full'>
                    <label className='text-[#1E2022] dark:text-White font-bold'>ایمیل</label>
                    <p className='text-gray dark:text-thidary'>{sharedEmail}</p>
                </div>
                {/* email end */}
            </div>
            {/* detail end */}
        </div>
    )
}

export default InformTravel
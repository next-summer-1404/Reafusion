import React from 'react'

const InformTravel = () => {
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
                    <p className='text-gray'>09391234567</p>
                </div>
                {/* phone number end */}

                {/* email */}
                <div className='flex flex-col gap-4 w-[250px] max-sm:w-full'>
                    <label className='text-[#1E2022] font-bold'>ایمیل</label>
                    <p className='text-gray'>example@gmail.com</p>
                </div>
                {/* email end */}
            </div>
            {/* detail end */}
        </div>
    )
}

export default InformTravel
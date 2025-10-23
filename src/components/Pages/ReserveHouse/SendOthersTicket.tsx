import IconButton from '@/components/Ui/IconButton'
import CustomInputText from '@/components/Ui/ReusableInputs/InputText'
import React from 'react'

const SendOthersTicket = () => {
    return (
        <div className='flex flex-col gap-8 justify-between p-4 rounded-3xl border border-borderColor bg-whiteColor box-border'>
            <div className='flex items-center gap-1 max-sm:flex-col max-sm:justify-start max-sm:items-start'>
                <h3 className='text-2xl text-dark font-bold max-sm:text-xl'>ارسال بلیط به دیگران</h3>
                <span className='text-gray max-sm:text-xs'>( ارسال بلیط به ایمیل و شماره همراه دیگر )</span>
            </div>

            <div className='flex max-md:flex-col justify-between items-end max-md:gap-8'>
                <div className='flex flex-wrap gap-6 max-md:w-full'>
                    <CustomInputText
                        labelText='شماره تلفن'
                        placeholder='شماره تلفن خود را وارد کنید'
                        customClass='max-md:w-[47%]'
                    />

                    <CustomInputText
                        labelText='ایمیل'
                        placeholder='example@gmail.com'
                        type='email'
                        customClass='max-md:w-[47%]'
                    />
                </div>

                <div className='max-md:w-full'>
                    <IconButton title='ثبت اطلاعات' iconName='checkedUser' />
                </div>
            </div>
        </div>
    )
}

export default SendOthersTicket
import IconButton from '@/components/Ui/IconButton'
import CustomInputText from '@/components/Ui/ReusableInputs/InputText'
import React from 'react'

const SendOthersTicket = () => {
    return (
        <div className='flex flex-col gap-8 justify-between p-4 rounded-3xl border border-borderColor bg-whiteColor box-border'>
            <div className='flex items-center gap-1'>
                <h3 className='text-2xl text-dark font-bold'>ارسال بلیط به دیگران</h3>
                <span className='text-gray'>( ارسال بلیط به ایمیل و شماره همراه دیگر )</span>
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex gap-6'>
                    <CustomInputText
                        labelText='شماره تلفن'
                        placeholder='شماره تلفن خود را وارد کنید'
                    />

                    <CustomInputText
                        labelText='ایمیل'
                        placeholder='example@gmail.com'
                        type='email'
                    />
                </div>

                <div>
                    <IconButton title='ثبت اطلاعات' iconName='checkedUser' />
                </div>
            </div>
        </div>
    )
}

export default SendOthersTicket
import IconButton from '@/components/Ui/IconButton'
import CustomInputText from '@/components/Ui/ReusableInputs/InputText'
import React, { FormEvent, useState } from 'react'

const SendOthersTicket = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [sharedEmail, setSharedEmail] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        sessionStorage.setItem('phoneNumber', phoneNumber);
        sessionStorage.setItem('sharedEmail', sharedEmail);
        alert('اطلاعات با موفقیت زخیره شد')  
    }

    return (
        <div className='flex flex-col gap-8 justify-between p-4 rounded-3xl border border-borderColor bg-whiteColor box-border'>
            <div className='flex items-center gap-1'>
                <h3 className='text-2xl text-dark font-bold'>ارسال بلیط به دیگران</h3>
                <span className='text-gray'>( ارسال بلیط به ایمیل و شماره همراه دیگر )</span>
            </div>

            <form onSubmit={handleSubmit} className='flex justify-between items-center'>
                <div className='flex gap-6'>
                    <CustomInputText
                        labelText='شماره تلفن'
                        value={phoneNumber}
                        setState={setPhoneNumber}
                        placeholder='شماره تلفن خود را وارد کنید'
                    />
                    <CustomInputText
                        labelText='ایمیل'
                        value={sharedEmail}
                        setState={setSharedEmail}
                        placeholder='example@gmail.com'
                        type='email'
                    />
                </div>
                    <IconButton title='ثبت اطلاعات' iconName='checkedUser' type='submit' />
            </form>
        </div>
    )
}

export default SendOthersTicket
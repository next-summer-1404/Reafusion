'use client';
import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import FormInput from '@/components/Pages/AuthPages/Input';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import React from 'react'
import { forgetPassAction } from './index';

const ForgetPassPageStep1 = () => {
    return (
        <AuthForm action={forgetPassAction}>
            {/* back btn */}
            <BackBtn href='/' title='صفحه اصلی' iconName='home' />
            {/* back btn end */}

            {/* form title */}
            <FormTitle
                title='فراموشی رمز عبور (مرحله 1)'
                desc=' ایمیلت رو وارد کن و با دریافت کد، اولین قدم رو بردار.'
            />
            {/* form title end */}

            {/* email input */}
            <FormInput
                name='email'
                type='email'
                placeholder='ایمیل خود را وارد کنید'
                iconName='Mail'
            />
            {/* email input end */}

            {/* submit btn */}
            <SubmitBtn title='ارسال کد تایید' />
            {/* submit btn end */}

        </AuthForm>
    )
}

export default ForgetPassPageStep1
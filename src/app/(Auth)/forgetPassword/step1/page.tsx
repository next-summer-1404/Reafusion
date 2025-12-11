import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import FormInput from '@/components/Pages/AuthPages/Input';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import React from 'react'
import { forgetPassAction } from './index';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'فراموشی رمز ریفیوژن مرحله یکم',
    description: 'در این صفحه کاربر میتواند در سایت ریفیوژن اگر کد ورودش را فراموش کرد تغییرش دهد',
    keywords: ['صفحه فراموشی رمز مرحه یکم', 'فراموشی رمز در ریفیوژن', 'مرحله یکم فراموشی رمز در ریفیوژن']
  }
}

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
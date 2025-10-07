"use client"
import AccountLink from '@/components/Pages/AuthPages/AccountLink';
import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import FormInput from '@/components/Pages/AuthPages/Input';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import React from 'react'
import { register01Action } from '../../../../app/(Auth)/register/step1/index';


const RegisterPageStep1 = () => {

  return (
    <AuthForm action={register01Action}>
      {/* back btn */}
      <BackBtn href='/' title='صفحه اصلی' iconName='home' />
      {/* back btn end */}

      {/* form title */}
      <FormTitle
        title='ایجاد حساب کاربری (مرحله اول)'
        desc=' ایمیلت رو وارد کن و با دریافت کد، اولین قدم رو بردار.'
      />
      {/* form title end */}

      {/* email input */}
      <FormInput
        type='email'
        name='email'
        placeholder='ایمیل خود را وارد کنید'
        iconName='Mail'
      />
      {/* email input end */}

      {/* submit btn */}
      <SubmitBtn title='ارسال کد تایید' />
      {/* submit btn end */}

      {/* have acount or not */}
      <AccountLink linkTitle='وارد شوید' linkHref='/login' desc='حساب کاربری دارید ؟' />
      {/* have acount or not end*/}

    </AuthForm>
  )
}

export default RegisterPageStep1
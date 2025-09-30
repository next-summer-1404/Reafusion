'use client';
import AccountLink from '@/components/Pages/AuthPages/AccountLink';
import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import FormInput from '@/components/Pages/AuthPages/Input';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import React from 'react'


const RegisterPageStep1 = () => {

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register Page Step 1")
  }

  return (
    <AuthForm submit={onSubmit}>
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
        placeholder='ایمیل خود را وارد کنید'
        iconName='Mail'
      />
      {/* email input end */}

      {/* submit btn */}
      <SubmitBtn title='ارسال کد تایید' />
      {/* submit btn end */}

      {/* have acount or not */}
      <AccountLink linkTitle='وارد شوید' linkHref='registerStep1' desc='حساب کاربری دارید ؟' />
      {/* have acount or not end*/}

    </AuthForm>
  )
}

export default RegisterPageStep1
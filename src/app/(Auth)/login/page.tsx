'use client';

import React, { Fragment } from 'react'
import AuthForm from './../../../components/Pages/AuthPages/AuthForm/index';
import FormTitle from './../../../components/Pages/AuthPages/FormTitle/index';
import SubmitBtn from './../../../components/Pages/AuthPages/SubmitBtn/index';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormInput from './../../../components/Pages/AuthPages/Input/index';
import Link from 'next/link';
import AccountLink from '@/components/Pages/AuthPages/AccountLink';

const LoginPage = () => {

  const onSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("hi")
  }

  return (
    <AuthForm submit={onSubmitLogin}>
      {/* back btn */}
      <BackBtn href='/' title='صفحه اصلی' iconName='home' />
      {/* back btn end */}

      {/* form title */}
      <FormTitle
        title='ورود به حساب کاربری'
        desc='برای دسترسی به خدمات و تجربه بهتر در سایت، وارد حساب خود شوید.'
      />
      {/* form title end */}

      {/* email input */}
      <FormInput
        type='email'
        placeholder='ایمیل خود را وارد کنید'
        iconName='Mail'
      />
      {/* email input end */}

      {/* password input */}
      <FormInput
        type='password'
        placeholder='رمز عبور خود را وارد کنید'
        linkHref='/forgetPassword/step1'
        linkTitle='رمز عبور خود را فراموش کرده اید ؟'
        iconName='Eye'
      />
      {/* password input end */}

      {/* submit btn */}
      <SubmitBtn title='ورود به حساب کاربری' />
      {/* submit btn end */}

      {/* have acount or not */}
      <AccountLink linkTitle='ثبت نام کنید' linkHref='register/step1' desc='حساب کاربری ندارید ؟'/>
      {/* have acount or not end*/}
    </AuthForm>
  )
}

export default LoginPage
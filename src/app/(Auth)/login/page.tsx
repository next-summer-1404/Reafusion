'use client';

import React, { Fragment, useState } from 'react'
import AuthForm from './../../../components/Pages/AuthPages/AuthForm/index';
import FormTitle from './../../../components/Pages/AuthPages/FormTitle/index';
import SubmitBtn from './../../../components/Pages/AuthPages/SubmitBtn/index';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormInput from './../../../components/Pages/AuthPages/Input/index';
import AccountLink from '@/components/Pages/AuthPages/AccountLink';
import { postLogin } from '@/core/Apis/Auth/Login/login';
import { useRouter } from 'next/navigation';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const loginData = { email, password };
      const result = await postLogin(loginData);
      console.log('login Successfull :', result);
      router.push('/');
    }
    catch (error) {
      console.error('login failed :', error)
    }
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* email input end */}

      {/* password input */}
      <FormInput
        type='password'
        placeholder='رمز عبور خود را وارد کنید'
        linkHref='/forgetPassword/step1'
        linkTitle='رمز عبور خود را فراموش کرده اید ؟'
        iconName='Eye'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* password input end */}

      {/* submit btn */}
      <SubmitBtn title='ورود به حساب کاربری' />
      {/* submit btn end */}

      {/* have acount or not */}
      <AccountLink linkTitle='ثبت نام کنید' linkHref='register/step1' desc='حساب کاربری ندارید ؟' />
      {/* have acount or not end*/}
    </AuthForm>
  )
}

export default LoginPage
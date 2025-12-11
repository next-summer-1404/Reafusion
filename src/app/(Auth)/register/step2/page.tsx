"use client"
import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import CodeInput from '@/components/Pages/AuthPages/CodeInput';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import TimerCounter from '@/components/Pages/AuthPages/TimerCounter';
import React, { useEffect, useState } from 'react'
import { register02Action } from '.';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'صفحه ثبت نام مرحله دوم',
    description: 'در این صفحه کاربر میتواند در سایت ریفیوژن کد ارسال شده را وارد میکند',
    keywords: ['صفحه ارسال کد ثبت نام', 'ثبت نام در ریفیوژن', 'مرحله دوم ثبت نام در ریفیوژن']
  }
}

const RegisterPageStep2 = () => {

  // get user Data from sesionStorage 
  const [tempUserId, setTempUserId] = useState('');

  useEffect(() => {
    const storedTempUserId = sessionStorage.getItem('tempUserId') as string;
    if (storedTempUserId) setTempUserId(storedTempUserId);
  }, [])
  // get user Data from sesionStorage end

  return (
    <AuthForm action={register02Action}>
      {/* back btn */}
      <BackBtn href='/register/step1' title='بازگشت' iconName='back' />
      {/* back btn end */}

      {/* form title */}
      <FormTitle
        title='ایجاد حساب کاربری (مرحله دوم)'
        desc={`کد تایید به ایمیل شما ارسال می شود.`}
      />
      {/* form title end */}

      {/* back btn */}
      <BackBtn href='/register/step1' title='ویرایش ایمیل' />
      {/* back btn end */}

      {/* digit code input */}
      <CodeInput />
      {/* digit code input end */}

      <input type="hidden" name="tempUserId" value={tempUserId || ''} />

      {/* timer count down */}
      <TimerCounter />
      {/* timer count down end */}

      {/* submit btn */}
      <SubmitBtn title='ارسال' />
      {/* submit btn end */}

    </AuthForm>
  )
}

export default RegisterPageStep2
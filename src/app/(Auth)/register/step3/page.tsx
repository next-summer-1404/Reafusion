'use client';
import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import FormInput from '@/components/Pages/AuthPages/Input';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import React, { useEffect, useState } from 'react'
import { register03Action } from '../../../../app/(Auth)/register/step3/index'

const RegisterPageStep3 = () => {
  // get userId value from sessionStorage
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const Userid = sessionStorage.getItem('userId');
    if (Userid) setUserId(Userid);
  }, [])
  // get userId value from sessionStorage end

  return (
    <AuthForm action={register03Action}>
      {/* back btn */}
      <BackBtn href='/register/step2' title='بازگشت' iconName='back' />
      {/* back btn end */}

      {/* form title */}
      <FormTitle
        title='ایجاد حساب کاربری (مرحله آخر)'
        desc=' برای تکمیل ثبت‌نام، شماره تماس خود را وارد کرده و رمز عبور بسازید.'
      />
      {/* form title end */}

      {/* phone input */}
      <FormInput
        name='phoneNumber'
        type='text'
        placeholder='شماره تماس خود را وارد کنید'
        iconName='Smartphone'
      />
      {/* phone input end */}

      {/* password input */}
      <FormInput
        type='password'
        placeholder='رمز عبور خود را وارد کنید'
        iconName='Eye'
      />
      {/* password input end */}

      {/* repeat password input */}
      <FormInput
        name='password'
        type='password'
        placeholder='تکرار رمز عبور'
        iconName='Eye'
      />
      {/* repeat password input end */}
      <input type="hidden" name='userId' value={userId || ''} />
      {/* submit btn */}
      <SubmitBtn title='ارسال' />
      {/* submit btn end */}

    </AuthForm>
  )
}

export default RegisterPageStep3
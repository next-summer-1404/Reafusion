'use client';
import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import FormInput from '@/components/Pages/AuthPages/Input';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import React, { useEffect, useState } from 'react';
import { ForgotPass03Action } from './index';

const ForgetPassPageStep3 = () => {
  // get data of user witch save in sesionStorage
  const [userEmail, setUserEmail] = useState(''); 
  const [resetCode, setResetCode] = useState('');
  console.log(userEmail, resetCode)

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('userEmail') as string | null; 
    const storedResetCode = sessionStorage.getItem('resetCode') as string | null; 
    if (storedEmail) setUserEmail(storedEmail);
    if (storedResetCode) setResetCode(storedResetCode);
  }, []);
  // get data of user witch save in sesionStorage end
  
  return (
    <AuthForm action={ForgotPass03Action}>
      {/* back btn */}
      <BackBtn href='/forgetPassword/step2' title='بازگشت' iconName='back' />
      {/* back btn end */}

      {/* form title */}
      <FormTitle
        title='فراموشی رمز عبور (مرحله آخر)'
        desc='رمز عبور جدید برای خودت ایجاد کن و راحت وارد حساب کاربریت شو.'
      />
      {/* form title end */}

      {/* new password input */}
      <FormInput
        name='newPassword'
        type="password"
        placeholder='رمز عبور جدید را وارد کنید'
        iconName='Eye'
      />
      {/* new password input end */}
      <input type="hidden" name="email" value={userEmail || ''} />
      <input type="hidden" name="resetCode" value={resetCode || ''} />
      {/* submit btn */}
      <SubmitBtn title='تغییر رمز عبور' />
      {/* submit btn end */}
    </AuthForm>
  );
};

export default ForgetPassPageStep3;
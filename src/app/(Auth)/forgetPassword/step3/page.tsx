'use client';
import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import FormInput from '@/components/Pages/AuthPages/Input';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import React from 'react'


const ForgetPassPageStep3 = () => {

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register Page Step 3")
  }

  return (
    <AuthForm submit={onSubmit}>
      {/* back btn */}
      <BackBtn href='/forgetPassword/step2' title='بازگشت' iconName='back' />
      {/* back btn end */}

      {/* form title */}
      <FormTitle
        title='فراموشی رمز عبور (مرحله آخر)'
        desc='رمز عبور جدید برای خودت ایجاد کن و راحت وارد حساب کاربریت شو.'
      />
      {/* form title end */}

      {/* password input */}
      <FormInput
        type='password'
        placeholder='رمز عبور خود را وارد کنید'
        iconName='Eye'
      />
      {/* password input end */}

      {/* repeat password input */}
      <FormInput
        type='password'
        placeholder='تکرار رمز عبور'
        iconName='Eye'
      />
      {/* repeat password input end */}

      {/* submit btn */}
      <SubmitBtn title='تغییر رمز عبور' />
      {/* submit btn end */}

    </AuthForm>
  )
}

export default ForgetPassPageStep3
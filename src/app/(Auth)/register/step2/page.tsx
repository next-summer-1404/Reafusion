import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import CodeInput from '@/components/Pages/AuthPages/CodeInput';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import TimerCounter from '@/components/Pages/AuthPages/TimerCounter';
import React from 'react'


const RegisterPageStep2 = () => {

  return (
    <AuthForm action={''}>
      {/* back btn */}
      <BackBtn href='/register/step1' title='بازگشت' iconName='back' />
      {/* back btn end */}

      {/* form title */}
      <FormTitle
        title='ایجاد حساب کاربری (مرحله دوم)'
        desc='کد تایید به ایمیل شما youremail@gmail.com ارسال می شود.'
      />
      {/* form title end */}

      {/* back btn */}
      <BackBtn href='/register/step1' title='ویرایش ایمیل' />
      {/* back btn end */}

      {/* digit code input */}
      <CodeInput />
      {/* digit code input end */}

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
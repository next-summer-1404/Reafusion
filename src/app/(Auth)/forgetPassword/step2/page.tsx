'use client';
import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import CodeInput from '@/components/Pages/AuthPages/CodeInput';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import TimerCounter from '@/components/Pages/AuthPages/TimerCounter';
import React, { useEffect, useState } from 'react'
import { ForgotPass02Action } from '../../../../app/(Auth)/forgetPassword/step2/index';

const ForgetPassPageStep2 = () => {
    // get user Data from sesionStorage 
    const [userEmail, serUserEmail] = useState('');
    console.log(userEmail)

    useEffect(() => {
      const UserEmail = sessionStorage.getItem('userEmail') as string;
      serUserEmail(UserEmail)
    }, [])
    // get user Data from sesionStorage end

    return (
        <AuthForm action={ForgotPass02Action}>
            {/* back btn */}
            <BackBtn href='/forgetPassword/step1' title='بازگشت' iconName='back' />
            {/* back btn end */}

            {/* form title */}
            <FormTitle
                title='فراموشی رمز عبور (مرحله دوم)'
                desc={`کد تایید به ایمیل شما ${userEmail} ارسال می شود.`}
            />
            {/* form title end */}

            {/* digit code input */}
            <CodeInput />
            {/* digit code input end */}
            
            <input type="hidden" name="email" value={userEmail || ''} />
            {/* timer count down */}
            <TimerCounter />
            {/* timer count down end */}

            {/* submit btn */}
            <SubmitBtn title='ارسال' />
            {/* submit btn end */}

        </AuthForm>
    )
}

export default ForgetPassPageStep2
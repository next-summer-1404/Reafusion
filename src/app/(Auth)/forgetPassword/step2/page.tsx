'use client';
import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import React from 'react'

const ForgetPassPageStep2 = () => {

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Forget Password Step 2")
    }

    return (
        <AuthForm submit={onSubmit}>
            {/* back btn */}
            <BackBtn href='/forgetPassword/step1' title='بازگشت' iconName='back' />
            {/* back btn end */}

            {/* form title */}
            <FormTitle
                title='فراموشی رمز عبور (مرحله دوم)'
                desc='کد تایید به ایمیل شما youremail@gmail.com ارسال می شود.'
            />
            {/* form title end */}

            {/* submit btn */}
            <SubmitBtn title='ارسال' />
            {/* submit btn end */}

        </AuthForm>
    )
}

export default ForgetPassPageStep2
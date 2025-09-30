import React, { Fragment } from 'react'
import AuthForm from './../../../components/Pages/AuthPages/AuthForm/index';

const LoginPage = () => {
  return (
      <AuthForm
        title='ورود به حساب کاربری'
        desc='برای دسترسی به خدمات و تجربه بهتر در سایت، وارد حساب خود شوید.'
      >
        Form Inputs
      </AuthForm>
  )
}

export default LoginPage
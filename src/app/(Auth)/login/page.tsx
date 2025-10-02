'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthForm from './../../../components/Pages/AuthPages/AuthForm/index';
import FormTitle from './../../../components/Pages/AuthPages/FormTitle/index';
import SubmitBtn from './../../../components/Pages/AuthPages/SubmitBtn/index';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormInput from './../../../components/Pages/AuthPages/Input/index';
import AccountLink from '@/components/Pages/AuthPages/AccountLink';
import { postLogin } from '@/core/Apis/Auth/Login/login';
import { IUserLogin } from '@/core/types/Auth/IUserLogin';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [formData, setFormData] = useState<IUserLogin>({ email: '', password: '' });
  const [errors, setErrors] = useState<Partial<IUserLogin>>({});
  const router = useRouter();

  // dynamic validation
  const validateForm = (): boolean => {
    const newErrors: Partial<IUserLogin> = {};

    // email validation
    if (!formData.email) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'فرمت ایمیل معتبر نیست';
    }

    // password validation
    if (!formData.password) {
      newErrors.password = 'رمز عبور الزامی است';
    } else if (formData.password.length < 6) {
      newErrors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // clear last errors
    setErrors({});

    // authorize befor request
    if (!validateForm()) {
      return;
    }

    try {
      const result = await postLogin(formData);
      console.log('login Successful :', result);
      router.push('/');
      toast.success('به دلتا خوش اومدی جیگر');
    }
    catch (error: any) {
      console.error('login failed :', error);

      // api errors with toast
      if (error.response && error.response.status) {
        if (error.response.status === 401) {
          toast.error('رمز عبور اشتباه است');
        } else if (error.response.status === 404) {
          toast.error('کاربری با این مشخصات یافت نشد');
        } else {
          toast.error('خطایی رخ داده است');
        }
      } else {
        toast.error('خطا در ارتباط با سرور');
      }
    }
  };

  // update form function
  const handleInputChange = (field: keyof IUserLogin, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        helperText={errors.email}
      />
      {/* email input end */}

      {/* password input */}
      <FormInput
        type='password'
        placeholder='رمز عبور خود را وارد کنید'
        linkHref='/forgetPassword/step1'
        linkTitle='رمز عبور خود را فراموش کرده اید؟'
        iconName='Eye'
        value={formData.password}
        onChange={(e) => handleInputChange('password', e.target.value)}
        helperText={errors.password}
      />
      {/* password input end */}

      {/* submit btn */}
      <SubmitBtn title='ورود به حساب کاربری' />
      {/* submit btn end */}

      {/* have account or not */}
      <AccountLink linkTitle='ثبت نام کنید' linkHref='register/step1' desc='حساب کاربری ندارید؟' />
      {/* have account or not end */}
    </AuthForm>
  );
};

export default LoginPage;
'use client';

import AuthForm from '@/components/Pages/AuthPages/AuthForm';
import FormTitle from '@/components/Pages/AuthPages/FormTitle';
import SubmitBtn from '@/components/Pages/AuthPages/SubmitBtn';
import BackBtn from '@/components/Pages/AuthPages/BackBtn';
import FormInput from '@/components/Pages/AuthPages/Input';
import AccountLink from '@/components/Pages/AuthPages/AccountLink';
import { onSubmitLogin } from './actions';
import { useState, useTransition } from 'react';

const LoginPage = () => {

  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    setError(null); // پاک کردن خطای قبلی
    startTransition(async () => {
      const result = await onSubmitLogin(formData);
      if (result?.error) {
        setError(result.error);
      } else if (result?.success) {
        // موفقیت لاگین (مثلاً به صفحه داشبورد برو)
        window.location.href = '/'; // یا redirect با useRouter
      }
    });
  };

  return (
    <AuthForm action={handleSubmit}>
      <BackBtn href="/" title="صفحه اصلی" iconName="home" />
      <FormTitle
        title="ورود به حساب کاربری"
        desc="برای دسترسی به خدمات و تجربه بهتر در سایت، وارد حساب خود شوید."
      />

      <FormInput
        type="email"
        placeholder="ایمیل خود را وارد کنید"
        iconName="Mail"
        name="email"
        helperText={error || ''} // خطای عمومی توی هر دو فیلد
      />
      <FormInput
        type="password"
        placeholder="رمز عبور خود را وارد کنید"
        linkHref="/forgetPassword/step1"
        linkTitle="رمز عبور خود را فراموش کرده اید؟"
        iconName="Eye"
        name="password"
        helperText={error || ''} // خطای عمومی توی هر دو فیلد
      />
      <SubmitBtn title="ورود به حساب کاربری" disabled={isPending} />
      <AccountLink linkTitle="ثبت نام کنید" linkHref="/register/step1" desc="حساب کاربری ندارید؟" />
    </AuthForm>
  );
};

export default LoginPage;
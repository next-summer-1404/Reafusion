import AuthForm from "@/components/Pages/AuthPages/AuthForm";
import FormTitle from "@/components/Pages/AuthPages/FormTitle";
import SubmitBtn from "@/components/Pages/AuthPages/SubmitBtn";
import BackBtn from "@/components/Pages/AuthPages/BackBtn";
import FormInput from "@/components/Pages/AuthPages/Input";
import AccountLink from "@/components/Pages/AuthPages/AccountLink";
import { loginAction } from '../../../app/(Auth)/login/index';
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'صفحه ورود کاربر',
    description: 'در این صفحه کاربر میتواند در سایت ریفیوژن ورود پیدا کند اگر ثبت نام کرده باشد',
    keywords: ['صفحه ورود', 'ورود به ریفیوژن']
  }
}

const LoginPage = () => {
  return (
    <AuthForm action={loginAction}>
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
        helperText={""}
      />
      <FormInput
        type="password"
        placeholder="رمز عبور خود را وارد کنید"
        linkHref="/forgetPassword/step1"
        linkTitle="رمز عبور خود را فراموش کرده اید؟"
        iconName="Eye"
        name="password"
        helperText={''}
      />
      <SubmitBtn title="ورود به حساب کاربری" disabled={""} />
      <AccountLink
        linkTitle="ثبت نام کنید"
        linkHref="/register/step1"
        desc="حساب کاربری ندارید؟"
      />
    </AuthForm>
  );
};

export default LoginPage;
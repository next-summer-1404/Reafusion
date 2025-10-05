import AuthForm from "@/components/Pages/AuthPages/AuthForm";
import FormTitle from "@/components/Pages/AuthPages/FormTitle";
import SubmitBtn from "@/components/Pages/AuthPages/SubmitBtn";
import BackBtn from "@/components/Pages/AuthPages/BackBtn";
import FormInput from "@/components/Pages/AuthPages/Input";
import AccountLink from "@/components/Pages/AuthPages/AccountLink";
import { z } from "zod";
import { postLogin } from "@/core/Apis/Auth/Login/login";

// the zod for validation
const loginSchema = z.object({
  email: z.string().email("ایمیل را وارد کنید"),
  password: z.string().min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
});

// server action for manage login data and send that to the Api
const loginAction = async (state: { message: string }, formdata: FormData) => {
  "use server";
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;

  // conect zod to the form 
  const parseData = loginSchema.safeParse({ email, password });

  if (!parseData.success) {
    const errors = parseData.error.flatten().fieldErrors;
    const message = [errors.email?.join(", "),
    errors.password?.join(", ")].join(" | ") || "خطا در اعتبارسنجی";
    return { message };
  }
  // conect zod to the form end 
  // send data to APi & manage that response
  try {
    const loginData = { email, password };
    const response = await postLogin(loginData);
    if (response) {
      console.log(response);
      return { message: "ورود موفقیت‌آمیز بود" };
    } else {
      return { message: "پاسخ نامعتبر است" };
    }
  } catch {
    return { message: 'خطا در سرور' };
  }
  // send data to APi & manage that response end
};

const LoginPage = () => {
  return (
    <AuthForm action={loginAction} href={'/'}>
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
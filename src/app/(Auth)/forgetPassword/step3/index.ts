"use server";

import { ForgetPassStep03 } from "@/core/Apis/Auth/ForgetPassStep03";

export const ForgotPass03Action = async (
  state: { message: string; redirect?: string },
  formdata: FormData
) => {
  // get data from form inputs
  const email = formdata.get('email') as string;
  const resetCode = formdata.get('resetCode') as string;
  const newPassword = formdata.get('newPassword') as string;

  if (!email || !resetCode || !newPassword) {
    return { message: 'همه فیلدها باید پر شوند' };
  }
  // get data from form inputs end
  // send data to the Api
  try {
    const ForgotPass03Data = { email, resetCode, newPassword };
    const response = await ForgetPassStep03(ForgotPass03Data);
    if (response) {
      console.log(response);
      return { message: 'عملیات با موفقیت انجام شد',email, resetCode, redirect: '/login' }
    } else {
      return { message: 'داده وارد شده اشتباه می باشد' }
    }
  } catch {
    return { message: 'خطا در سرور' }
  }
  // send data to the Api end
};

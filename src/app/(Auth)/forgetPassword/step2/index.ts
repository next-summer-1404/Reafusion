"use server";

import { forgetPassStep02 } from "@/core/Apis/Auth/ForgetPassStep02";

export const ForgotPass02Action = async (
  state: { message: string; redirect?: string },
  formdata: FormData
) => {
  const code0 = formdata.get("code0") as string;
  const code1 = formdata.get("code1") as string;
  const code2 = formdata.get("code2") as string;
  const code3 = formdata.get("code3") as string;
  const code4 = formdata.get("code4") as string;
  const code5 = formdata.get("code5") as string;
  const email = formdata.get("email") as string;

  const resetCode = [ code0, code1, code2, code3, code4, code5 ].join('')

  try {
    const ForgotPass02Data = { email, resetCode };
    const response = await forgetPassStep02(ForgotPass02Data);
    if (response) {
      console.log(response)
      return { message: "عملیات با موفقیت انجام شد", resetCode, email, redirect: '/forgetPassword/step3' };
    } else {
      return { message: "داده وارد شده نامعتبر هست" };
    }
  } catch {
    return { message: "خطا در سرور" };
  }
};

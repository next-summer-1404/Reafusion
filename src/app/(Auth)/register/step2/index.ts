"use server";

import { postRegisterStep2 } from "@/core/Apis/Auth/RegisterStep2";

export const register02Action = async (
  state: { message: string; redirect?: string },
  formdata: FormData
) => {
  // get data of form
  const code0 = formdata.get("code0") as string;
  const code1 = formdata.get("code1") as string;
  const code2 = formdata.get("code2") as string;
  const code3 = formdata.get("code3") as string;
  const code4 = formdata.get("code4") as string;
  const code5 = formdata.get("code5") as string;
  const tempUserId = formdata.get("tempUserId") as string;

  const verificationCode = [code0, code1, code2, code3, code4, code5].join("");
  // get data of form end
  
  // send data to the Api
  try {
    const register02Data = { tempUserId, verificationCode };
    const response = await postRegisterStep2(register02Data);
    if (response) {
      console.log(response);
      return {
        message: "عملیات با موفقیت انجام شد",
        userId: response.userId,
        tempUserId,
        redirect: "/register/step3",
      };
    } else {
      return { message: "داده وارد شده نامعتبر هست" };
    }
  } catch {
    return { message: "خطا در سرور" };
  }
  // send data to the Api end
};

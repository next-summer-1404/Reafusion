"use server";
import { ForgotPassStep01 } from "@/core/Apis/Auth/ForgetPassStep01";
import z from "zod";

const ForgetPassStep1Schema = z.object({
  email: z.string().email("ایمیل را وارد کنید"),
});

export const forgetPassAction = async (state: { message: string; redirect?: string }, formdata: FormData) => {
  // get value from Form Input
  const email = formdata.get("email") as string;
  // get value from Form Input end
  // conect form to zod for validation
  const parseData = ForgetPassStep1Schema.safeParse({ email });

  if (!parseData.success) {
    const error = parseData.error.flatten().fieldErrors;
    const message = error.email?.join();
    return { message };
  }
  // conect form to zod for validation end
  // send data to the Api 
  try {
    const forgetPassData = { email };
    const response = await ForgotPassStep01(forgetPassData);
    if (response) {
      console.log(response);
      return {
        message: "عملیات با موفقیت انجام شد",
        email,
        redirect: "/forgetPassword/step2",
      };
    } else {
      return { message: "پاسخ نامعتبر" };
    }
  } catch {
    return { message: "خطا در سرور" };
  }
  // send data to the Api end
};

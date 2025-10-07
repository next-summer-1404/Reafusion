"use server";
import { postRegisterStep1 } from "@/core/Apis/Auth/RegisterStep1";
import z from "zod";

const registerStep1Schema = z.object({
  email: z.string().email("ایمیل را وارد کنید"),
});

export const register01Action = async (
  state: { message: string; redirect?: string },
  formdata: FormData
) => {
  // get value from Form Input
  const email = formdata.get("email") as string;
  // get value from Form Input end

  // conect form to zod for validation
  const parseData = registerStep1Schema.safeParse({ email });

  if (!parseData.success) {
    const error = parseData.error.flatten().fieldErrors;
    const message = error.email?.join();
    return { message };
  }
  // conect form to zod for validation end

  // send data to the Api
  try {
    const registerData = { email };
    const response = await postRegisterStep1(registerData);
    if (response) {
      console.log(response);
      return {
        message: "عملیات با موفقیت انجام شد",
        email,
        redirect: "/register/step2",
      };
    } else {
      return { message: "پاسخ نامعتبر" };
    }
  } catch {
    return { message: "خطا در سرور" };
  }
  // send data to the Api end
};

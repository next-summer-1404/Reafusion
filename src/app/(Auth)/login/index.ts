import { postLogin } from "@/core/Apis/Auth/Login/login";
import { z } from "zod";

// the zod for validation
const loginSchema = z.object({
  email: z.string().email("ایمیل را وارد کنید"),
  password: z.string().min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
});

// server action for manage login data and send that to the Api
export const loginAction = async (state: { message: string, redirect?: string }, formdata: FormData) => {
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
      return { message: 'عملیات با موفقیت انجام شد', redirect: '/' };
    } else {
      return { message: "پاسخ نامعتبر است" };
    }
  } catch {
    return { message: 'خطا در سرور' };
  }
  // send data to APi & manage that response end
};
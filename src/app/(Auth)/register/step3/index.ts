'use server'
import { RegisterStep3 } from "@/core/Apis/Auth/RegisterStep3";
import z from "zod";
// the form validation
const registerStep3Schema = z.object({
  userId: z.string().min(2, "یوزر ای دی باید وجود داشته باشد"),
  phoneNumber: z.string().min(11, 'شماره تلفن رو درست وارد کنید باید 11 رقم باشد'),
  password: z.string().min(5, 'رمز عبور رو درست وارد کنید باید بیشتر از 5 رقم باشد'),
});

export const register03Action = async (state: { message: string; redirect?: string }, formdata: FormData) => {
  // get values from form
  const userId = formdata.get('userId') as string;
  const phoneNumber = formdata.get('phoneNumber') as string;
  const password = formdata.get('password') as string;
  // get values from form end
  // connect zod to the form 
  const parseData = registerStep3Schema.safeParse({ userId, phoneNumber, password });

  if (!parseData.success) {
    const error = parseData.error.flatten().fieldErrors;
    const message = Object.values(error).join("، ");
    return { message: message || "لطفاً اطلاعات را به درستی وارد کنید" };
  }
  // connect zod to the form end
  // send all data to the Api 
  try {
    const registerStep3Data = { userId, phoneNumber, password };
    const response = await RegisterStep3(registerStep3Data);
    if (response) {
      console.log(response);
      return {
        message: 'عملیات با موفقیت انجام شد',
        redirect: '/login'
      }
    } else {
      return { message: 'داده وارد شده نامعتبر می باشد' }
    }
  } catch {
    return { message: 'خطا سرور' }
  }
  // send all data to the Api end
}
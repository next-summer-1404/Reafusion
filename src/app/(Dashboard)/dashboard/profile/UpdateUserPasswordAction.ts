'use server'

import { UpdateUserPassword } from "@/core/Apis/Dashboard/UpdateUserPassword";
import { cookies } from "next/headers";

export const UpdateUserPasswordAction = async (state: { message: string}, formdata: FormData) => {
  const currentPassword = formdata.get('currentPassword') as string;
  const newPassword = formdata.get('newPassword') as string;

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value as string;
  
  try {
    const securityDatas = { currentPassword, newPassword };
    const response = await UpdateUserPassword(securityDatas, token)
    if (response) {
      return {
        message: 'رمز عبور شما با موفقیت ثبت شد'
      }
    } else {
      return {
         message: response.message || "خطا در ثبت رمز عبور",
         error: response?.error || "پاسخ نامعتبر از API",
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در ثبت اطلاعات", error: errorMessage };
  }
 
}

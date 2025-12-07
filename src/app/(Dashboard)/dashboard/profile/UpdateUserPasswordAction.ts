'use server'
import { UpdateUserPassword } from "@/core/Apis/Dashboard/UpdateUserPassword";

export const UpdateUserPasswordAction = async (state: { message: string, error?: string }, formdata: FormData): Promise<{ message: string, error?: string }> => {
  const currentPassword = formdata.get('currentPassword') as string;
  const newPassword = formdata.get('newPassword') as string;
  
  try {
    const securityDatas = { currentPassword, newPassword };
    const response = await UpdateUserPassword(securityDatas)
    if (response) {
      return {
        message: 'رمز عبور شما با موفقیت ثبت شد'
      }
    } 
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در ثبت اطلاعات", error: errorMessage };
  }
 
  return { message: "", error: '' };
}

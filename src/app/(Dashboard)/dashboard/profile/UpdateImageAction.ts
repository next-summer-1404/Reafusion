'use server'
import { UpdateUserProfileImage } from "@/core/Apis/Dashboard/UpdateUserProfileImage";
import { cookies } from "next/headers";

export const UpdateImageAction = async (state: { message: string}, formdata: FormData) => {
  const file = formdata.get('picture') as File;

  if (!file || file.size === 0) {
    return { message: "فایلی انتخاب نشده است" };
  }

  // get token
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  // get token end

  const externalFormData = new FormData();
  externalFormData.append('picture', file);

  try {
    const response = await UpdateUserProfileImage(externalFormData, tokenValue);
    if (response) {
      return {
        message: 'عکس شما با موفقیت ثبت شد'
      }
    } else {
      return {
        message: "خطا در ثبت عکس",
        error: response?.error || "پاسخ نامعتبر از API",
      };
    }
  } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
      return { message: "خطا در ثبت اطلاعات", error: errorMessage };
  }
}

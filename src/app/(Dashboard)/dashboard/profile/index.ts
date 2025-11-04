'use server'
import { UpdateUserInformation } from "@/core/Apis/Dashboard/UpdateUserInformation";

export const UpdatePersonalInfoAction = async (state: { message: string}, formdata: FormData) => {
  const firstName = formdata.get("firstName") as string;
  const lastName = formdata.get("lastName") as string;
  const fullName = (firstName + lastName) as string;
  const phoneNumber = formdata.get("phoneNumber") as string;
  const email = formdata.get("email") as string;

  try {
    const personalDatas = { email, fullName, firstName, lastName, phoneNumber };
    const response = await UpdateUserInformation(personalDatas);
    if (response) {
      return {
        message: "اطلاعات شما با موفقیت ثبت شد",
      };
    } else {
      return {
        message: "خطا در ثبت نظر",
        error: response?.error.message || "پاسخ نامعتبر از API",
      };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در ثبت نظر", error: errorMessage };
  }
};

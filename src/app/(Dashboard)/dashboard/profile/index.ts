'use server'
import { UpdateUserInformation } from "@/core/Apis/Dashboard/UpdateUserInformation";

export const UpdatePersonalInfoAction = async (state: { message: string, error?: string }, formdata: FormData): Promise<{ message: string, error?: string }> => {
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
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در ثبت نظر", error: errorMessage };
  }

  return { message: "", error: '' };
};

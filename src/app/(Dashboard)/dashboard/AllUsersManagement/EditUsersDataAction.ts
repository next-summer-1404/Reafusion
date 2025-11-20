'use server'
import { EditAllUsersDatas } from "@/core/Apis/Dashboard/EditAllUsersDatas";

const EditUsersDataAction = async (state: { message: string }, formdata: FormData) => {
  const id = formdata.get('id') as string;
  const email = formdata.get('email') as string;
  const fullName = formdata.get('fullName') as string;
  const firstName = formdata.get('firstName') as string;
  const lastName = formdata.get('lastName') as string;
  const phoneNumber = formdata.get('phoneNumber') as string;
  const emailVerified = formdata.get('emailVerified') as string;
  const membershipDate = formdata.get('membershipDate') as string;
  const profilePicture = formdata.get('profilePicture') as string || '';

  try {
    const EditUsersDatas = { email, fullName, firstName, lastName, phoneNumber, emailVerified, membershipDate, profilePicture };
    const response = await EditAllUsersDatas(EditUsersDatas, id);
    if (response) {
      return {
        message: 'اطلاعات کاربر با موفقیت تغییر کرد'
      }
    } else {
      return {
        message: 'خطا در انجام عملیات'
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message: "خطا در سرور";
    return { message: "خطا در تغییر اطلاعات", error: errorMessage };
  }
}

export default EditUsersDataAction
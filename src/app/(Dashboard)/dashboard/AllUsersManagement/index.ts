'use server'

import { EditUserRole } from "@/core/Apis/Dashboard/EditUserRole";

const EditUserRoleAction = async (state: { message: string }, formdata: FormData) => {
  const id = formdata.get('id') as string;
  const role = formdata.get('role') as string;

  try {
    const response = await EditUserRole(id, role);
    if (response) {
      return {
        message: 'نقش کاربر با موفقیت تغییر کرد , صبر کنید تا نشان داده شود'
      }
    } else {
      return {
        message: 'خطا در انجام عملیات'
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message: "خطا در سرور";
    return { message: "خطا در تغییر نقش", error: errorMessage };
  }
}

export default EditUserRoleAction
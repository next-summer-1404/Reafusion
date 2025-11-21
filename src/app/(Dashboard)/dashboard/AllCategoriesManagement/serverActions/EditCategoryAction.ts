'use server'

import { EditCategories } from "@/core/Apis/Dashboard/EditCategories";

const EditCategoryAction = async (state: { message: string }, formdata: FormData) => {
  const id = formdata.get('id') as string;
  const name = formdata.get('name') as string;

  try {
    const response = await EditCategories(id, name);
    if (response) {
      return {
        message: 'دسته بندی با موفقیت ویرایش شد'
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

export default EditCategoryAction
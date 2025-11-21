"use server";
import { AddCategory } from "@/core/Apis/Dashboard/AddCategory";

const AddCategoryAction = async (state: { message: string }, formdata: FormData) => {
  const name = formdata.get("name") as string;

  try {
    const response = await AddCategory(name);
    if (response) {
      return {
        message: "دسته بندی با موفقیت ایجاد شد",
      };
    } else {
      return {
        message: "خطا در ایجاد دسته بندی",
      };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در تغییر اطلاعات", error: errorMessage };
  }
};

export default AddCategoryAction;
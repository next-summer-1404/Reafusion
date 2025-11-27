'use server'
import { AddLocationAdmin } from "@/core/Apis/Dashboard/AddLocationAdmin";

const AddLocationAction = async (state: { message: string }, formdata: FormData) => {
  const area_name = formdata.get('area_name') as string;
  const lat = formdata.get('lat') as string | number;
  const lng = formdata.get('lng') as string | number; 

  try {
      const UpdateLocationDatas = { area_name, lat, lng };
      const response = await AddLocationAdmin(UpdateLocationDatas);
      if (response) {
        return {
          message: 'مقصد با موفقیت اضافه شد'
        }
      } else {
        return {
          message: 'خطا در اضافه کردن مقصد'
        }
      }
  } catch (error) {
      const errorMessage = error instanceof Error ? error.message: "خطا در سرور";
      return { message: "خطا در افزودن اطلاعات", error: errorMessage };
  }
}

export default AddLocationAction
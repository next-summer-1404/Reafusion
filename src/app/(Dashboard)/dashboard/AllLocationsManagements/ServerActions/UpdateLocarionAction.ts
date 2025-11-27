'use server'
import { EditLocationsDatas } from "@/core/Apis/Dashboard/EditLocationsDatas";

const UpdateLocarionAction = async (state: { message: string }, formdata: FormData) => {
  const id = formdata.get('id') as string;
  const area_name = formdata.get('area_name') as string;
  const lat = formdata.get('lat') as string | number;
  const lng = formdata.get('lng') as string | number; 

  try {
    const UpdateLocationDatas = { area_name, lat, lng };
    const response = await EditLocationsDatas(UpdateLocationDatas, id);
    if (response) {
      return {
        message: 'مقصد با موفقیت ویرایش شد'
      }
    } else {
      return {
        message: 'خطا در ویرایش مقصد'
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message: "خطا در سرور";
    return { message: "خطا در تغییر اطلاعات", error: errorMessage };
  }
} 

export default UpdateLocarionAction
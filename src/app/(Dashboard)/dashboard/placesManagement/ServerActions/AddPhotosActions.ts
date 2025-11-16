'use server'
import { AddHousePhotos } from "@/core/Apis/Dashboard/AddHousePhotos";

const AddPhotosActions = async (state: { message: string}, formdata: FormData) => {
  const houseId = formdata.get("id") as string;
  const photos = formdata.getAll("photos") as File[];

  const apiFormData = new FormData();
  photos.forEach((photo) => {
    if (photo.size > 0) {
      apiFormData.append("photos", photo);
    }
  });

  try {
    const response = await AddHousePhotos(apiFormData, houseId)
    if (response) {
      return {
        message: 'عکس ها با موفقیت ثبت شد'
      }
    } else {
      return {
        message: 'خطا در ثبت عکس شما'
      }
    }
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در انجام عملیات , لطفا دو تا عکس وارد کنید ", error: errorMessage };
  }
}
export default AddPhotosActions
import fetchApi from "@/lib/Interceptor/serverApi";

export const AddHousePhotos = async (apiFormData: FormData, houseId: string) => {
  const response = await fetchApi(`/api/houses/upload/photos/${houseId}`, {
     method: 'POST',
     body: apiFormData,
  });
  return response
}


// import Api from "@/lib/Interceptor"
// import { cookies } from "next/headers";

// export const AddHousePhotos = async (apiFormData: FormData, houseId: string) => {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("token");
//   const tokenValue = token?.value as string;
//   const response = await Api.post(`/api/houses/upload/photos/${houseId}`, apiFormData, {
//     headers: {
//        "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${tokenValue}`,
//     },
//   });
//   return response.data
// }
import Api from "@/lib/Interceptor";
import { cookies } from "next/headers";

interface IAddLocationDatas {
  area_name: string;
  lat: string | number;
  lng: string | number;
}

export const AddLocationAdmin = async (AddLocationDatas: IAddLocationDatas,) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value as string;
  const response = await Api.post(`/api/locations`, AddLocationDatas, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

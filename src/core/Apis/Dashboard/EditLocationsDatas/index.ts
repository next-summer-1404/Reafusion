import Api from "@/lib/Interceptor";
import { cookies } from "next/headers";

interface IUpdateLocationDatas {
  area_name: string;
  lat: string | number;
  lng: string | number;
}

export const EditLocationsDatas = async (UpdateLocationDatas: IUpdateLocationDatas, id: string) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value as string;
  const response = await Api.put(`/api/locations/${id}`, UpdateLocationDatas, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

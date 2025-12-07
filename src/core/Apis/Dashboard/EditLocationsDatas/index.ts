import fetchApi from "@/lib/Interceptor/serverApi";

interface IUpdateLocationDatas {
  area_name: string;
  lat: string | number;
  lng: string | number;
}

export const EditLocationsDatas = async (UpdateLocationDatas: IUpdateLocationDatas, id: string) => {
  const response = await fetchApi(`/api/locations/${id}`, {
    method: 'PUT',
    body: UpdateLocationDatas,
  });
  return response;
};

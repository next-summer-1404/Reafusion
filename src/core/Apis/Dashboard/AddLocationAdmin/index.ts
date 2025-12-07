import fetchApi from "@/lib/Interceptor/serverApi";

interface IAddLocationDatas {
  area_name: string;
  lat: string | number;
  lng: string | number;
}

export const AddLocationAdmin = async (AddLocationDatas: IAddLocationDatas) => {
  const response = await fetchApi(`/api/locations`, {
    method: 'POST',
    body: AddLocationDatas
  });
  return response;
};

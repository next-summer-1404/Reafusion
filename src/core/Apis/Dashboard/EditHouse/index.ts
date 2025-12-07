import fetchApi from "@/lib/Interceptor/serverApi";

interface IUpdatedHouseData {
  photos: string[];
  title: string;
  address: string;
  price: string;
  transaction_type: string;
  rate: number;
  last_updated: string;
  location: {
    lat: number;
    lng: number;
  };
  categories: {
    name: string;
  };
  capacity: number;
  rooms: number;
  bathrooms: number;
  parkings: number;
  yard_type: string;
  tags: string[];
  captions: string;
}

export const EditHouse = async (updatedHouseData : IUpdatedHouseData, id: string) => {
  const response = await fetchApi(`/api/houses/${id}`, {
    method: "PUT",
    body: updatedHouseData
  });
  return response
}

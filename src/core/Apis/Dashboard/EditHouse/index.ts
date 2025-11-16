import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

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
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token')?.value as string
  const response = await Api.put(`/api/houses/${id}`, updatedHouseData, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data
}

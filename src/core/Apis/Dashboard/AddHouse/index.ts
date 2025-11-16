import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

interface IHouseData {
    title: string;
    address: string;
    rate: number;
    price: number;
    tags: string[];
    capacity: number;
    location: {
        lat: number;
        lng: number;
    };
    categories: {
        name: string;
    };
    bathrooms: number;
    parking: number;
    rooms: number;
    yard_type: string;
    transaction_type: "rental" | "mortgage" | "reservation";
    caption: string;
}

export const AddHouse = async (houseData: IHouseData) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const response = await Api.post(`/api/houses`, houseData, {
    headers: {
        Authorization: `Bearer ${tokenValue}`,
    },
  })
  return response.data 
}

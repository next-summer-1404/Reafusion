import fetchApi from "@/lib/Interceptor/serverApi";

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
  const response = await fetchApi<{ id: string }>(`/api/houses`, {
    method: 'POST',
    body: houseData
  })
  return response 
}

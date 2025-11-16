'use server'

import { AddHouse } from "@/core/Apis/Dashboard/AddHouse";

const AddHouseAction = async (state: { message: string}, formdata: FormData) => {
  const title = formdata.get("title") as string;
  const address = formdata.get("address") as string;
  const categories = formdata.get('categories') as string;
  const price = Number(formdata.get("price"));
  const capacity = Number(formdata.get("capacity"));
  const rate = Number(formdata.get("rate") || 0);
  const rooms = Number(formdata.get("rooms"));
  const bathrooms = Number(formdata.get("bathrooms"));
  const parking = Number(formdata.get("parking"));
  const yard_type = formdata.get("yard_type") as string;
  const transaction_type = formdata.get("transaction_type") as | "rental" | "mortgage" | "reservation";
  const caption = (formdata.get("caption") as string);
  const tagsRaw = formdata.getAll("tags"); 
  const tags = tagsRaw.map((tag) => tag.toString()); 
  const lat = Number(formdata.get("lat"));
  const lng = Number(formdata.get("lng"));

  const houseData = {
    title,
    address,
    rate,
    price,
    tags,
    capacity,
    location: { lat, lng },
    categories: { name: categories },
    bathrooms,
    parking,
    rooms,
    yard_type,
    transaction_type,
    caption,
  };

  try {
    const response = await AddHouse(houseData);
    if (response) {
      return {
        message: 'خانه شما با موفقیت شاخته شد',
        newHouseId: response.id
      }
    } else {
      return {
        message: 'خطا در انجا عملیات ساخت'
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در انجام عملیات ", error: errorMessage };
  }

}

export default AddHouseAction
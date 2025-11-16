"use server";
import { EditHouse } from "@/core/Apis/Dashboard/EditHouse";

const EditHouseAction = async (state: { message: string}, formData: FormData) => {
  const id = formData.get("id")?.toString() || "";

  const updatedHouseData = {
    title: formData.get("title")?.toString() || "",
    address: formData.get("address")?.toString() || "",
    price: formData.get("price")?.toString() || "0",
    rate: Number(formData.get("rate") || 0),
    last_updated: new Date().toISOString(),
    capacity: Number(formData.get("houseCapacity") || 0),
    rooms: Number(formData.get("room") || 0),
    bathrooms: Number(formData.get("bathroom") || 0),
    parkings: Number(formData.get("parking") || 0),
    captions: formData.get("captions")?.toString() || "",
    yard_type: formData.get("houseYardType")?.toString() || "",
    transaction_type: formData.get("transactionType")?.toString() || "reservation",
    photos: JSON.parse((formData.get("photos")?.toString() || "[]")) as string[],
    tags: JSON.parse((formData.get("tags")?.toString() || "[]")) as string[],
    location: {
      lat: Number(formData.get("lat") || 0),
      lng: Number(formData.get("lng") || 0),
    },
    categories: {
      name: formData.get("category")?.toString() || "مسکونی",
    },
  };

  try {
    const response = await EditHouse(updatedHouseData, id);
    if (response) {
      return {
        message: 'خانه با موفیت ویرایش شد'
      }
    } else {
      return {
        message: 'خطا در ویرایش'
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return {
      message: "خطا در انجام عملیات",
      error: errorMessage,
    };
  }
};

export default EditHouseAction;

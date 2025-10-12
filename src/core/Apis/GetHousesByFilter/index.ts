import { IApiResponse } from "@/core/Types/IApiResForGetHouses";
import { IHouseFilterParams } from "@/core/Types/IHouseFilterParams";
import Api from "@/lib/Interceptor";

export const getHousesByFilter = async (params: IHouseFilterParams): Promise<IApiResponse> => {
  const queryParams = new URLSearchParams();

  // تبدیل فیلدها به query string
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;

    // اگر آرایه بود (مثل transactionType)
    if (Array.isArray(value)) {
      queryParams.append(key, `[${value.join(",")}]`);
    } else {
      queryParams.append(key, String(value));
    }
  });

  const queryString = queryParams.toString();
  const url = queryString ? `/api/houses?${queryString}` : `/api/houses`;

  const response = await Api.get(url);
  return response.data;
};

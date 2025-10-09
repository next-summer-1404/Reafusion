import Api from "@/lib/Interceptor";

export const getHousesByFilter = async () => {
  const response = await Api.get(`/api/houses`);
  return response;
};

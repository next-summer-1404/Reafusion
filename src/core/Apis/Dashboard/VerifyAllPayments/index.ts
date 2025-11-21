import Api from "@/lib/Interceptor"

export const VerifyAllPayments = async (id: string , token: string ) => {
  const response = await Api.post(`/api/payments/${id}/verify`, {id},  {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data
}

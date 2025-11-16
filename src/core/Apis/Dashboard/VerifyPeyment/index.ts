import Api from "@/lib/Interceptor"

export const VerifyPeyment = async (financeId: string, token: string) => {
  const response = await Api.post(`/api/payments/${financeId}/verify`, { financeId }, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data  
}

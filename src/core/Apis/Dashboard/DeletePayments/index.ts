import Api from "@/lib/Interceptor"

export const DeletePayments = async (id: string , token: string) => {
  const response = await Api.delete(`/api/admin/payments/${id}`,  {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

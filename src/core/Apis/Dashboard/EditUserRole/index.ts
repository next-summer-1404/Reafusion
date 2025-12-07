import fetchApi from "@/lib/Interceptor/serverApi";

export const EditUserRole = async (id: string, role: string) => {
  const response = await fetchApi(`/api/admin/users/${id}/role`, {
    method: 'PUT',
    body: { id, role }
  });
  return response
}

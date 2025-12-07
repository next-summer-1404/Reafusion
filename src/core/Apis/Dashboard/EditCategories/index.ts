import fetchApi from "@/lib/Interceptor/serverApi";

export const EditCategories = async (id: string, name: string) => {
  const response = await fetchApi(`/api/categories/${id}`, {
     method: 'PUT',
     body: { id, name },
  });
  return response
}

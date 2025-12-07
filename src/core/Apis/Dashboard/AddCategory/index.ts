import fetchApi from "@/lib/Interceptor/serverApi";

export const AddCategory = async (name: string) => {
  const response = await fetchApi(`/api/categories`, {
     method: 'POST',
     body: {name}
  });
   return response
}

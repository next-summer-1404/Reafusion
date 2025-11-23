import Api from "@/lib/Interceptor"

export const DeleteDocuments = async (documentId: string, token: string) => {
  const response = await Api.delete(`/api/documents/${documentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data
}

import { IDocumentResponse } from "@/core/types/IDocumentsResponse";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetAllDocuments = async (limit: number, currentPage: number, order: string): Promise<IDocumentResponse> => {
  const response = await fetchApi<IDocumentResponse>(
    `/api/documents?page=${currentPage}&limit=${limit}&order=${order}`
  );
  return response;
};

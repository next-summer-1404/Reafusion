import fetchApi from "@/lib/Interceptor/serverApi";

interface IBlogDataValues {
  id: string;
  title: string;
  caption: string;
  estimated_reading_time: {
    seconds: number;
  };
  author_id: string;
  created_at: string; 
  category_id: string;
}

interface IBlogResponse {
  data: IBlogDataValues[];
  totalCount: number;
}

export const GetBlogList = async (limit?: number,currentPage?: number, title?: string): Promise<IBlogResponse> => {
  const response = await fetchApi<IBlogResponse>(`/api/blogs?page=${currentPage}&limit=${limit}title=${title}`);
  return response
}

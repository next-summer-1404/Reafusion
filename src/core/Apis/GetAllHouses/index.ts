import Api from "@/lib/Interceptor"

export const GetAllHouses = async (currentPage: number, limit: number) => {
    const Response = await Api.get(`/api/houses?page=${currentPage}&limit=${limit}`);
    return Response
}
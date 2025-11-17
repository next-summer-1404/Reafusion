import Api from "@/lib/Interceptor"

export const GetSpecialVilas = async () => {
    const Response = await Api.get(`/api/houses?page=1&limit=50`);
    return Response
}
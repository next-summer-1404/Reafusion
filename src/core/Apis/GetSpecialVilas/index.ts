import Api from "@/lib/Interceptor"

export const GetSpecialVilas = async () => {
    const Response = await Api.get(`/api/houses`);
    return Response
}
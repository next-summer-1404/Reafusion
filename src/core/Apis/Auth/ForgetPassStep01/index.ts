import Api from "@/lib/Interceptor"

interface IForgetPassData {
   email: string
}

export const ForgotPassStep01 = async (forgetPassData: IForgetPassData) => {
    const Response = await Api.post(`/api/auth/forgot-password/request`, forgetPassData);
    return Response.data
}

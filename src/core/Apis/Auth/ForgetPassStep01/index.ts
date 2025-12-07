import fetchApi from "@/lib/Interceptor/serverApi";

interface IForgetPassData {
   email: string
}

export const ForgotPassStep01 = async (forgetPassData: IForgetPassData) => {
    const Response = await fetchApi(`/api/auth/forgot-password/request`, {
        method: "POST",
        body: forgetPassData
    });
    return Response
}

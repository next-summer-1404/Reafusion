import fetchApi from "@/lib/Interceptor/serverApi";

interface IForgetPassData02 {
  resetCode: string;
  email: string;
}

export const forgetPassStep02 = async (ForgotPass02Data: IForgetPassData02) => {
   const Response = await fetchApi(`/api/auth/forgot-password/verify`, {
      method: "POST",
      body: ForgotPass02Data,
   })
   return Response
}
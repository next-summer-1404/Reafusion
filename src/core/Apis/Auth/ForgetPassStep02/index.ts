import Api from "@/lib/Interceptor"

interface IForgetPassData02 {
  resetCode: string;
  email: string;
}

export const forgetPassStep02 = async (ForgotPass02Data: IForgetPassData02) => {
   const Response = await Api.post(`/api/auth/forgot-password/verify`, ForgotPass02Data)
   return Response.data
}
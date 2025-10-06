import Api from "@/lib/Interceptor"

interface IForgotPass03Data {
  email: string;
  resetCode: string;
  newPassword: string;
}

export const ForgetPassStep03 = async (ForgotPass03Data: IForgotPass03Data) => {
   const Response = await Api.post(`/api/auth/forgot-password/reset`, ForgotPass03Data);
   return Response.data
}
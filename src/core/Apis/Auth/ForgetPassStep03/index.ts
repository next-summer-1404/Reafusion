import fetchApi from "@/lib/Interceptor/serverApi";

interface IForgotPass03Data {
  email: string;
  resetCode: string;
  newPassword: string;
}

export const ForgetPassStep03 = async (ForgotPass03Data: IForgotPass03Data) => {
   const Response = await fetchApi(`/api/auth/forgot-password/reset`, {
      method: "POST",
      body: ForgotPass03Data,
   });
   return Response
}
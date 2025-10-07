import Api from "@/lib/Interceptor";

interface IRegisterStep3Data {
  userId: string;
  phoneNumber: string;
  password: string;
}

export const RegisterStep3 = async (registerStep3Data: IRegisterStep3Data) => {
  const Response = await Api.post(`/api/auth/complete-registration`, registerStep3Data);
  return Response.data;
};

import fetchApi from "@/lib/Interceptor/serverApi";

interface IRegisterStep3Data {
  userId: string;
  phoneNumber: string;
  password: string;
}

export const RegisterStep3 = async (registerStep3Data: IRegisterStep3Data) => {
  const Response = await fetchApi(`/api/auth/complete-registration`, {
    method: "POST",
    body: registerStep3Data,
  });
  return Response;
};

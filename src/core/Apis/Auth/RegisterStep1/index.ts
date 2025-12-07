import fetchApi from "@/lib/Interceptor/serverApi";
interface IRegisterStep1 {
  email: string;
}

export const postRegisterStep1 = async (registerData: IRegisterStep1) => {
  const res = await fetchApi<{ tempUserId: string }>("/api/auth/register", {
    method: 'POST',
    body: registerData,
  });
  return res;
};
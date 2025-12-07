import fetchApi from "@/lib/Interceptor/serverApi";

interface IRegisterStep2 {
  tempUserId: string;
  verificationCode: string;
}

export const postRegisterStep2 = async (registerData: IRegisterStep2) => {
  const res = await fetchApi<{ userId: string }>("/api/auth/verify-email", {
    method: "POST",
    body: registerData,
  });
  return res;
};
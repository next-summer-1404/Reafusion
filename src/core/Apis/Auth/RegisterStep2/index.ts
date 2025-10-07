import Api from "@/lib/Interceptor";

interface IRegisterStep2 {
  tempUserId: string;
  verificationCode: string;
}

export const postRegisterStep2 = async (registerData: IRegisterStep2) => {
  const res = await Api.post("/api/auth/verify-email", registerData);
  return res.data;
};
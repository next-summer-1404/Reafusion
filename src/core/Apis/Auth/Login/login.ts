import { ILoginResponse } from "@/core/types/Auth/ILoginResponse";
import Api from "@/lib/Interceptor";

export const postLogin = async (loginData: { email: string, password: string }): Promise<ILoginResponse> => {
  const res = await Api.post("/api/auth/login", loginData);
  return res.data;
};
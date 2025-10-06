import { ILoginResponse } from "@/core/Types/Auth/ILoginResponse";
import { IUserLogin } from "@/core/Types/Auth/IUserLogin";
import Api from "@/lib/Interceptor";

export const postLogin = async (loginData: IUserLogin): Promise<ILoginResponse> => {
  const res = await Api.post("/api/auth/login", loginData);
  return res.data;
};
import { ILoginResponse } from "@/core/types/Auth/ILoginResponse";
import { IUserLogin } from "@/core/types/Auth/IUserLogin";
import fetchApi from "@/lib/Interceptor/serverApi";

export const postLogin = async (loginData: IUserLogin): Promise<ILoginResponse> => {
  const res = await fetchApi<ILoginResponse>("/api/auth/login", {
    method: "POST",
    body: loginData
  });
  return res;
};
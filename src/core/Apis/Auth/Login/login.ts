import { IUserLogin } from "@/core/types/Auth/IUserLogin";
import api from "@/lib/Interceptor";

export const postLogin = async (loginData: IUserLogin): Promise<IUserLogin> => {
  const res = await api.post("/api/auth/login", loginData);
  return res.data;
};

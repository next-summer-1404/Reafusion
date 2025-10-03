import { ILoginResponse } from "@/core/Types/Auth/ILoginResponse";
import api from "@/lib/Interceptor";

export const postLogin = async (data: {
  email: string;
  password: string;
}): Promise<ILoginResponse> => {
  const res = await api.post("/api/auth/login", data);
  return res.data;
};

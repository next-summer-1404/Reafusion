import { IRegisterStep1 } from "@/core/Types/Auth/IRegisterStep1";
import Api from "@/lib/Interceptor/index";

export const postRegisterStep1 = async (registerData: { email: string }) => {
  const res = await Api.post("/api/auth/register", registerData);
  return res;
};

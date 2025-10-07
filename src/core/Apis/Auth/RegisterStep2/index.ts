import { IRegisterStep2 } from "@/core/Types/Auth/IRegister";
import Api from "@/lib/Interceptor";

export const postRegisterStep2 = async (registerData: IRegisterStep2) => {
  const res = await Api.post("/api/auth/verify-email", registerData);
  return res;
};
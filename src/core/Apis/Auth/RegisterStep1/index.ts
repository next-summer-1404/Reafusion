import {
  IRegisterStep1,
  IRegisterStep1Response,
} from "@/core/Types/Auth/IRegister";
import Api from "@/lib/Interceptor/index";

export const postRegisterStep1 = async (
  registerData: IRegisterStep1
): Promise<IRegisterStep1Response> => {
  try {
    const res = await Api.post("/api/auth/register", registerData);
    if (!res.data) {
      throw new Error("پاسخ API خالی است");
    }
    return res.data;
  } catch (error:any) {
    throw new Error(
      error.response?.data?.message || "خطا در ارسال درخواست به API"
    );
  }
};
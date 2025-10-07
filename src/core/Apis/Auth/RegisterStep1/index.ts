import Api from "@/lib/Interceptor/index";
interface IRegisterStep1 {
  email: string;
}
// interface IRegisterStep1Response {
//   message: string;
//   tempUserId: string;
// }

export const postRegisterStep1 = async (registerData: IRegisterStep1) => {
  const res = await Api.post("/api/auth/register", registerData);
  return res.data;
};
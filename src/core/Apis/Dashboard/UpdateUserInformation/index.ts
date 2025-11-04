import Api from "@/lib/Interceptor";
import { cookies } from "next/headers";

interface IpersonalDatas {
  email: string;
  fullName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export const UpdateUserInformation = async (personalDatas: IpersonalDatas) => {
  // get userId for api with token
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const decodToken = JSON.parse(Buffer.from(tokenValue.split(".")[1], 'base64url').toString('utf-8'));
  // get userId for api with token end
  
  const response = await Api.put(`/api/users/${decodToken.id}`, personalDatas, {
    headers: {
        Authorization: `Bearer ${tokenValue}`,
    },
  });
  return response.data;
};

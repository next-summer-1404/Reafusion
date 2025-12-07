import { IUserInformation } from "@/core/types/IUserInformation";
import fetchApi from "@/lib/Interceptor/serverApi";
import { cookies } from "next/headers";

export const GetUserInformation = async (): Promise<IUserInformation> => {
  // get userId for api with token
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const decodToken = JSON.parse(Buffer.from(tokenValue.split(".")[1], 'base64url').toString('utf-8'));
  // get userId for api with token end 
  const response = await fetchApi<IUserInformation>(`/api/users/${decodToken.id}`);
  return response;
};


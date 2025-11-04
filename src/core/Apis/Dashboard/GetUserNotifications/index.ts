import Api from "@/lib/Interceptor";
import { cookies } from "next/headers";

export const GetUserNotifications = async (
  isRead: boolean,
  limit: number,
  currentPage: number
) => {
  // get userId for api with token
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const decodToken = JSON.parse(
    Buffer.from(tokenValue.split(".")[1], "base64url").toString("utf-8")
  );
  // get userId for api with token end
  const response = await Api.get(
    `/api/notifications/${decodToken.id}?page=${currentPage}&limit=${limit}&isRead=${isRead}`,
    {
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    }
  );
  return response;
};

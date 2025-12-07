import { INotificationData } from "@/core/types/INotificationData";
import fetchApi from "@/lib/Interceptor/serverApi";
import { cookies } from "next/headers";

interface INotificationResponse {
  data: INotificationData[];
  totalCount: number;
}

export const GetUserNotifications = async ( isRead: boolean, limit: number, currentPage: number ): Promise<INotificationResponse> => {

  // get userId for api with token
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const decodToken = JSON.parse(
    Buffer.from(tokenValue.split(".")[1], "base64url").toString("utf-8")
  );

  // get userId for api with token end
  const response = await fetchApi<INotificationResponse>(
    `/api/notifications/${decodToken.id}?page=${currentPage}&limit=${limit}&isRead=${isRead}`
  );

  return response;
};

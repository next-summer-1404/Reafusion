import fetchApi from "@/lib/Interceptor/serverApi";
import { cookies } from "next/headers";

interface INotificationId {
  id: string
}

export const MarkAsReadNotification = async (Notificationid: INotificationId) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  console.log(tokenValue)
  const response = await fetchApi(`/api/notifications/${Notificationid.id}/read`, {
     method: 'PUT',
     body: Notificationid,
  });  
  return response;
}

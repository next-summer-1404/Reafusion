import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

interface INotificationId {
  id: string
}

export const MarkAsReadNotification = async (Notificationid: INotificationId) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  console.log(tokenValue)
  const response = await Api.put(`/api/notifications/${Notificationid.id}/read`,{ }, {
    headers: {
        Authorization: `Bearer ${tokenValue}`,
    },
  });  
  return response.data;
}

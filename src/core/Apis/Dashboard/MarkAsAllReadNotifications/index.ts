import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

export const MarkAsAllReadNotifications = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const response = await Api.put(`/api/notifications/mark-all-as-read`, { }, {
    headers: {
        Authorization: `Bearer ${tokenValue}`,
    },
  });
  return response.data;
}

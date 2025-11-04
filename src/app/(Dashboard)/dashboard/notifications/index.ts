'use server'
import { MarkAsReadNotification } from "@/core/Apis/Dashboard/MarkAsReadNotification";

export const MarkAsReadNotificationAction = async (state: { message: string}, formdata: FormData) => {
  const id = formdata.get('id') as string;
  
  try {
    const Notificationid = { id };
    const response = await MarkAsReadNotification(Notificationid);
    if (response) {
      return {
        message: 'اعلان با موفقیت علامت گزاری شد'
      }
    } else {
      return  {
        message: "خطا در علامت گزاری",
        error: response?.error.message || "پاسخ نامعتبر از API",
      };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در علامت گزاری", error: errorMessage };
  }
}

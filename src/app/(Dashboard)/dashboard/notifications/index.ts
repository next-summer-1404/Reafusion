'use server'
import { MarkAsReadNotification } from "@/core/Apis/Dashboard/MarkAsReadNotification";

export const MarkAsReadNotificationAction = async (state: { message: string, error?: string }, formdata: FormData): Promise<{ message: string, error?: string }> => {
  const id = formdata.get('id') as string;
  
  try {
    const Notificationid = { id };
    const response = await MarkAsReadNotification(Notificationid);
    if (response) {
      return {
        message: 'اعلان با موفقیت علامت گزاری شد'
      }
    } 
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در علامت گزاری", error: errorMessage };
  }

  return { message: "", error: '' };
}

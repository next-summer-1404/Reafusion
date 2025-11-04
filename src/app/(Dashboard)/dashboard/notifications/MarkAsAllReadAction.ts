"use server"
import { MarkAsAllReadNotifications } from "@/core/Apis/Dashboard/MarkAsAllReadNotifications";

export const MarkAsAllReadAction = async () => {
  try {
    const response = await MarkAsAllReadNotifications();
    if (response) {
      return { success: true };
    } else {
      return { success: false, message: response.data?.message || "خطا در سرور" };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در علامت گزاری", error: errorMessage };
  }
}

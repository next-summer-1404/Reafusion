'use server'
import { SendTicket } from "@/core/Apis/SendTicket";
import { cookies } from "next/headers";

export const SendTicketAction = async (state: { message: string },formdata: FormData) => {
  const id = formdata.get('id');
  const houseid = formdata.get('houseId');
  const arrivalDate = formdata.get('arrivalDate');
  const departureDate = formdata.get('departureDate');
  const reservedDates = [arrivalDate as string, departureDate as string];
  const sharedEmail = formdata.get('sharedEmail');
  const sharedMobile = formdata.get('phoneNumber');

  const sendTicketData = {
    id: id as string,
    houseid: houseid as string,
    reservedDates,
    sharedEmail: sharedEmail as string,
    sharedMobile: sharedMobile as string,
  };

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value as string;

  try {
    const response = await SendTicket(sendTicketData, token);
    if (response) { 
      return {
        message: 'بلیط شما با موفقیت صادر و ارسال شد'
      }
    } else {
      return { message: "خطا در صدور بلیط", error: response?.error || "پاسخ نامعتبر از API" };
    }
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در صدور بلیط", error: errorMessage };
  }
}
import Api from "@/lib/Interceptor";
import { cookies } from "next/headers";

interface IBookingPaymentDatas {
  amount: string;
  description: string;
  callbackUrl: string;
  bookingId: string;
}

export const CreatePayment = async (BookingPaymentDatas: IBookingPaymentDatas) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const respnse = await Api.post(`/api/payments`, BookingPaymentDatas, {
    headers: {
      Authorization: `Bearer ${tokenValue}`,
    },
  });
  return respnse.data;
};

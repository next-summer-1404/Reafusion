import fetchApi from "@/lib/Interceptor/serverApi";

interface IBookingPaymentDatas {
  amount: string;
  description: string;
  callbackUrl: string;
  bookingId: string;
}

export const CreatePayment = async (BookingPaymentDatas: IBookingPaymentDatas) => {
  const respnse = await fetchApi(`/api/payments`, {
    method: "POST",
    body: BookingPaymentDatas
  });
  return respnse;
};
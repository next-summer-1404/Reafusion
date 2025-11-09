'use server'

import { CreatePayment } from "@/core/Apis/Dashboard/CreatePayment";

export const BookingPaymentAction = async (state: { message: string }, formdata: FormData) => {
  const amount = formdata.get('amount') as string;
  const description = formdata.get('description') as string;
  const callbackUrl = formdata.get('callbackUrl') as string;
  const bookingId = formdata.get('bookingId') as string;

  try {
    const BookingPaymentDatas = { amount, description, callbackUrl, bookingId };
    const response = await CreatePayment(BookingPaymentDatas);
    if (response) {
      return {
        message: 'پرداخت با موفقیت انجام شد'
      }
    } else {
      return {
        message: 'خطا در ایجاد پرداخت'
      }
    }

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در ثبت پرداخت", error: errorMessage };
  }
}

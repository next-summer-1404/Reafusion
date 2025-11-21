'use server'
import { EditPayments } from "@/core/Apis/Dashboard/EditPayments";

const EditPaymentsAction = async (state: { message: string }, formdata: FormData) => {
  const id = formdata.get('id') as string;
  const amount = formdata.get('amount') as string;
  const description = formdata.get('description') as string;
  const status = formdata.get('status') as string;
  const transactionId = formdata.get('transactionId') as string;

  try {
    const EditPaymentDatas = { amount, description, status, transactionId };
    const response = await EditPayments(EditPaymentDatas, id)
    if (response) {
      return {
        message: 'پرداخت با موفقیت ویرایش شد'
      }
    } else {
      return {
        message: 'خطا در انجام عملیات'
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message: "خطا در سرور";
    return { message: "خطا در تغییر اطلاعات", error: errorMessage };
  }
}

export default EditPaymentsAction 
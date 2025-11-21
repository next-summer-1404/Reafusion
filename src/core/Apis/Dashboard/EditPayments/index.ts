import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

interface IEditPaymentDatas {
  amount: string;
  description: string;
  status: string;
  transactionId: string;
}

export const EditPayments = async (EditPaymentDatas: IEditPaymentDatas , id: string) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token')?.value as string;
  const response = await Api.put(`/api/admin/payments/${id}`, EditPaymentDatas, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data;  
}

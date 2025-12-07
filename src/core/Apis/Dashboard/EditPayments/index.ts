import fetchApi from "@/lib/Interceptor/serverApi";

interface IEditPaymentDatas {
  amount: string;
  description: string;
  status: string;
  transactionId: string;
}

export const EditPayments = async (EditPaymentDatas: IEditPaymentDatas , id: string) => {
  const response = await fetchApi(`/api/admin/payments/${id}`, {
      method: 'PUT',
      body: EditPaymentDatas
  });
  return response;  
}

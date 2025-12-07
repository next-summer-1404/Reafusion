import fetchApi from "@/lib/Interceptor/serverApi";

interface IFinancialData {
  totalAmount: number;
  totalBookings: number;
  totalPayments: number;
  totalPerviousMonthAmount: number;
  totalCurrentMonthAmount: number;
}

export const GetDashboardFinance = async (): Promise<IFinancialData> => {
  const response = await fetchApi<IFinancialData>(`/api/seller/finance/dashboard`);
  return response;
};

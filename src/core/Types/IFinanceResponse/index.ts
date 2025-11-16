export interface IFinanceData {
  id: string;
  userId: string;
  bookingId: string;
  amount: string;
  description: string;
  status: string;
  paymentUrl: string;
  transactionId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFinanceResponse {
  data: IFinanceData[];
  totalCount: number;
}
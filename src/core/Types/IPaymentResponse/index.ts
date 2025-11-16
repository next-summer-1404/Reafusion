export interface IPaymentDatas {
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

export interface IPayemntsResponse {
  payments: IPaymentDatas[];
  totalCount: number;
}
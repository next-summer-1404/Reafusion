import FilterPayment from "@/components/Pages/DashboardPages/PaymentPage/FilterPayments";
import PaymentTable from "@/components/Pages/DashboardPages/PaymentPage/PaymentTable";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import { GetPaymentList } from "@/core/Apis/Dashboard/GetPaymentList";
import { IPayemntsResponse } from "@/core/types/IPaymentResponse";
import { AxiosResponse } from "axios";
import React, { FC } from "react";

interface IPaymentPage {
  searchParams: {
    page: string;
    order: string;
    status?: string;
  }
}

const paymentManagement: FC<IPaymentPage> = async ({ searchParams }) => {
  const limit = 4;
  const currentPage = parseInt(searchParams.page || "1", 4);
  const order = searchParams.order;
  const status = searchParams.status;
  console.log(status, order)
  const response = await GetPaymentList(limit, currentPage, order, status) as AxiosResponse<IPayemntsResponse>;
  const { payments, totalCount } = response.data;
  const totalPages = Math.ceil((totalCount as number) / limit);

  return (
    <ScrollReveal className="space-y-4">
      <div className="flex max-sm:flex-col max-sm:gap-4 justify-between">
        <h3 className="text-dark font-bold text-[20px] dark:text-whiteColor">لیست تراکنش های شما</h3>
        <FilterPayment />
      </div>
      <PaymentTable Payments={payments} currentPage={currentPage} totalPages={totalPages}/>
    </ScrollReveal>
  );
};

export default paymentManagement;

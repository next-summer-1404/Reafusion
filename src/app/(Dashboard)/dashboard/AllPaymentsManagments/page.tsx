import AllPaymentTable from "@/components/Pages/DashboardPages/AllPaymentManagementPage/AllPaymentTable";
import AllPaymentManagementFilterBox from "@/components/Pages/DashboardPages/AllPaymentManagementPage/FilterBox/AllPaymentManagementsFilter";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import { GetAllPaymentsList } from "@/core/Apis/Dashboard/GetAllPaymentsList";
import { IAllPaymentsResponse } from "@/core/types/IAllPaymnetsResponse";
import { AxiosResponse } from "axios";
import React, { FC } from "react";

interface IAllPaymentsPage {
  searchParams: {
    page: string;
    order: string;
  }
}

const AllPaymentsManagmentsPage: FC<IAllPaymentsPage> = async ({ searchParams }) => {
  const limit = 15;
  const currentPage = parseInt(searchParams.page || "1", 15);
  const order = searchParams.order || 'DESC';
  const response = await GetAllPaymentsList(limit, currentPage, order) as AxiosResponse<IAllPaymentsResponse>;
  const { data, totalCount } = response.data;
  const totalPages = Math.ceil((totalCount as number) / limit);

  return (
    <ScrollReveal className="space-y-5">
      <div className="flex justify-between">
        <h3 className="text-dark dark:text-whiteColor font-bold text-[20px]">
          مدیریت تمامی پرداخت ها ( {totalCount} )
        </h3>
        <AllPaymentManagementFilterBox />
      </div>
      <AllPaymentTable data={data} currentPage={currentPage} totalPages={totalPages}/>
    </ScrollReveal>
  );
};

export default AllPaymentsManagmentsPage;

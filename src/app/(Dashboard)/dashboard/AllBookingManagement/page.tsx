import AllBookingTable from "@/components/Pages/DashboardPages/AllBookingManagement/AllBookingTable";
import AllPaymentManagementFilterBox from "@/components/Pages/DashboardPages/AllPaymentManagementPage/FilterBox/AllPaymentManagementsFilter";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import { GetAllBookingList } from "@/core/Apis/Dashboard/GetAllBookingList";
import { IBookingData } from "@/core/types/IBookingDatas";
import { AxiosResponse } from "axios";
import React, { FC } from "react";

interface IAllBookingResponse {
  data: IBookingData[];
  totalCount: number;
}

interface IAllBookingManagement {
  searchParams: {
    page: string;
    order: string;
  }
}

const AllBookingManagementPage: FC<IAllBookingManagement> = async ({ searchParams }) => {
  const limit = 25;
  const currentPage = parseInt(searchParams.page || "1", 25);
  const order = searchParams.order || 'DESC'
  const response = await GetAllBookingList(limit, currentPage, order) as AxiosResponse<IAllBookingResponse>;
  const { data, totalCount } = response.data;
  const totalPages = Math.ceil((response.data.totalCount as number) / limit);

  return (
    <ScrollReveal className="space-y-6">
      <div className="flex justify-between">
        <h3 className="text-dark font-bold dark:text-whiteColor text-[20px]">
  مدیریت تمامی رزرو ها            ( {totalCount} )
        </h3>
        <AllPaymentManagementFilterBox />
      </div>
      <AllBookingTable data={data} totalPages={totalPages} currentPage={currentPage}/>
    </ScrollReveal>
  );
};

export default AllBookingManagementPage;

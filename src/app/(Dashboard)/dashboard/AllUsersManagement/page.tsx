import AllUsersManagementTable from "@/components/Pages/DashboardPages/AllUsersManagment/AllUsersManagmentTable";
import UsersManagmentFilters from "@/components/Pages/DashboardPages/AllUsersManagment/UsersManagmentFilters";
import { ManageAllUsers } from "@/core/Apis/Dashboard/ManageAllUsers";
import { IAllUsersResponse } from "@/core/types/IAllUsersResponse";
import { AxiosResponse } from "axios";
import React, { FC } from "react";

interface IAllUserManagement {
  searchParams: {
    page: string;
    role: string;
    order: string;
  }
}

const AllUsersManagementPage: FC<IAllUserManagement> = async ({ searchParams }) => {
  const limit = 25;
  const currentPage = parseInt(searchParams.page || "1", 25);
  const role = searchParams.role || "buyer";
  const order = searchParams.order || "ASC";
  const response = (await ManageAllUsers(currentPage, limit, role, order)) as AxiosResponse<IAllUsersResponse>;
  const { data, totalCount } = response.data;
  const totalPages = Math.ceil((totalCount as number) / limit);

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h3 className="text-dark font-bold text-[20px]">
          مدیریت تمامی کاربران
        </h3>
        <UsersManagmentFilters />
      </div>
      <AllUsersManagementTable data={data} totalPages={totalPages} currentPage={currentPage}/>
    </div>
  );
};

export default AllUsersManagementPage;

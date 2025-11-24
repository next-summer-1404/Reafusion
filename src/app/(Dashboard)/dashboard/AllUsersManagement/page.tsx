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
  // the data which send to api
  const limit = 25;
  const currentPage = parseInt(searchParams.page || "1", 25);
  const role = searchParams.role || "buyer";
  const order = searchParams.order || "ASC";
  // the data which send to api end
  // the call api for get the all user list
  const response = (await ManageAllUsers(currentPage, limit, role, order)) as AxiosResponse<IAllUsersResponse>;
  const { data, totalCount } = response.data;
  const totalPages = Math.ceil((totalCount as number) / limit);
  // the call api for get the all user list end

  return (
    <div className="space-y-6">
      <div className="flex justify-between max-sm:flex-col max-sm:gap-4">
        <h3 className="text-dark font-bold text-[20px] dark:text-whiteColor">
          مدیریت تمامی کاربران ( {totalCount} )
        </h3>
        <UsersManagmentFilters />
      </div>
      <AllUsersManagementTable data={data} totalPages={totalPages} currentPage={currentPage}/>
    </div>
  );
};

export default AllUsersManagementPage;

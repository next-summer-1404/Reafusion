import AllLocationTable from "@/components/Pages/DashboardPages/AllLocationManaegemtn/AllLocationTable";
import AllPaymentManagementFilterBox from "@/components/Pages/DashboardPages/AllPaymentManagementPage/FilterBox/AllPaymentManagementsFilter";
import { GetAllLocations } from "@/core/Apis/Dashboard/GetAllLocations";
import { IAllLocationsResponse } from "@/core/types/IAllLocationsResponse";
import { AxiosResponse } from "axios";
import AddLocationModal from "@/components/Pages/DashboardPages/AllLocationManaegemtn/AddLocationModal"; // فقط اضافه شد
import AddLocationButton from "@/components/Pages/DashboardPages/AllLocationManaegemtn/AddLocationButton";

interface IAllLocationsManagement {
  searchParams: {
    page?: string;
    order?: string;
    add?: string;
  };
}

const AllLocationsManagementsPage = async ({ searchParams }: IAllLocationsManagement) => {
  const limit = 5;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const order = searchParams.order || "DESC";
  const response = await GetAllLocations(limit, currentPage, order) as AxiosResponse<IAllLocationsResponse>;
  const { data, totalCount } = response.data;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="space-y-6">
      <div className="flex justify-between flex-wrap gap-4">
        <h3 className="text-dark dark:text-whiteColor font-bold text-[20px]">
          مدیریت تمامی مقاصد ( {totalCount} )
        </h3>
        <div className="flex gap-3">
          <AddLocationButton />
          <AllPaymentManagementFilterBox />
        </div>
      </div>
      <AllLocationTable data={data} totalPages={totalPages} currentPage={currentPage} />
      <AddLocationModal />
    </div>
  );
};

export default AllLocationsManagementsPage;
import PlaceManagementFilterBox from "@/components/Pages/DashboardPages/PlaceManagmentPage/PlaceManagementFilterBox";
import PlaceTable from "@/components/Pages/DashboardPages/PlaceManagmentPage/PlaceTable";
import { GetAllPlace } from "@/core/Apis/Dashboard/GetAllPlace";
import { IApiResponse } from "@/core/types/IApiResForGetHouses";
import { AxiosResponse } from "axios";
import AddHouseForm from "./AddHouseForm";

interface IPlaceMangement {
  searchParams: {
    page?: string;
    search?: string;
    order?: string;
    transactionType?: "rental" | "mortgage";
    minPrice?: string;
    maxPrice?: string;
    step?: string; 
  };
}

const PlacesManagement = async ({ searchParams }: IPlaceMangement) => {
  // for showing make house steps
  const currentStep = searchParams.step;
  if (currentStep) {
    return <AddHouseForm />;
  }
  // for showing make house steps end
  // the value for filtering which sended to api
  const limit = 5;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const search = searchParams.search || undefined;
  const transactionType = searchParams.transactionType || undefined;
  const order = searchParams.order || undefined;
  const minPrice = searchParams.minPrice ? Number(searchParams.minPrice) : undefined;
  const maxPrice = searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined;
  // the value for filtering which sended to api end
  // call seler houses Api
  const response = (await GetAllPlace(
    limit,
    currentPage,
    search,
    transactionType,
    order,
    minPrice,
    maxPrice
  )) as AxiosResponse<IApiResponse>;
  const { houses, totalCount } = response.data;
  // call seler houses Api end
  // calcude the pages for pagenation
  const totalPages = Math.ceil(totalCount as number / limit);
  // calcude the pages for pagenation end

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-dark text-[24px] font-bold">مدیریت املاک</h3>
        <PlaceManagementFilterBox />
      </div>
      <PlaceTable houses={houses} totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default PlacesManagement;
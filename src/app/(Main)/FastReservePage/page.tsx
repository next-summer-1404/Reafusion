import FilteringList from "@/components/Pages/FastReservePage/Filtering";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import Breadcrumb from "@/components/Ui/Breadcrumb";
import Container from "@/components/Ui/Container/Container";
import CustomPagination from "@/components/Ui/CustomPagination";
import { GetAllHouses } from "@/core/Apis/GetAllHouses";
import { IApiResponse } from "@/core/Types/IApiResForGetHouses";
import { IFastReservePage } from "@/core/Types/IFastReservePage";
import { AxiosResponse } from "axios";
import { FC } from "react";

const FastReservePage: FC<IFastReservePage> = async ({ searchParams }) => {
  // the data for filtering or pagination
  const limit = 9;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const Search = searchParams.search;
  const transactionType = searchParams.transactionType;
  const minPrice = searchParams.minPrice;
  const maxPrice = searchParams.maxPrice;
  // the data for filtering or pagination end
  // call api and send the data to that
  const response = (await GetAllHouses(
    currentPage,
    limit,
    Search,
    transactionType,
    minPrice,
    maxPrice
  )) as AxiosResponse<IApiResponse>;
  const { houses, totalCount } = response.data;
  // call api and send the data to that end
  // get all location list for showing in the map
  const locations = houses.map((house) => house.location);
  // get all location list for showing in the map end
  // calculated total pages
  const totalPages = Math.ceil((totalCount as number) / limit);
  // calculated total pages end

  return (
    <Container>
      <ScrollReveal>
          <Breadcrumb
            homeElement={"خانه"}
            activeClasses="!text-dark dark:!text-thidary !font-bold"
            containerClasses="flex gap-4"
            listClasses="hover:text-dark dark:hover:text-borderColor text-gray dark:text-white"
            capitalizeLinks
          />
          <FilteringList ItemLength={totalCount} locations={locations} houses={houses} />
      </ScrollReveal>
      <CustomPagination totalPages={totalPages} currentPage={currentPage} />
    </Container>
  );
};

export default FastReservePage;
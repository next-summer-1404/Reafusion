import FilteringList from "@/components/Pages/FastReservePage/Filtering";
import Breadcrumb from "@/components/Ui/Breadcrumb";
import Container from "@/components/Ui/Container/Container";
import CustomPagination from "@/components/Ui/CustomPagination";
import HouseCard from "@/components/Ui/HouseCard";
import { GetAllHouses } from "@/core/Apis/GetAllHouses";
import { IApiResponse } from "@/core/Types/IApiResForGetHouses";
import { AxiosResponse } from "axios";
import { FC } from "react";

interface IFastReservePage {
  searchParams: {
    page?: string;
    search?: string;
    transactionType?: "rental" | "mortgage";
    minPrice?: number;
    maxPrice?: number;
  };
}

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

  // calculated total pages
  const totalPages = Math.ceil((totalCount as number) / limit);
  // calculated total pages end

  return (
    <Container>
      <Breadcrumb
        homeElement={"خانه"}
        activeClasses="!text-[#1E2022] !font-bold"
        containerClasses="flex gap-4"
        listClasses="hover:text-[#1E2022] text-[#777777]"
        capitalizeLinks
      />
      
      <FilteringList ItemLength={totalCount} />

      <div className="pt-2 flex justify-between flex-wrap space-y-10 max-lg:justify-around">
        {houses.map((house) => (
          <HouseCard
            key={house.id}
            HomeName={house.title}
            HomeAddress={house.address}
            HomePrice={house.price}
            HomeOffer={house.discounted_price}
            HomeImage={house.photos}
            HomeBathroomCount={house.bathrooms}
            HomeParkingCount={house.parking}
            HomeCapacityCount={house.capacity}
            HomeRoomCount={house.rooms}
          />
        ))}
      </div>

      <CustomPagination totalPages={totalPages} currentPage={currentPage} />
    </Container>
  );
};

export default FastReservePage;

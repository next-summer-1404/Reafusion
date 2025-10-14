import Breadcrumb from "@/components/Ui/Breadcrumb";
import Container from "@/components/Ui/Container/Container";
import { GetAllHouses } from "@/core/Apis/GetAllHouses";
import { AxiosResponse } from "axios";
import { IApiResponse } from "@/core/types/IApiResForGetHouses";
import HouseCard from "@/components/Ui/HouseCard";
import { FC } from "react";
import CustomPagination from "@/components/Ui/CustomPagination";
import FilterBox from "@/components/Pages/MortageAndRent/FilterBox";

interface IMortageAndRent {
  searchParams: {
    page?: string;
  };
}

const MortageAndRentPage: FC<IMortageAndRent> = async ({ searchParams }) => {
  const limit = 9;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const Search = "";
  const transactionType = "";
  const response = await GetAllHouses(
    currentPage,
    limit,
    Search,
    transactionType
  ) as AxiosResponse<IApiResponse>;
  const { houses, totalCount } = response.data;

  const totalPages = Math.ceil((totalCount as number) / limit);

  return (
    <Container className="flex flex-col gap-10">
      <Breadcrumb
        homeElement={"خانه"}
        activeClasses="!text-[#1E2022] !font-bold"
        containerClasses="flex gap-4"
        listClasses="hover:text-[#1E2022] text-[#777777]"
        capitalizeLinks
      />
      <FilterBox itemsLenght={totalCount} />
      <div className="pt-2 flex justify-between flex-wrap space-y-10 max-lg:justify-around">
        {houses.map((house) => (
          <HouseCard
            key={house.id}
            id={house.id}
            HomeName={house.title}
            HomeAddress={house.address}
            HomePrice={house.price}
            HomeOffer={house.discounted_price}
            HomeImage={house.photos}
            HomeBathroomCount={house.bathrooms}
            HomeParkingCount={house.parking}
            HomeCapacityCount={house.capacity}
            HomeRoomCount={house.rooms}
            DetailAdress={"mortageAndRent"}
          />
        ))}
      </div>
      <CustomPagination totalPages={totalPages} currentPage={currentPage} />
    </Container>
  );
};

export default MortageAndRentPage;

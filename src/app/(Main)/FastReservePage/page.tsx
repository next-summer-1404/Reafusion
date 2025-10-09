import FilteringList from "@/components/Pages/FastReservePage/Filtering";
import Breadcrumb from "@/components/Ui/Breadcrumb";
import Container from "@/components/Ui/Container/Container";
import CustomPagination from "@/components/Ui/CustomPagination";
import HouseCard from "@/components/Ui/HouseCard";
import { GetAllHouses } from "@/core/Apis/GetAllHouses";
import { IApiResponse } from "@/core/types/IApiResForGetHouses";
import { AxiosResponse } from "axios";
import { FC } from "react";

interface IFastReservePage {
  searchParams: { page?: string };
}

const FastReservePage: FC<IFastReservePage> = async ({ searchParams }) => {
  // call api and send the currentPage and limit data to the api
  const limit = 9;
  const currentPage = parseInt(searchParams.page || '1', 10);
  const response = await GetAllHouses(currentPage, limit) as AxiosResponse<IApiResponse>;
  const { houses, totalCount } = response.data;
  // call api and send the currentPage and limit data to the api end
  
  // calculated total pages 
  const totalPages = Math.ceil(totalCount as number / limit);
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
      <FilteringList ItemLength={totalCount}/>
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
import Breadcrumb from "@/components/Ui/Breadcrumb";
import Container from "@/components/Ui/Container/Container";
import { GetAllHouses } from "@/core/Apis/GetAllHouses";
import { AxiosResponse } from "axios";
import HouseCard from "@/components/Ui/HouseCard";
import { FC } from "react";
import CustomPagination from "@/components/Ui/CustomPagination";
import FilterBox from "@/components/Pages/MortageAndRent/FilterBox";
import { IMortageAndRent } from "@/core/Types/IMortageAndRent";
import { IApiResponse } from "@/core/Types/IApiResForGetHouses";

const MortageAndRentPage: FC<IMortageAndRent> = async ({ searchParams }) => {
  // the data of searchParams witch send that to Api
  const limit = 9;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const Search = searchParams.search;
  const transactionType = searchParams.transactionType;
  const minPrice = searchParams.minPrice;
  const maxPrice = searchParams.maxPrice;
  const minMortgage = searchParams.minMortgage;
  const maxMortgage = searchParams.maxMortgage;
  const minRent = searchParams.minRent;
  const maxRent = searchParams.maxRent;
  // const minArea = searchParams.minArea;
  // const maxArea = searchParams.maxArea;
  const location = searchParams.location || "";
  const sort = searchParams.sort;
  // the data of searchParams witch send that to Api
  // call Api and send Params to that
  const response = (await GetAllHouses(
    currentPage, limit, Search, transactionType, minPrice,
    maxPrice, minMortgage, maxMortgage, minRent, maxRent, // minArea, // maxArea,
    location, sort
  )) as AxiosResponse<IApiResponse>;
  const { houses, totalCount } = response.data;
  // call Api and send Params to that end
  // calculate count of the totalPage
  const totalPages = Math.ceil((totalCount as number) / limit);
  // calculate count of the totalPage

  return (
    <Container className="flex flex-col gap-10">
      <Breadcrumb
        homeElement={"خانه"}
        activeClasses="!text-dark !font-bold"
        containerClasses="flex gap-4"
        listClasses="hover:text-dark text-gray"
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
      {totalPages > 1 && (
        <CustomPagination totalPages={totalPages} currentPage={currentPage} />
      )}
    </Container>
  );
};

export default MortageAndRentPage;
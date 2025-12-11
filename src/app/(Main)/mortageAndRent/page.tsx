import Breadcrumb from "@/components/Ui/Breadcrumb";
import Container from "@/components/Ui/Container/Container";
import { GetAllHouses } from "@/core/Apis/GetAllHouses";
import HouseCard from "@/components/Ui/HouseCard";
import { FC } from "react";
import CustomPagination from "@/components/Ui/CustomPagination";
import FilterBox from "@/components/Pages/MortageAndRent/FilterBox";
import { IMortageAndRent } from "@/core/Types/IMortageAndRent";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'رهن و اجاره املاک ',
    description: 'در این صفحه شما میتوانید خانه ها را رهن یا اجاره کنید به بهترین شکل ممکن و همچنین میتوانید خانه ها را برسی و تحلیل هم کنید',
    keywords: ['رهن خانه', 'اجاره خانه', 'رهن و اجاره خانه', 'رهن املاک', 'اجاره املاک',]
  }
}

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
  ));
  const { houses, totalCount } = response;
  // call Api and send Params to that end
  // calculate count of the totalPage
  const totalPages = Math.ceil((totalCount as number) / limit);
  // calculate count of the totalPage

  return (
    <Container className="flex flex-col gap-10">
      <ScrollReveal>
          <Breadcrumb
            homeElement={"خانه"}
            activeClasses="!text-dark !font-bold dark:!text-thidary"
            containerClasses="flex gap-4"
            listClasses="hover:text-dark text-gray dark:text-white dark:hover:text-borderColor"
            capitalizeLinks
          />
          <FilterBox itemsLenght={totalCount} />
      </ScrollReveal>
     <ScrollReveal>
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
      </ScrollReveal>
    </Container>
  );
};

export default MortageAndRentPage;
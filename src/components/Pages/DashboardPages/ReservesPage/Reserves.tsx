// app/dashboard/reserves/page.tsx
import ReservesTable from "./ReservesTable";
import FiltersModal from "./FiltersModal/index";
import FilterButton from "./FilterButton";
import { FC } from "react";
import { GetBookingList } from "@/core/Apis/Dashboard/GetBookingList";
import { IBookingData } from "@/core/types/IBookingDatas";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";

interface IReserveList {
  searchParams: {
    modal?: string;
    page?: string;
    detail?: string;
    submodal?: string;
    payment?: string;
    status?: "pending" | "canceled" | "confirmed",
  };
}

const Reserves: FC<IReserveList> = async ({ searchParams }) => {
  const isModalOpen = searchParams.modal === "filters";
  const selectedHouseId = searchParams.detail ? parseInt(searchParams.detail, 10) : undefined;
  const activeSubModal = searchParams.submodal;

  const limit = 4;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const status = searchParams.status;

  const response = await GetBookingList(limit, currentPage, status);
  const bookings: IBookingData[] = response.data.data;
  const totalPages = Math.ceil((response.data.totalCount as number) / limit);
  console.log(bookings)

  return (
    <ScrollReveal className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl text-dark">لیست رزرو های شما</h2>
        <FilterButton />
      </div>

      <ReservesTable
        data={bookings}
        totalPages={totalPages}
        currentPage={currentPage}
        selectedHouseId={selectedHouseId}
        activeSubModal={activeSubModal}
      />

      <FiltersModal open={isModalOpen} />
    </ScrollReveal>
  );
};

export default Reserves;
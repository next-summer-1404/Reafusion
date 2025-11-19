import FavoriteTable from "@/components/Pages/DashboardPages/FavoritePage/FavoriteTable";
import FilterBox from "@/components/Pages/DashboardPages/FavoritePage/FilterBox";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import { GetFavoriteList } from "@/core/Apis/Dashboard/GetFavoriteList";
import { IFavoriteResponse } from "@/core/types/IFavoriteResponse";
import { AxiosResponse } from "axios";
import React, { FC } from "react";

interface IFavoritePage {
  searchParams: {
    page: string;
    order: string;
  }
}

const FavoriteManagement: FC<IFavoritePage> = async ({ searchParams }) => {
  const limit = 3;
  const currentPage = parseInt(searchParams.page || "1", 3);
  const order = searchParams.order
  const response = (await GetFavoriteList(limit, currentPage, order)) as AxiosResponse<IFavoriteResponse>;
  const { data, totalCount } = response.data;
  console.log(data, totalCount);
  const totalPages = Math.ceil((totalCount as number) / limit);

  return (
    <ScrollReveal className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-dark font-bold text-[20px]">لیست علاقه مندی ها</h3>
        <FilterBox />
      </div>
      <FavoriteTable data={data} totalPages={totalPages} currentPage={currentPage}/>
    </ScrollReveal>
  );
};

export default FavoriteManagement;
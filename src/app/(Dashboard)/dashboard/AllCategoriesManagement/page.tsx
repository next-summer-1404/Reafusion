import AddCategoryModal from '@/components/Pages/DashboardPages/AllCategoriesManaenmentPage/AddCategoryModal';
import CategoryTable from '@/components/Pages/DashboardPages/AllCategoriesManaenmentPage/CategoryTable';
import AllPaymentManagementFilterBox from '@/components/Pages/DashboardPages/AllPaymentManagementPage/FilterBox/AllPaymentManagementsFilter';
import FillButton from '@/components/Ui/Buttons/FillButton';
import { GetAllCategorys } from '@/core/Apis/Dashboard/GetAllCategorys';
import { ICategoryResponse } from '@/core/types/ICategoriesResponse';
import { AxiosResponse } from 'axios';
import Link from 'next/link';
import React, { FC } from 'react'

interface IAllCategoriesManagement {
  searchParams: {
    page: string;
    order: string
    modal?: string;
  }
}

const AllCategoriesManagementPage: FC<IAllCategoriesManagement> = async ({ searchParams }) => {
  const limit = 6;
  const currentPage = parseInt(searchParams.page || "1", 6);
  const order = searchParams.order
  const response = await GetAllCategorys(limit, currentPage, order) as AxiosResponse<ICategoryResponse>;
  const { data, totalCount} = response.data;
  const totalPages = Math.ceil((totalCount as number) / limit);

  const isAddModalOpen = searchParams.modal === "add";
  const params = new URLSearchParams();
  if (searchParams.page) params.set("page", searchParams.page);
  if (searchParams.order) params.set("order", searchParams.order);
  params.set("modal", "add");

  const addCategoryUrl = `?${params.toString()}`;

  return (
    <div className='space-y-5'>
      <div className="flex justify-between flex-wrap gap-3">
        <h3 className="text-dark font-bold text-[20px]">
          مدیریت تمامی دسته بندی ها ( {totalCount} )
        </h3>
        <div className='flex gap-3'>
          <Link href={addCategoryUrl}>
            <FillButton ButtonText='افزودن دسته بندی' className='rounded-[13px] px-5 p-3'  />
          </Link>
          <AllPaymentManagementFilterBox />
        </div>
      </div>
      <CategoryTable data={data} totalPages={totalPages} currentPage={currentPage}/>

      <AddCategoryModal open={isAddModalOpen} searchParams={searchParams} />
    </div>
  )
}

export default AllCategoriesManagementPage;
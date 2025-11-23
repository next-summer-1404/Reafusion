import AllHousesTable from '@/components/Pages/DashboardPages/AllHouseManagement/AllHousesTable'
import AllPaymentManagementFilterBox from '@/components/Pages/DashboardPages/AllPaymentManagementPage/FilterBox/AllPaymentManagementsFilter'
import { GetAllHousesAdmin } from '@/core/Apis/Dashboard/GetAllHouses'
import { IHouse } from '@/core/types/IHouse'
import { AxiosResponse } from 'axios'
import React, { FC } from 'react'

interface IAllHousesAdmin {
  data: IHouse[];
  totalCount: number;
}

interface IAllHousesManaegment {
  searchParams: {
    page: string;
    order: string;
  }
}

const AllHousesManagementPage: FC<IAllHousesManaegment> = async ({ searchParams }) => {
  const limit = 10;
  const currentPage = parseInt(searchParams.page || "1", 8);
  const order = searchParams.order || 'DESC';
  const response = await GetAllHousesAdmin(limit, currentPage, order) as AxiosResponse<IAllHousesAdmin>
  const { data, totalCount } = response.data;
  const totalPages = Math.ceil((totalCount as number) / limit);

  return (
    <div className='space-y-5'>
      <div className="flex justify-between">
        <h3 className="text-dark font-bold text-[20px]">
          مدیریت تمامی ملک ها ( {totalCount} )
        </h3>
        <AllPaymentManagementFilterBox />
      </div>
      <AllHousesTable data={data} totalPages={totalPages} currentPage={currentPage}/>
    </div>
  )
}

export default AllHousesManagementPage;
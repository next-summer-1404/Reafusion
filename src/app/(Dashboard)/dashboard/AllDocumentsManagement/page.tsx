import DocumentsTable from "@/components/Pages/DashboardPages/AllDocumentManagement/DocumentsTable";
import AllPaymentManagementFilterBox from "@/components/Pages/DashboardPages/AllPaymentManagementPage/FilterBox/AllPaymentManagementsFilter";
import { GetAllDocuments } from "@/core/Apis/Dashboard/GetAllDocuments";
import { IDocumentResponse } from "@/core/types/IDocumentsResponse";
import { AxiosResponse } from "axios";
import React, { FC } from "react";

interface IAllDocumentsManaegment {
  searchParams: {
    page: string;
    order: string;
  }
}

const AllDocumentsManagementPage: FC<IAllDocumentsManaegment> = async ({ searchParams }) => {
  const limit = 8;
  const currentPage = parseInt(searchParams.page || "1", 8);
  const order = searchParams.order || 'DESC';
  const response = (await GetAllDocuments(limit, currentPage, order)) as AxiosResponse<IDocumentResponse>;
  const { documents, totalCount } = response.data;
  const totalPages = Math.ceil((totalCount as number) / limit);

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h3 className="text-dark font-bold text-[20px]">
          مدیریت تمامی سند ها ( {totalCount} )
        </h3>
        <AllPaymentManagementFilterBox />
      </div>
      <DocumentsTable documents={documents} totalPages={totalPages} currentPage={currentPage}/>
    </div>
  );
};

export default AllDocumentsManagementPage;

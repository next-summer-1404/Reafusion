import DocumentsTable from "@/components/Pages/DashboardPages/AllDocumentManagement/DocumentsTable";
import AllPaymentManagementFilterBox from "@/components/Pages/DashboardPages/AllPaymentManagementPage/FilterBox/AllPaymentManagementsFilter";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import { GetAllDocuments } from "@/core/Apis/Dashboard/GetAllDocuments";
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
  const response = (await GetAllDocuments(limit, currentPage, order));
  const { documents, totalCount } = response;
  const totalPages = Math.ceil((totalCount as number) / limit);

  return (
    <ScrollReveal className="space-y-6">
      <div className="flex justify-between">
        <h3 className="text-dark dark:text-whiteColor font-bold text-[20px]">
          مدیریت تمامی سند ها ( {totalCount} )
        </h3>
        <AllPaymentManagementFilterBox />
      </div>
      <DocumentsTable documents={documents} totalPages={totalPages} currentPage={currentPage}/>
    </ScrollReveal>
  );
};

export default AllDocumentsManagementPage;

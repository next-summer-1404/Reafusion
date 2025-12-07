import CommentFilterBox from "@/components/Pages/DashboardPages/CommentsManagementPage/CommentFilterBox";
import CommentsTable from "@/components/Pages/DashboardPages/CommentsManagementPage/CommentsTable";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import { GetAllCommentsList } from "@/core/Apis/Dashboard/GetAllCommentsList";
import React, { FC } from "react";

interface ICommentsManagement {
  searchParams: {
    page: string;
    order: string;
  }
}

const CommentsManagementPage: FC<ICommentsManagement> = async ({ searchParams }) => {
  const limit = 30;
  const currentPage = parseInt(searchParams.page || "1", 25);
  const order = searchParams.order || 'DESC';
  const response = (await GetAllCommentsList(limit, currentPage, order));
  const { data, totalCount } = response;
  const totalPages = Math.ceil((totalCount as number) / limit);

  return (
    <ScrollReveal className="space-y-5">
      <div className="flex justify-between">
        <h3 className="text-dark font-bold dark:text-whiteColor text-[20px]">
          مدیریت نظرات کاربران ( {totalCount} )
        </h3>
        <CommentFilterBox />
      </div>
      <CommentsTable data={data} totalPages={totalPages} currentPage={currentPage}/>
    </ScrollReveal>
  );
};

export default CommentsManagementPage;

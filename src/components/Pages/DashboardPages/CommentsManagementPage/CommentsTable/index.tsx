import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ICommentsDatas } from "@/core/types/IAllCommentsList";
import CustomPagination2 from "@/components/Ui/CustomPagination2";
import CommentActionMenu from "../CommentActionMenu";
import { cookies } from "next/headers";

interface IProps {
  data: ICommentsDatas[];
  totalPages: number;
  currentPage: number
}

const CommentsTable: FC<IProps> = async ({ data, totalPages, currentPage }) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token')?.value as string;

  return (
    <TableContainer
      elevation={0}
      component={Paper}
      className="!rounded-3xl pt-3 pb-8 dark:!bg-background"
    >
      <Table sx={{ minWidth: 650 }} aria-label="reserves table">
        <TableHead>
          <TableRow>
            <TableCell
              className="dark:!text-whiteColor"
              align="right"
              sx={{
                px: 4,
                py: 3,
                width: "300px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              عنوان
            </TableCell>
            <TableCell
            className="dark:!text-whiteColor"
              align="right"
              sx={{
                py: 3,
                px: 3,
                width: "400px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              توضیحات
            </TableCell>
            <TableCell
            className="dark:!text-whiteColor"
              align="right"
              sx={{
                py: 3,
                px: 1,
                width: "200px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              تاریخ ساخت
            </TableCell>
             <TableCell
             className="dark:!text-whiteColor"
              align="right"
              sx={{
                py: 3,
                px: 0,
                width: "100px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
               امتیاز
            </TableCell>
            <TableCell
            className="dark:!text-whiteColor"
              align="right"
              sx={{ py: 3, fontWeight: "bold", fontSize: 16 }}
            >
              عملیات
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((items) => (
            <TableRow
              key={items.id}
              className="hover:!bg-lightPrimary transition-colors dark:hover:!bg-dark"
            >
              <TableCell
                component="th"
                scope="row"
                className="!text-primary dark:!text-thidary"
                align="right"
                sx={{ width: "240px", px: 4, py: 2 }}
              >
                {items.title || '---------------'}
              </TableCell>
              <TableCell align="right" className="!max-w-[350px] !px-6 !overflow-hidden dark:!text-whiteColor !truncate" sx={{ px: 0, py: 2 }}>
                {items.caption || '---------------'}
              </TableCell>
              <TableCell className="dark:!text-whiteColor" align="right" sx={{ px: 0, py: 2 }}>
                {items.created_at.slice(0, 10)} - {items.created_at.slice(11, 16)}
              </TableCell>
              <TableCell className="dark:!text-whiteColor" align="right" sx={{ px: 2, py: 2 }}>
                {items.rating || '0'}
              </TableCell>
              <TableCell
                align="right"
                className="!px-4 cursor-pointer"
                sx={{ px: 0, py: 2 }}
              >
                <CommentActionMenu currentTitle={items.title} currentCaption={items.caption} currentRating={items.rating} token={token} id={items.id}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {totalPages > 1 && (
          <div className="p-5 pl-5">
            <CustomPagination2 totalPages={totalPages} currentPage={currentPage} />
          </div>
      )}
    </TableContainer>
  );
};

export default CommentsTable;

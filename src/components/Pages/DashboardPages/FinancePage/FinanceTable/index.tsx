import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FinanceFilterBox from "../FinanceFilterBox";
import GetFinanceList from "@/core/Apis/Dashboard/FinanceList";
import FinanceActionMenu from "./FinanceActionMenu";
import CustomPagination2 from "@/components/Ui/CustomPagination2";

interface IProps {
  searchParams: {
    page?: string;
    paymentStatus: string;
  }
  token: string;
}

const FinanceTable: FC<IProps> = async ({ searchParams, token }) => {
  const limit = 5;
  const currentPage = parseInt(searchParams.page || "1", 5);
  const paymentStatus = searchParams.paymentStatus || ""
  const response = (await GetFinanceList(limit, currentPage, paymentStatus));
  const { data, totalCount } = response;
  const totalPages = Math.ceil((totalCount as number) / limit);

  return (
    <TableContainer
      elevation={0}
      component={Paper}
      className="!rounded-3xl pt-3 pb-8 dark:!bg-background"
    >
      <div className="flex justify-between px-7 pt-5">
        <h3 className="text-[24px] text-primary dark:text-thidary font-bold">
          لیست تراکنش های مشتریان ({totalCount})
        </h3>
        <FinanceFilterBox />
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="reserves table">
        <TableHead>
          <TableRow>
            <TableCell
              align="right"
              className="dark:!text-whiteColor"
              sx={{
                px: 4,
                py: 3,
                width: "200px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              تاریخ
            </TableCell>
            <TableCell
              align="right"
              className="dark:!text-whiteColor"
              sx={{
                py: 3,
                px: 0,
                width: "300px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              توضیحات
            </TableCell>
            <TableCell
              align="right"
              className="dark:!text-whiteColor"
              sx={{
                py: 3,
                px: 0,
                width: "150px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              مبلغ
            </TableCell>
            <TableCell
              align="right"
              className="dark:!text-whiteColor"
              sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}
            >
              وضعیت پرداخت
            </TableCell>
            <TableCell
              align="right"
              className="dark:!text-whiteColor"
              sx={{ py: 3, fontWeight: "bold", fontSize: 16 }}
            >
              عملیات
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((items) => (
            <TableRow key={items.id} className="hover:!bg-lightPrimary dark:hover:!bg-dark transition-colors">
              <TableCell
                component="th"
                scope="row"
                className="text-primary dark:!text-thidary"
                align="right"
                sx={{ width: "300px", px: 4, py: 2 }}
              >
                {items.createdAt.slice(0,10)} - {items.createdAt.slice(11,16)}
              </TableCell>
              <TableCell className="dark:!text-whiteColor" align="right" sx={{ px: 0, py: 2 }}>
                {items.description === 'Payment' ? 'پرداخت' : items.description}
              </TableCell>
              <TableCell className="dark:!text-whiteColor" align="right" sx={{ px: 0, py: 2 }}>
                {items.amount} تومان 
              </TableCell>
              <TableCell align="right" className="!px-8" sx={{ px: 0, py: 2 }}>
                {items.status === 'completed' ? (
                 <div className="py-1 px-2 rounded-lg w-fit text-sm bg-lightGreen text-success">تایید شده</div>
                ) : (
                  <div className="bg-lightRed text-red py-1 px-2 rounded-lg w-fit text-sm">تایید نشده</div>
                ) }
              </TableCell>
              <TableCell
                align="right"
                className="!px-7 cursor-pointer"
                sx={{ px: 0, py: 2 }}
              >
                {items.status === 'completed' ? (
                 <h3 className="px-2 text-primary dark:text-thidary">----</h3>
                ) : (
                   <FinanceActionMenu financeId={items.id} token={token}/>
                ) }
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

export default FinanceTable;

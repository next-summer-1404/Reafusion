import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IAllPaymnetsDatas } from "@/core/types/IAllPaymnetsResponse";
import CustomBadge3 from "@/components/Ui/CustomBadge/CustmeBadge3";
import CustomPagination2 from "@/components/Ui/CustomPagination2";
import PaymentActionMenu from "../PaymentActionMenu";
import { cookies } from "next/headers";

interface IProps {
  data: IAllPaymnetsDatas[];
  currentPage: number;
  totalPages: number;
}

const AllPaymentTable: FC<IProps> = async ({ data, currentPage, totalPages }) => {
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
                width: "200px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              مبلغ
            </TableCell>
            <TableCell
            className="dark:!text-whiteColor"
              align="right"
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
            className="dark:!text-whiteColor"
              align="right"
              sx={{
                py: 3,
                px: 0,
                width: "200px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              وضعیت پرداخت
            </TableCell>
            <TableCell
            className="dark:!text-whiteColor"
              align="right"
              sx={{
                width: "260px",
                py: 3,
                px: 7,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              تاریخ ساخت
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
                {items.amount}
              </TableCell>
              <TableCell className="dark:!text-whiteColor" align="right" sx={{ px: 0, py: 2 }}>
                {items.description}
              </TableCell>
              <TableCell align="right" sx={{ px: 0, py: 2 }}>
                 <CustomBadge3 title={items.status}/>
              </TableCell>
              <TableCell align="right" className="!px-8 dark:!text-whiteColor" sx={{ px: 0, py: 2 }}>
                {items.createdAt.slice(0, 10)} - {items.createdAt.slice(11, 16)}
              </TableCell>
              <TableCell
                align="right"
                className="!px-7 cursor-pointer"
                sx={{ px: 0, py: 2 }}
              >
                <PaymentActionMenu currentAmount={items.amount} currentDescription={items.description} currentStatus={items.status} id={items.id} token={token}/>
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

export default AllPaymentTable;

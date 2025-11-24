import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IPaymentDatas } from "@/core/types/IPaymentResponse";
import { CreditCard } from "lucide-react";
import CustomPagination2 from "@/components/Ui/CustomPagination2";

interface IProps {
  Payments: IPaymentDatas[];
  currentPage: number;
  totalPages: number
}

const PaymentTable: FC<IProps> = ({ Payments, currentPage, totalPages }) => {
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
              sx={{ py: 3, width: "200px", fontWeight: "bold", fontSize: 16 }}
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
            className="dark:!text-whiteColor"
              align="right"
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
            className="dark:!text-whiteColor"
              align="right"
              sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}
            >
              وضعیت پرداخت
            </TableCell>
            <TableCell
            className="dark:!text-whiteColor"
              align="right"
              sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}
            >
              نوع تراکنش
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
          {Payments.map((payment) => (
            <TableRow key={payment.id} className="hover:!bg-lightPrimary transition-colors dark:hover:!bg-dark">
              <TableCell
                component="th"
                scope="row"
                className="!text-primary dark:!text-whiteColor"
                align="right"
                sx={{ py: 2 }}
              >
                {payment.createdAt.slice(0,10)} - {payment.createdAt.slice(11,16)}
              </TableCell>
              <TableCell className="dark:!text-whiteColor" align="right" sx={{ px: 0, py: 2 }}>
                {payment.description === 'Payment' ? 'پرداخت' : payment.description}
              </TableCell>
              <TableCell className="dark:!text-whiteColor" align="right" sx={{ px: 0, py: 2 }}>
                {payment.amount.replace(/\.00$/, '')}
              </TableCell>
              <TableCell align="right" className="!px-8" sx={{ px: 0, py: 2 }}>
                {payment.status === 'completed' ? (
                 <div className="py-1 px-2 rounded-lg w-fit text-sm bg-lightGreen text-success">تایید شده</div>
                ) : (
                  <div className="bg-lightRed text-red py-1 px-2 rounded-lg w-fit text-sm">تایید نشده</div>
                ) }
              </TableCell>
              <TableCell  align="right" className="!px-8 dark:!text-whiteColor" sx={{ px: 0, py: 2 }}>
                رزرو
              </TableCell>
              <TableCell align="right" className="!px-7 cursor-pointer" sx={{ px: 0, py: 2 }}>
                <CreditCard className="text-primary dark:text-thidary"/>
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

export default PaymentTable;

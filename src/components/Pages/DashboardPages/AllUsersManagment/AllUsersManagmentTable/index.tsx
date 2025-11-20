import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IUsersDatas } from "@/core/types/IAllUsersResponse";
import EmptyImage from '../../../../../assets/images/UnKnownUserImg/UnKnownUser.jpg'
import Image from "next/image";
import CustomPagination2 from "@/components/Ui/CustomPagination2";

interface IProps {
  data: IUsersDatas[];
  totalPages: number;
  currentPage: number
}

const AllUsersManagementTable: FC<IProps> = ({ data, totalPages, currentPage }) => {
  return (
    <TableContainer
      elevation={0}
      component={Paper}
      className="!rounded-3xl pt-3 pb-8"
    >
      <Table sx={{ minWidth: 650 }} aria-label="reserves table">
        <TableHead>
          <TableRow>
            <TableCell
              align="right"
              sx={{
                px: 4,
                py: 3,
                width: "200px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              نام کاربر
            </TableCell>
            <TableCell
              align="right"
              sx={{
                py: 3,
                px: 0,
                width: "280px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              ایمیل
            </TableCell>
            <TableCell
              align="right"
              sx={{
                py: 3,
                px: 0,
                width: "150px",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              شماره تماس
            </TableCell>
            <TableCell
              align="right"
              sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}
            >
              نقش کاربر
            </TableCell>
            <TableCell
              align="right"
              sx={{ py: 3, px: 5, fontWeight: "bold", fontSize: 16 }}
            >
              تاریخ ساخت
            </TableCell>
            <TableCell
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
              className="hover:!bg-lightPrimary transition-colors"
            >
              <TableCell
                component="th"
                scope="row"
                className="text-primary"
                align="right"
                sx={{ width: "240px", px: 4, py: 2 }}
              > 
              <div className="flex gap-2 items-center text-primary">
                <div className="size-[40px] rounded-full overflow-hidden">
                   <Image
                      src={
                        items.profilePicture && 
                        typeof items.profilePicture === 'string' && 
                        (items.profilePicture.startsWith('https'))
                          ? items.profilePicture
                          : EmptyImage
                      }
                      alt="profilePicture"
                      width={40}
                      height={40}
                    />
                </div>
                {items.fullName === 'نام کاربر' ? 'کاربر بدون نام' : items.fullName}
              </div>
              </TableCell>
              <TableCell align="right" sx={{ px: 0, py: 2 }}>
                {items.email}
              </TableCell>
              <TableCell align="right" sx={{ px: 0, py: 2 }}>
                {items.phoneNumber || '-----------------'}
              </TableCell>
              <TableCell align="right" className="!px-8" sx={{ px: 0, py: 2 }}>
                {items.role === 'buyer' ? 'خریدار' : items.role === 'seller' ? 'فروشنده' : 'ادمین'}
              </TableCell>
              <TableCell align="right" className="!px-8" sx={{ px: 0, py: 2 }}>
                {items.createdAt.slice(0, 10)} - {items.createdAt.slice(11, 16)}
              </TableCell>
              <TableCell
                align="right"
                className="!px-7 cursor-pointer"
                sx={{ px: 0, py: 2 }}
              >
                ssss
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

export default AllUsersManagementTable;

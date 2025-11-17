import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { GetBookingList } from "@/core/Apis/Dashboard/GetBookingList";
import { IBookingData } from "@/core/types/IBookingDatas";
import CustomBadge from "@/components/Ui/CustomBadge";

const LastReserveHousesTable = async () => {
  const limit = 3;
  const currentPage = 1;
  const response = await GetBookingList(limit, currentPage);
  const bookings: IBookingData[] = response.data.data;

  return (
    <div className="pt-6" dir="rtl">
      <TableContainer
        component={Paper}
        className="!rounded-3xl !shadow-none"
        sx={{ overflow: "hidden" }}
      >
        <Table aria-label="جدول مشخصات مسافران">
          <TableHead>
            <TableRow>
              <TableCell
                className="!text-dark !font-bold w-[30%]"
                align="right"
              >
                نام اقامتگاه
              </TableCell>
              <TableCell
                className="!text-dark !font-bold w-[28%]"
                align="right"
              >
                تاریخ رزرو
              </TableCell>
              <TableCell
                className="!text-dark !font-bold w-[30%]"
                align="right"
              >
                قیمت
              </TableCell>
              <TableCell
                className="!text-dark !font-bold w-[15%]"
                align="right"
              >
                وضعیت
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((items) => (
              <TableRow
                key={items.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  align="right"
                  className="!border-borderColor !text-dark"
                  component="th"
                  scope="row"
                >
                  {items.house.title}
                </TableCell>
                <TableCell
                  className="!border-borderColor !text-dark"
                  align="right"
                >
                  {items.createdAt.slice(0,10)} - {items.createdAt.slice(11,16)}
                </TableCell>
                <TableCell
                  className="!border-borderColor !text-dark"
                  align="right"
                >
                  {items.house.price} تومان
                </TableCell>
                <TableCell
                  className="!border-borderColor !text-dark"
                  align="right"
                >
                  <CustomBadge title={items.status}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LastReserveHousesTable;

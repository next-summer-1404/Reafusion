import React, { FC } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomBadge2 from '@/components/Ui/CustomBadge/CustomBadge2';
import CustomBadge from '@/components/Ui/CustomBadge';
import { IBookingData } from '@/core/types/IBookingDatas';
import CustomPagination2 from '@/components/Ui/CustomPagination2';
import AllBookingActionMenu from '../AllBookingActionMenu';
import { cookies } from 'next/headers';

interface IProps {
  data: IBookingData[];
  currentPage: number;
  totalPages: number;
}

const AllBookingTable: FC<IProps> = async ({ data, currentPage, totalPages }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;

  return (
      <TableContainer elevation={0} component={Paper} className="!rounded-3xl py-6 dark:!bg-background">
        <Table sx={{ minWidth: 650 }} aria-label="reserves table">
          <TableHead>
            <TableRow>
              <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, width: '300px', fontWeight: "bold", fontSize: 16 }}>ایمیل به اشتراک گزاشته</TableCell>
              <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, width: '130px', px: 0, fontWeight: "bold", fontSize: 16 }}>تاریخ رزرو</TableCell>
              <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, width: '130px', px: 0, fontWeight: "bold", fontSize: 16 }}>شماره تلفن</TableCell>
              <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}>اطلاعات مسافر</TableCell>
              <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}>وضعیت رزرو</TableCell>
              <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, px: 0, fontWeight: "bold", fontSize: 16 }}>وضعیت پرداخت</TableCell>
              <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, fontWeight: "bold", fontSize: 16 }}>عملیات</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow 
                key={item.id} 
                className="hover:!bg-lightPrimary transition-colors dark:hover:!bg-dark"
              >
                <TableCell scope="row" align="right" sx={{ py: 2, }} className='!text-primary dark:!text-thidary'>
                    {item.sharedEmail || "--------------------------------------------------"}
                </TableCell>
                <TableCell className='dark:!text-whiteColor' align="right" sx={{ px: 0, py: 2 }}>
                  {item.reservedDates[0]?.value.split("T")[0] || "-"}
                </TableCell>
                <TableCell className='dark:!text-whiteColor' align="right" sx={{ px: 0, py: 2 }}>
                  {item.sharedMobile || "-------------------"}
                </TableCell>
                <TableCell  align="right" className="!px-8 dark:!text-whiteColor" sx={{ px: 0, py: 2 }}>
                  {item.traveler_details.length} نفر
                </TableCell>
                <TableCell align="right" sx={{ px: 0, py: 2 }}>
                  <CustomBadge title={item.status} />
                </TableCell>
                <TableCell align="right" sx={{ px: 1, py: 2 }}>
                  <CustomBadge2 title={item.status} />
                </TableCell>
                <TableCell align="right" sx={{ px: 3.5, py: 2 }}>
                   <AllBookingActionMenu booking={item} token={tokenValue} status={item.status} bookingId={item.id}/>
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
  )
}

export default AllBookingTable
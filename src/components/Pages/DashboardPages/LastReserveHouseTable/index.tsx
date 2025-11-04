'use client';

import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { EllipsisVertical } from 'lucide-react';

const LastReserveHousesTable = () => {
  return (
    <div className='pt-6' dir="rtl">
      <TableContainer
        component={Paper}
        className="!rounded-3xl !shadow-none"
        sx={{ overflow: 'hidden' }}
      >
        <Table aria-label="جدول مشخصات مسافران">
          <TableHead>
            <TableRow>
              <TableCell className="!text-dark !font-bold w-[30%]" align="right">
                نام اقامتگاه
              </TableCell>
              <TableCell className="!text-dark !font-bold w-[20%]" align="right">
                تاریخ رزرو
              </TableCell>
              <TableCell className="!text-dark !font-bold w-[30%]" align="right">
                قیمت
              </TableCell>
              <TableCell className="!text-dark !font-bold w-[15%]" align="right">
                وضعیت
              </TableCell>
              <TableCell className="!text-dark !font-bold" align="right">
                 عملیات
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell
                align="right"
                className="!border-borderColor !text-dark"
                component="th"
                scope="row"
              >
                خانه
              </TableCell>
              <TableCell className="!border-borderColor !text-dark" align="right">
                 12 مرداد 1401 - 12:33
              </TableCell>
              <TableCell className="!border-borderColor !text-dark" align="right">
                2,000,000 تومان
              </TableCell>
              <TableCell className="!border-borderColor !text-dark" align="right">
                <div className='w-[85px] p-2 h-[30xp] bg-[#CCF2ED] text-[#008C78] text-center rounded-[8px]'>
                  تایید شده  
                </div>
              </TableCell>
              <TableCell className="!border-borderColor !text-dark cursor-pointer !flex !justify-center">
                <EllipsisVertical />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LastReserveHousesTable;
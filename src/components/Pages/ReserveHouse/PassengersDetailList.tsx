import React, { FC } from 'react';
import IconButton from './../../Ui/IconButton/index';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

interface IUserInfo {
    userName: string;
    userFamily: string;
    gender: string;
    nationalId: string;
    phoneNumber: string;
    birthDate: string;
    price: string;
}

const PassengersDetailList: FC<IUserInfo> = ({ userName, userFamily, gender, nationalId, phoneNumber, birthDate, price }) => (
    <div className="flex flex-col gap-8 p-4 rounded-3xl border border-borderColor bg-whiteColor dark:bg-dark">
        {/* title */}
        <Link href={'/reserveHouse/step1'} className="flex justify-between items-center">
            <h3 className="text-2xl text-dark font-bold dark:text-White">مشخصات مسافران</h3>
            <IconButton customClass="!border-0" title="ویرایش مسافران" iconName="editUser" />
        </Link>
        {/* title end */}

        {/*  passengers info table */}
        <TableContainer component={Paper} className='!rounded-3xl !shadow-none !border !border-borderColor '>
            <Table sx={{ minWidth: 650 }} aria-label="جدول مشخصات مسافران">
                <TableHead>
                    <TableRow>
                        <TableCell className='!text-dark !font-bold' align="right">رده سنی</TableCell>
                        <TableCell className='!text-dark !font-bold' align="right">نام و نام خانوادگی</TableCell>
                        <TableCell className='!text-dark !font-bold' align="right">جنسیت</TableCell>
                        <TableCell className='!text-dark !font-bold' align="right">کدملی / شماره تماس / پاسپورت</TableCell>
                        <TableCell className='!text-dark !font-bold' align="right">تاریخ تولد</TableCell>
                        <TableCell className='!text-dark !font-bold' align="right">خدمات</TableCell>
                        <TableCell className='!text-dark !font-bold' align="right">هزینه خدمات</TableCell>
                        <TableCell className='!text-dark !font-bold' align="right">قیمت</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className=''>
                            <TableCell align="right" className='!border-borderColor !text-dark' component="th" scope="row">بزرگسال</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{userName} {userFamily}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{gender === 'male' ? 'مرد' : 'زن'}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{nationalId} / {phoneNumber}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{birthDate}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{'-'}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{'-'}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{price}</TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        {/* passengers info table end */}
    </div>
);

export default PassengersDetailList;
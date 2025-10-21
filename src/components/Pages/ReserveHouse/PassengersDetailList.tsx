import React from 'react';
import IconButton from './../../Ui/IconButton/index';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface IUserInfo {
    ageGrade: string;
    fullName: string;
    gender: 'مرد' | 'زن';
    codeOrPhoneOrPassport: string;
    birthDate: string;
    services?: string;
    servicesPrice?: string;
    price: string;
}

// split price with ,
const formatPrice = (price: string): string => {
    return Number(price).toLocaleString('fa-IR');
};

const createData = (
    ageGrade: string,
    fullName: string,
    gender: 'مرد' | 'زن',
    codeOrPhoneOrPassport: string,
    birthDate: string,
    services = '',
    servicesPrice = '',
    price: string
): IUserInfo => ({
    ageGrade,
    fullName,
    gender,
    codeOrPhoneOrPassport,
    birthDate,
    services,
    servicesPrice,
    price,
});

const rows: IUserInfo[] = [
    createData('بزرگسال', 'متین قربانزاده', 'مرد', '2150710171', '1360/05/15', '', '', '2000000'),
    createData('بزرگسال', 'متین قربانزاده', 'مرد', '2150710871', '1360/05/15', '', '', '2000000'),

];

const PassengersDetailList = () => (
    <div className="flex flex-col gap-8 p-4 rounded-3xl border border-borderColor bg-whiteColor">
        {/* title */}
        <div className="flex justify-between items-center">
            <h3 className="text-2xl text-dark font-bold">مشخصات مسافران</h3>
            <IconButton customClass="!border-0" title="ویرایش مسافران" iconName="editUser" />
        </div>
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
                    {rows.map((row) => (
                        <TableRow key={row?.codeOrPhoneOrPassport} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className=''>
                            <TableCell align="right" className='!border-borderColor !text-dark' component="th" scope="row">{row?.ageGrade}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{row?.fullName}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{row?.gender}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{row?.codeOrPhoneOrPassport}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{row?.birthDate}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{row?.services || '-'}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{row.servicesPrice ? formatPrice(row.servicesPrice) : '-'}</TableCell>
                            <TableCell className='!border-borderColor !text-dark' align="right">{formatPrice(row.price)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        {/* passengers info table end */}
    </div>
);

export default PassengersDetailList;
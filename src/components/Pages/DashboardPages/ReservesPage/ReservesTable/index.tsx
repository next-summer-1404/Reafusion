'use client';
import React, { MouseEvent, useState } from 'react';
import dynamic from 'next/dynamic';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CircleCheck, CircleX, CreditCard, EllipsisVertical, Info, Trash2 } from 'lucide-react';
import CustomBadge from '@/components/Ui/CustomBadge';
import Link from 'next/link';
import HouseDetailModal from '../HouseDetailModal/HouseDetailModal';
import CustomSelectOption from './../../../../Ui/ReusableInputs/SelectOption/index';
import TableSort from '../TableSort';

function createData(
    id: number,
    name: string,
    date: string,
    price: number,
    passengerInfo: string,
    reserveStatus: 'success' | 'pending' | 'fail',
    paymentStatus: 'success' | 'pending' | 'fail',
) {
    return { id, name, date, price, passengerInfo, reserveStatus, paymentStatus };
}

const rows = [
    createData(1, 'هتل سراوان رانین رشت', '12 مرداد 1401 - 12:33', 2000000, '2 نفر مسافر', 'success', 'success'),
    createData(2, 'هتل سراوان رانین رشت', '12 مرداد 1401 - 12:33', 2000000, '2 نفر مسافر', 'success', 'pending'),
    createData(3, 'هتل پارسیان تهران', '15 شهریور 1401 - 14:20', 3500000, '3 نفر مسافر', 'pending', 'fail'),
];

const TableMui = () => {

    // Modals Management
    const [isdetailOpen, setIsDetailOpen] = useState(false);

    const handleOpenDetail = () => setIsDetailOpen(true);
    const handleCloseDetail = () => setIsDetailOpen(false);
    // Modals Management end

    // rows action menu management
    const [anchorEls, setAnchorEls] = useState<Record<number, HTMLElement | null>>({});

    const handleClick = (id: number) => (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEls((prev) => ({
            ...prev,
            [id]: event.currentTarget,
        }));
    };

    const handleClose = (id: number) => () => {
        setAnchorEls((prev) => ({
            ...prev,
            [id]: null,
        }));
    };
    // rows action menu management

    const getReserveTitle = (status: 'success' | 'pending' | 'fail') => {
        return status === 'success' ? 'موفق' : status === 'pending' ? 'در انتظار' : 'ناموفق';
    };

    const getPaymentTitle = (status: 'success' | 'pending' | 'fail') => {
        return status === 'success' ? 'پرداخت شده' : status === 'pending' ? 'در انتظار پرداخت' : 'پرداخت نشده';
    };

    return (
        <>
            {/* table */}
            <TableContainer
                elevation={0}
                component={Paper}
                className="!rounded-3xl py-6"
                sx={{ overflow: 'scroll' }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right" sx={{ py: 3, fontWeight: 'bold', fontSize: 16 }}>نام اقامتگاه</TableCell>
                            <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>تاریخ رزرو</TableCell>
                            <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>قیمت</TableCell>
                            <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>اطلاعات مسافر</TableCell>
                            <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>وضعیت رزرو</TableCell>
                            <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>وضعیت پرداخت</TableCell>
                            <TableCell align="right" sx={{ py: 3, fontWeight: 'bold', fontSize: 16 }}>عملیات</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            const open = Boolean(anchorEls[row.id]);
                            const id = `menu-${row.id}`;

                            return (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className="hover:!bg-lightPrimary transition-colors"
                                >
                                    <TableCell component="th" scope="row" align="right" sx={{ py: 2 }}>
                                        <Link href={'#'}>{row.name}</Link>
                                    </TableCell>

                                    <TableCell align="right" sx={{ px: 0, py: 2 }}>{row.date}</TableCell>

                                    <TableCell align="right" sx={{ px: 0, py: 2 }}>
                                        {row.price} تومان
                                    </TableCell>

                                    <TableCell align="right" sx={{ px: 0, py: 2 }}>{row.passengerInfo}</TableCell>

                                    <TableCell align="right" sx={{ px: 0, py: 2 }}>
                                        <CustomBadge status={row.reserveStatus} title={getReserveTitle(row.reserveStatus)} />
                                    </TableCell>

                                    <TableCell align="right" sx={{ px: 0, py: 2 }}>
                                        <CustomBadge status={row.paymentStatus} title={getPaymentTitle(row.paymentStatus)} />
                                    </TableCell>

                                    {/* actions */}
                                    <TableCell align="right" sx={{ py: 2, position: 'relative' }}>
                                        <button
                                            id={id}
                                            aria-controls={open ? `menu-list-${row.id}` : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick(row.id)}
                                            className="mx-auto p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                                        >
                                            <EllipsisVertical className="text-gray-500 hover:text-primary transition-colors" size={20} />
                                        </button>
                                        {/* action menu */}
                                        <Menu
                                            id={`menu-list-${row.id}`}
                                            anchorEl={anchorEls[row.id]}
                                            open={open}
                                            onClose={handleClose(row.id)}
                                            MenuListProps={{
                                                'aria-labelledby': id,
                                                sx: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '4px',
                                                    p: '8px',
                                                },
                                            }}
                                            slotProps={{
                                                paper: {
                                                    sx: {
                                                        borderRadius: '16px',
                                                        border: '1px solid',
                                                        borderColor: 'divider',
                                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                                                        minWidth: 160,
                                                    },
                                                },
                                            }}
                                        >
                                            <MenuItem
                                                onClick={handleClose(row.id)}
                                                sx={{
                                                    gap: 1.5,
                                                    borderRadius: '12px',
                                                    '&:hover': {
                                                        bgcolor: '#E6EDF5',
                                                        color: '#0D3B66',
                                                    },
                                                }}
                                            >
                                                <CircleCheck size={18} strokeWidth={1.5} />
                                                <span>تایید رزرو</span>
                                            </MenuItem>

                                            <MenuItem
                                                onClick={handleClose(row.id)}
                                                sx={{
                                                    gap: 1.5,
                                                    borderRadius: '12px',
                                                    '&:hover': {
                                                        bgcolor: '#E6EDF5',
                                                        color: '#0D3B66',
                                                    },
                                                }}
                                            >
                                                <CircleX size={18} strokeWidth={1.5} />
                                                <span>لغو رزرو</span>
                                            </MenuItem>

                                            <MenuItem
                                                onClick={handleClose(row.id)}
                                                sx={{
                                                    gap: 1.5,
                                                    borderRadius: '12px',
                                                    '&:hover': {
                                                        bgcolor: '#E6EDF5',
                                                        color: '#0D3B66',
                                                    },
                                                }}
                                            >
                                                <CreditCard size={18} strokeWidth={1.5} />
                                                <span>پرداخت کردن</span>
                                            </MenuItem>

                                            <MenuItem
                                                onClick={handleOpenDetail}
                                                sx={{
                                                    gap: 1.5,
                                                    borderRadius: '12px',
                                                    '&:hover': {
                                                        bgcolor: '#E6EDF5',
                                                        color: '#0D3B66',
                                                    },
                                                }}
                                            >
                                                <Info size={18} strokeWidth={1.5} />
                                                <span>جزئیات</span>
                                            </MenuItem>

                                            <MenuItem
                                                onClick={handleClose(row.id)}
                                                sx={{
                                                    gap: 1.5,
                                                    borderRadius: '12px',
                                                    '&:hover': {
                                                        bgcolor: '#E6EDF5',
                                                        color: '#0D3B66',
                                                    },
                                                }}
                                            >
                                                <Trash2 size={18} strokeWidth={1.5} />
                                                <span>حذف</span>
                                            </MenuItem>
                                        </Menu>
                                        {/* action menu end */}
                                    </TableCell>
                                    {/* actions end */}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

                {/* table sort */}
                <TableSort />
                {/* table sort end */}

            </TableContainer>
            {/* table end */}

            {/* house detail modal */}
            <HouseDetailModal open={isdetailOpen} onClose={handleCloseDetail} />
            {/* house detail modal end */}
        </>
    );
};

// fix hydration error
export default dynamic(() => Promise.resolve(TableMui), { ssr: false });

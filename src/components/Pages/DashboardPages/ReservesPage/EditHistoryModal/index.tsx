import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { X } from 'lucide-react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface IProps {
    open: boolean;
    onClose: () => void;
}

function createData(
    id: number,
    date: string,
    editType: string,
) {
    return { id, date, editType };
}

const rows = [
    createData(1, '12 مرداد 1401 - 12:33', 'تاریخ رزرو'),
    createData(2, '12 مرداد 1401 - 12:33', 'اسامی مسافران'),
    createData(3, '15 شهریور 1401 - 14:20', 'تاریخ رزرو'),
];

const EditHistoryModal: FC<IProps> = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                className="
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[40%] max-h-[90%] bg-white flex flex-col rounded-3xl
                    text-dark py-8 gap-8
                "
            >
                {/* modal header */}
                <div className='flex justify-between items-center px-8'>
                    <h3 className='font-bold text-2xl'>تاریخچه تغییرات</h3>
                    <div
                        onClick={onClose}
                        className='size-12 rounded-full flex justify-center items-center bg-lightGray cursor-pointer hover:scale-110 transition-all'
                    >
                        <X size={32} strokeWidth={1.5} />
                    </div>
                </div>
                {/* modal header end */}

                {/* modal body */}
                <div className='px-8 overflow-y-scroll'>

                    {/* table */}
                    <TableContainer
                        elevation={0}
                        component={Paper}
                        className="!rounded-3xl py-6 border border-borderColor"
                        sx={{ overflow: 'scroll' }}
                    >
                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right" sx={{ py: 3, fontWeight: 'bold', fontSize: 16 }}>تاریخ و ساعت</TableCell>
                                    <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>نوع تغییر</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => {
                                    const id = `menu-${row.id}`;

                                    return (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            className="hover:!bg-lightPrimary transition-colors"
                                        >
                                            <TableCell component="th" scope="row" align="right" sx={{ py: 2 }}>
                                                {row.date}
                                            </TableCell>

                                            <TableCell component="th" scope="row" align="right" sx={{ py: 2 }}>
                                                {row.editType}
                                            </TableCell>

                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* table end */}
                </div>
                {/* modal body end */}

            </Box>
        </Modal>
    )
}

export default EditHistoryModal
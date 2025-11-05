import React, { FC } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MessageCircleMore, X } from 'lucide-react';

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
    name: string,
    nationalCode: number,
    gender: string,
    birthDate: string,
) {
    return { id, name, nationalCode, gender, birthDate };
}

const rows = [
    createData(1, 'آقای فلانی', 2151234567, 'مرد', '1382/04/17'),
    createData(2, 'آقای فلانی', 2151234567, 'مرد', '1382/04/17'),
    createData(3, 'آقای فلانی', 2151234567, 'مرد', '1382/04/17'),
];

const PassengersInfoModal: FC<IProps> = ({ open, onClose }) => {
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
                    w-[50%] max-h-[90%] bg-white flex flex-col rounded-3xl
                    text-dark py-8 gap-8
                "
            >
                {/* modal header */}
                <div className='flex justify-between items-center px-8'>
                    <h3 className='font-bold text-2xl'>لیست مسافر ها</h3>
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
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right" sx={{ py: 3, fontWeight: 'bold', fontSize: 16 }}>نام</TableCell>
                                    <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>کد ملی</TableCell>
                                    <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>جنسیت</TableCell>
                                    <TableCell align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>تاریخ تولد</TableCell>
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
                                                {row.name}
                                            </TableCell>

                                            <TableCell align="right" sx={{ px: 0, py: 2 }}>{row.nationalCode}</TableCell>

                                            <TableCell align="right" sx={{ px: 0, py: 2 }}>{row.gender}</TableCell>

                                            <TableCell align="right" sx={{ px: 0, py: 2 }}>{row.birthDate}</TableCell>
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

export default PassengersInfoModal
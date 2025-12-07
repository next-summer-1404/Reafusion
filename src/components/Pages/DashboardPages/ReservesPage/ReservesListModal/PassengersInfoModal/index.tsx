// app/dashboard/reserves/PassengersInfoModal/index.tsx
'use client';

import { FC } from 'react';
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
import { useSearchParams } from 'next/navigation';
import { IBookingResponse } from '@/core/types/IBookingDatas';

interface IProps {
  BookingList?: IBookingResponse;
}

const PassengersInfoModal: FC<IProps> = ({ BookingList }) => {
  const searchParams = useSearchParams();
  const reserveId = searchParams.get('passengerInfo');
  const open = !!reserveId;

  const closeModal = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('passengerInfo');
    window.history.pushState({}, '', url);
  };

  if (!open) return null;

  return (
    <Modal open={open} onClose={closeModal}>
      <Box
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[50%] max-h-[90%] bg-white dark:bg-dark dark:text-whiteColor flex flex-col rounded-3xl
          text-dark py-8 gap-8 overflow-hidden
        "
      >
        {/* Header */}
        <div className='flex justify-between items-center px-8'>
          <h3 className='font-bold text-2xl'>لیست مسافر ها</h3>
          <button
            onClick={closeModal}
            className='size-12 rounded-full flex justify-center items-center bg-lightGray hover:scale-110 transition-all cursor-pointer'
          >
            <X size={32} strokeWidth={1.5} className='dark:text-dark'/>
          </button>
        </div>

        {/* Body */}
        <div className='px-8 overflow-y-auto'>
          <TableContainer elevation={0} component={Paper} className="!rounded-3xl py-6 border border-borderColor dark:!bg-background">
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, fontWeight: 'bold', fontSize: 16 }}>نام</TableCell>
                  <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>کد ملی</TableCell>
                  <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>جنسیت</TableCell>
                  <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>تاریخ تولد</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {BookingList?.data.flatMap((booking) =>
                  booking.traveler_details.map((traveler, index) => ({
                    id: `${booking.id}-${index}`, 
                    name: `${traveler.firstName} ${traveler.lastName}`,
                    gender: traveler.gender === 'male' ? 'مرد' : 'زن',
                    phone: booking.sharedMobile, 
                    nationalCode: traveler.nationalId,
                    birthDate: traveler.birthDate,
                  }))
                ).map((row) => (
                  <TableRow
                    key={row.id}
                    className="hover:!bg-lightPrimary dark:hover:!bg-dark transition-colors"
                  >
                    <TableCell className='dark:!text-whiteColor' component="th" scope="row" align="right" sx={{ py: 2 }}>
                      {row.name}
                    </TableCell>
                    <TableCell className='dark:!text-whiteColor' align="right" sx={{ px: 0, py: 2 }}>{row.nationalCode}</TableCell>
                    <TableCell className='dark:!text-whiteColor' align="right" sx={{ px: 0, py: 2 }}>{row.gender}</TableCell>
                    <TableCell className='dark:!text-whiteColor' align="right" sx={{ px: 0, py: 2 }}>{row.birthDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </Modal>
  );
};

export default PassengersInfoModal;
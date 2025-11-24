'use client';
import { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { X, Eye } from 'lucide-react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PassengersInfoModal from './PassengersInfoModal/index';
import { IBookingData } from '@/core/types/IBookingDatas';
import { useSearchParams, useRouter } from 'next/navigation';

interface IProps {
  open: boolean;
  houseId: number;
  BookingList?: IBookingData[];
}

const ReservesListModal: FC<IProps> = ({ open, BookingList }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const passengerInfoId = searchParams.get('passengerInfo');
  const showPassengerModal = !!passengerInfoId;

  const closeModal = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('submodal');
    router.replace(url.toString(), { scroll: false });
  };

  if (!open) return null;

  return (
    <>
      <Modal open={open} onClose={closeModal}>
        <Box
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[40%] max-h-[90%] bg-white dark:bg-dark dark:text-whiteColor flex flex-col rounded-3xl
            text-dark py-8 gap-8 overflow-y-auto
          "
        >
          {/* Header */}
          <div className='flex justify-between items-center px-8'>
            <h3 className='font-bold text-2xl'>لیست رزرو ها</h3>
            <button
              onClick={closeModal}
              className='size-12 rounded-full flex cursor-pointer justify-center items-center bg-lightGray hover:scale-110 transition-all'
            >
              <X size={32} strokeWidth={1.5} className='dark:text-dark'/>
            </button>
          </div>

          {/* Body */}
          <div className='px-8'>
            <TableContainer elevation={0} component={Paper} className="!rounded-3xl py-6 border border-borderColor dark:!bg-background">
              <Table sx={{ minWidth: 400 }}>
                <TableHead>
                  <TableRow>
                    <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, fontWeight: 'bold', fontSize: 16 }}>تاریخ و ساعت</TableCell>
                    <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>اطلاعات مسافر ها</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {BookingList?.flatMap((booking) =>
                    booking.reservedDates.map((traveler, index) => ({
                      id: `${booking.id}-${index}`,
                      date: `${traveler.value.slice(0,10)} - ${traveler.value.slice(11,16)}`,
                    }))
                  ).map((row) => (
                    <TableRow key={row.id} className="hover:!bg-lightPrimary dark:hover:!bg-dark transition-colors">
                      <TableCell className='dark:!text-whiteColor' component="th" scope="row" align="right" sx={{ py: 2 }}>
                        {row.date}
                      </TableCell>
                      <TableCell align="right" sx={{ py: 2 }}>
                        <button
                          onClick={() => {
                            const url = new URL(window.location.href);
                            url.searchParams.set('passengerInfo', row.id);
                            router.push(url.toString(), { scroll: false });
                          }}
                          className='flex items-center cursor-pointer  gap-2 text-primary dark:text-thidary hover:underline'
                        >
                          <Eye size={24} strokeWidth={1.5} />
                          <span>مشاهده</span>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Modal>

      {showPassengerModal && <PassengersInfoModal BookingList={BookingList} />}
    </>
  );
};

export default ReservesListModal;
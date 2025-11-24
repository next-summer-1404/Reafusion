'use client';
import { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { X, ScrollText } from 'lucide-react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSearchParams } from 'next/navigation';

interface IProps {
  open: boolean;
  houseId: number;
}

const mockPayments = [
  { id: 1, date: '12 مرداد 1401 - 12:33', trackingNumber: '123456789', price: 2000000 },
  { id: 2, date: '12 مرداد 1401 - 12:33', trackingNumber: '123456789', price: 2000000 },
  { id: 3, date: '15 شهریور 1401 - 14:20', trackingNumber: '123456789', price: 3500000 },
];

const PaymentsModal: FC<IProps> = () => {
  const searchParams = useSearchParams();
  const open = searchParams.get('submodal') === 'payments';

  const closeModal = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('submodal');
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
          <h3 className='font-bold text-2xl'>لیست پرداختی ها</h3>
          <button
            onClick={closeModal}
            className='size-12 rounded-full flex justify-center items-center bg-lightGray hover:scale-110 transition-all cursor-pointer'
          >
            <X size={32} strokeWidth={1.5} className='dark:text-dark' />
          </button>
        </div>

        {/* Body */}
        <div className='px-8 overflow-y-auto'>
          <TableContainer elevation={0} component={Paper} className="!rounded-3xl py-6 border border-borderColor dark:!bg-background">
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, fontWeight: 'bold', fontSize: 16 }}>تاریخ</TableCell>
                  <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>شماره پیگیری</TableCell>
                  <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, px: 0, fontWeight: 'bold', fontSize: 16 }}>مبلغ</TableCell>
                  <TableCell className='dark:!text-whiteColor' align="right" sx={{ py: 3, fontWeight: 'bold', fontSize: 16 }}>عملیات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockPayments.map((row) => (
                  <TableRow
                    key={row.id}
                    className="hover:!bg-lightPrimary transition-colors dark:hover:!bg-dark"
                  >
                    <TableCell className='dark:!text-whiteColor' component="th" scope="row" align="right" sx={{ py: 2 }}>
                      {row.date}
                    </TableCell>
                    <TableCell className='dark:!text-whiteColor' align="right" sx={{ px: 0, py: 2 }}>{row.trackingNumber}</TableCell>
                    <TableCell className='dark:!text-whiteColor' align="right" sx={{ px: 0, py: 2 }}>
                      {row.price.toLocaleString()} تومان
                    </TableCell>
                    <TableCell align="right" sx={{ py: 2 }}>
                      <button className='cursor-pointer text-primary dark:text-thidary hover:scale-110 transition'>
                        <ScrollText size={24} strokeWidth={1.5} />
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
  );
};

export default PaymentsModal;
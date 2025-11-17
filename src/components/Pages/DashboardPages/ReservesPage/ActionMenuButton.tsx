'use client';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CircleCheck, CircleX, CreditCard, Info, Trash2, EllipsisVertical } from 'lucide-react';
import { ConfrimBooking } from '@/core/Apis/Dashboard/ConfrimBooking';
import { toast } from 'react-toastify';
import { CancelBooking } from '@/core/Apis/Dashboard/CancelBooking';
import { DeleteBooking } from '@/core/Apis/Dashboard/DeleteBooking';

interface IProps {
  reserveId: number;
  houseId: number;
  tokenValue?: string;
  currentPage?: number;
  role: string;
}

const ActionMenuButton: FC<IProps> = ({ houseId, reserveId, tokenValue, role }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenDetail = () => {
    router.push(`?detail=${houseId}`, { scroll: false });
    handleClose();
  };

  const handleOpenPayment = () => {
  router.push(`?payment=${reserveId}`, { scroll: false });
  handleClose();
};

  const handleConfrimBoooking = async () => {
     try {
      const response = await ConfrimBooking(reserveId, tokenValue);
      if (response) {
        toast.success('رزرو با موفقیت تایید شد')
        handleClose();
      } else {
        toast.error('خطا در تایید رزرو')
      }
     } catch (error) {
       toast.error(error.message)
     }
  }

  const handleCancelBoooking = async () => {
    try {
    const response = await CancelBooking(reserveId, tokenValue);
    if (response) {
      toast.success('رزرو با موفقیت لغو شد')
      handleClose();
    } else {
      toast.error('خطا در لغو رزرو')
    }
    } catch (error) {
      console.log(error)
      if (error.status === 400){
      toast.error('فقد رزرو های در انتظار قابلیت لغو شدن رو دارند')
      } else {
        toast.error(error.message)
      }
    } 
  }

  const handleDeleteBoooking = async () => {
    try {
    const response = await DeleteBooking(reserveId, tokenValue);
    if (response) {
      toast.success('رزرو با موفقیت حذف شد')
      handleClose();
    } else {
      toast.error('خطا در حذف رزرو')
    }
    } catch (error) {
      console.log(error)
      if (error.status === 400){
      toast.error('فقد رزرو های در انتظار قابلیت لغو شدن رو دارند')
      } else {
        toast.error(error.message)
      }
    } 
  }

  const isAdminOrSeller = role === 'admin' || 'seller';
  const isAdminOrBuyer = role === 'admin' || 'buyer'

  return (
    <>
      <button
        onClick={handleClick}
        className="mx-auto p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
      >
        <EllipsisVertical className="text-gray-500 hover:text-primary transition-colors" size={20} />
      </button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
        {isAdminOrSeller && (
          <div>
            <MenuItem onClick={handleConfrimBoooking} sx={{ gap: 1.5, borderRadius: '12px' }}>
              <CircleCheck size={18} strokeWidth={1.5} />
              <span>تایید رزرو</span>
            </MenuItem>
            <MenuItem onClick={handleCancelBoooking} sx={{ gap: 1.5, borderRadius: '12px' }}>
              <CircleX size={18} strokeWidth={1.5} />
              <span>لغو رزرو</span>
            </MenuItem>
          </div>
        )} 
        {isAdminOrBuyer && (
          <div>
            <MenuItem onClick={handleOpenPayment} sx={{ gap: 1.5, borderRadius: '12px' }}>
              <CreditCard size={18} strokeWidth={1.5} />
              <span>پرداخت کردن</span>
            </MenuItem>
          </div>
        )}    
        <MenuItem onClick={handleOpenDetail} sx={{ gap: 1.5, borderRadius: '12px' }}>
          <Info size={18} strokeWidth={1.5} />
          <span>جزئیات</span>
        </MenuItem>
        <MenuItem onClick={handleDeleteBoooking} sx={{ gap: 1.5, borderRadius: '12px' }}>
          <Trash2 size={18} strokeWidth={1.5} />
          <span>حذف</span>
        </MenuItem>
      </Menu>
    </>
  );
}

export default ActionMenuButton;
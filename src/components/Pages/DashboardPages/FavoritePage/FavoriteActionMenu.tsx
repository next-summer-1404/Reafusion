'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Trash2, EllipsisVertical, CircleCheckBig } from 'lucide-react';
import { toast } from 'react-toastify';
import { DeleteFavoriteFromList } from '@/core/Apis/Dashboard/DeleteFavoriteFromList';

interface IProps {
  favoriteId?: string;
  houseId?: string;
  token?: string;
}

const FavoriteActionMenu: FC<IProps> = ({ houseId, favoriteId, token }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBooking = () => {
    router.push(`/FastReservePage/${houseId}`)
    handleClose();
  };

  const handleRemoveFavorite = async () => {
     try {
      const response = await DeleteFavoriteFromList(favoriteId as string, token as string);
      if (response) {
        toast.success('عملیات با موفقیت انجام شد');
        handleClose();
        router.refresh()
      } else {
        toast.error('خطا در انجام عملیات')
      }
     } catch (error: any) {
       toast.error(error)
     }
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="mx-auto p-1 rounded-full hover:bg-whiteColor transition-colors cursor-pointer"
      >
        <EllipsisVertical className="text-primary transition-colors" size={20} />
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
              boxShadow: '8px 8px 8px rgba(0, 0, 0, 0.28)',
              minWidth: 100,
            },
          },
        }}
      >
        <MenuItem className='hover:!bg-lightPrimary hover:!text-primary' onClick={handleBooking} sx={{ gap: 1.5, borderRadius: '12px' }}>
          <CircleCheckBig size={18} strokeWidth={1.5}/>
          <span>رزرو</span>
        </MenuItem>

        <MenuItem className='hover:!bg-lightPrimary hover:!text-primary' onClick={handleRemoveFavorite} sx={{ gap: 1.5, borderRadius: '12px' }}>
          <Trash2 size={18} strokeWidth={1.5} />
          <span>حذف</span>
        </MenuItem>
      </Menu>
    </>
  );
};

export default FavoriteActionMenu;
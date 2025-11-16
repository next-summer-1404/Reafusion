// PlaceActionMenu.tsx
"use client";
import React, { FC, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { EllipsisVertical, Edit, Trash2 } from 'lucide-react';
import DeleteConfirmModal from './PlaceTable/DeleteHouseModal';
import EditHouseModal from './PlaceTable/EditHouseModal';

interface PlaceActionMenuProps {
  houseId?: string;
  tokenValue?: string;
  houseImg?: string[];
  houseTitle?: string;
  houseAddress?: string;
  housePrice?: string;
  transactionsType?: string;
  houseRate?: number;
  houseLastUpdate?: string;
  houselocation?: {
    lat: number;
    lng: number;
  }
  houseCategory: {
    name: string;
  }
  capacity: number;
  rooms: number;
  bathrooms: number;
  parkings: number;
  yardType: string;
  tags: string[];
  caption: string;
}

const PlaceActionMenu: FC<PlaceActionMenuProps> = ({ houseId, tokenValue, houseImg, houseTitle, 
    houseAddress, housePrice, transactionsType, houseRate, parkings, yardType, caption, tags,
    houseLastUpdate, houselocation, houseCategory, capacity, rooms, bathrooms }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false); // اضافه شد

  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    handleMenuClose();
    setEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    handleMenuClose();
    setDeleteModalOpen(true);
  };

  return (
    <>
      {/* منو */}
      <button
        onClick={handleMenuClick}
        className="mx-auto p-1 rounded-full hover:bg-whiteColor transition-colors cursor-pointer"
      >
        <EllipsisVertical className="text-primary" size={20} />
      </button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
              minWidth: 110,
              mt: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={handleEditClick} // ویرایش
          className='hover:!bg-lightPrimary hover:!text-primary'
          sx={{ gap: 1.5, borderRadius: '12px', fontSize: 14 }}
        >
          <Edit size={18} strokeWidth={1.5} />
          <span>ویرایش</span>
        </MenuItem>

        <MenuItem
          onClick={handleDeleteClick}
          className='hover:!bg-lightPrimary hover:!text-primary'
          sx={{ gap: 1.5, borderRadius: '12px', fontSize: 14 }}
        >
          <Trash2 size={18} strokeWidth={1.5} />
          <span>حذف</span>
        </MenuItem>
      </Menu>

      {/* مودال حذف */}
      <DeleteConfirmModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        houseId={houseId}
        tokenValue={tokenValue}
      />
      <EditHouseModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        houseId={houseId}
        houseImg={houseImg} 
        houseTitle={houseTitle}
        houseAddress={houseAddress}
        housePrice={housePrice}
        transactionsType={transactionsType}
        houseRate={houseRate}
        houseLastUpdate={houseLastUpdate}
        houselocation={houselocation}
        houseCategory={houseCategory}
        capacity={capacity}
        rooms={rooms}
        bathrooms={bathrooms}
        parkings={parkings}
        yardType={yardType}
        tags={tags}
        caption={caption}
      />
    </>
  );
};

export default PlaceActionMenu;
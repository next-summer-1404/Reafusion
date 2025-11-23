"use client";
import React, { FC, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EllipsisVertical, SquarePen, Trash2 } from "lucide-react";
import { DeleteAllHouse } from "@/core/Apis/Dashboard/DeleteAllHouse";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import EditAllHouseModal from "./EditAllHouseModal";

interface IProps {
  token: string;
  houseId: string;
  house: {
    id: string;
    title?: string;
    address?: string;
    price?: string | number;
    photos?: string[];
    location?: { lat: number; lng: number };
    capacity?: number;
    rooms?: number;
    rate?: number | null;
    bathrooms?: number;
    parkings?: number;
    yard_type?: string;
    transaction_type?: string;
    category?: string;
    caption?: string;
    tags?: string[];
    sellerName?: string;
  };
}

const AllHouseActionMenu: FC<IProps> = ({ token, houseId, house }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleOpenEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenEditModal(true);
    handleClose();
  };

  const handleDeleteHouses = async () => {
    try {
      const response = await DeleteAllHouse(token, houseId);
      if (response) {
        toast.success("ملک با موفقیت حذف شد");
        handleClose();
        router.refresh();
      } else {
        toast.error("خطا در حذف ملک");
      }
    } catch (error) {
      toast.error("خطایی رخ داد");
      console.log(error);
    }
  };

  return (
    <>
      {/* دکمه سه نقطه */}
      <button
        onClick={handleClick}
        className="p-2 hover:bg-whiteColor rounded-full transition-all duration-200 group cursor-pointer"
      >
        <EllipsisVertical size={20} className="text-primary" />
      </button>

      {/* منوی اکشن */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            mt: 1,
          },
        }}
      >
        <MenuItem
          onClick={handleOpenEdit}
          className="!text-primary !flex !gap-2 hover:!bg-lightPrimary"
        >
          <SquarePen size={18} />
          ویرایش خانه
        </MenuItem>

        <MenuItem
          onClick={handleDeleteHouses}
          className="!text-red !flex !gap-2 hover:!bg-red-50"
        >
          <Trash2 size={18} />
          حذف خانه
        </MenuItem>
      </Menu>

      <EditAllHouseModal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        house={house}
      />
    </>
  );
};

export default AllHouseActionMenu;
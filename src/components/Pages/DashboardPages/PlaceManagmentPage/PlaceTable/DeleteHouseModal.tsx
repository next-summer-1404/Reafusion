"use client";
import React, { FC } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { X } from "lucide-react";
import { DeleteHouses } from "@/core/Apis/Dashboard/DeleteHouses";
import { toast } from "react-toastify";

interface IProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  houseId?: string;
  tokenValue?: string;
}

const DeleteConfirmModal: FC<IProps> = ({ open, onClose, houseId, tokenValue }) => {
  
  const handleDeleteHouse = async () => {
     try {
      const response = await DeleteHouses(houseId as string, tokenValue as string);
      if (response) {
        toast.success('خانه با موفقیت حذف شد')
      } else {
        toast.error('خطا در انجام عملیات')
      }
     } catch (error: any) {
       toast.error(error.message);
     }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[270px] bg-white dark:bg-dark rounded-3xl p-6 shadow-2xl
          flex flex-col items-center text-center gap-4
        "
        dir="rtl"
      >
        {/* دکمه بستن */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 size-[58px] bg-lightGray cursor-pointer rounded-full flex items-center justify-center"
        >
          <X size={30} className="text-gray" />
        </button>
        <div className="w-full pt-[13%] space-y-6">
          <h3 className="text-[24px] font-bold text-dark dark:text-whiteColor">
            آیا از حذف مطمئن هستید؟
          </h3>
          <p className="text-[16px] text-gray dark:text-lightGray">
            امکان برگشت پس از حذف وجود ندارد!
          </p>
          <div className="flex gap-3 w-full">
            <button
              onClick={onClose}
              className="
              flex-1 border border-borderColor text-gray rounded-2xl py-3
              font-medium cursor-pointer
            "
            >
              انصراف
            </button>
            <button
              onClick={handleDeleteHouse}
              className="
              flex-1 bg-red text-white rounded-2xl py-3
              font-medium cursor-pointer
            "
            >
              حذف کردن
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmModal;

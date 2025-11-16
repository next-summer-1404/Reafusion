"use client";
import React, { FC, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EllipsisVertical, CircleCheck } from "lucide-react";
import { VerifyPeyment } from "@/core/Apis/Dashboard/VerifyPeyment";
import { toast } from "react-toastify";

interface IProps {
  financeId?: string;   
  token: string;  
}

const FinanceActionMenu: FC<IProps> = ({ financeId, token }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleConfirmPayment = async () => {
     try {
      const response = await VerifyPeyment(financeId as string, token)
      if (response) {
        toast.success('پرداخت با موفقیت تایید شد')
        handleClose()
      } else {
        toast.error('خطا  رد انجام عملیات')
      }
     } catch (error: any) {
       toast.error(error)
       console.log(error)
     }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 hover:bg-whiteColor cursor-pointer rounded-full transition-colors"
        aria-label="منوی عملیات"
      >
        <EllipsisVertical size={20} className="text-primary" />
      </button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="cursor-pointer"
        PaperProps={{
          sx: { borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" },
        }}
      >
        <MenuItem
          onClick={handleConfirmPayment}
          className="!text-primary hover:!bg-lightPrimary !flex !gap-1"
        >
          <CircleCheck size={18} />
          تایید پرداخت
        </MenuItem>
      </Menu>
    </>
  );
};

export default FinanceActionMenu;
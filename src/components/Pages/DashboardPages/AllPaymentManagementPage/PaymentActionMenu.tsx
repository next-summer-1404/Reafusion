"use client";

import React, { FC, useActionState, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  CalendarCheck,
  EllipsisVertical,
  SquarePen,
  Trash2,
  X,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { VerifyAllPayments } from "@/core/Apis/Dashboard/VerifyAllPayments";
import { DeletePayments } from "@/core/Apis/Dashboard/DeletePayments";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import EditPaymentsAction from "@/app/(Dashboard)/dashboard/AllPaymentsManagments";

interface IProps {
  id: string;
  token: string;
  currentAmount?: string;
  currentStatus?: string;
  currentDescription?: string;
}

const PaymentActionMenu: FC<IProps> = ({
  id,
  token,
  currentStatus,
  currentAmount,
  currentDescription,
}) => {
  const [state, formAction] = useActionState(EditPaymentsAction, { message: '' })
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [amount, setAmount] = useState(currentAmount);
  const [status, setStatus] = useState(currentStatus);
  const [description, setDescription] = useState(currentDescription);

  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
    handleClose();
  };

  const handleVerifyPayments = async () => {
    try {
      const response = await VerifyAllPayments(id, token);
      if (response) {
        toast.success("پرداخت با موفقیت تایید شد");
        handleClose();
        router.refresh();
      } else {
        toast.error("خطا در تایید پرداخت");
      }
    } catch (error) {
      toast.error("خطایی رخ داد");
      console.log(error);
    }
  };

  const handleDeletePayments = async () => {
    try {
      const response = await DeletePayments(id, token);
      if (response) {
        toast.success("پرداخت با موفقیت حذف شد");
        setOpenEditModal(false);
        router.refresh();
      } else {
        toast.error("خطا در حذف پرداخت");
      }
    } catch (error) {
      toast.error("خطایی رخ داد");
      console.log(error);
    }
  };

  useEffect(() => {
    if (state.message === 'پرداخت با موفقیت ویرایش شد') {
      toast.success('پرداخت با موفقیت ویرایش شد');
      handleClose();
      router.refresh();
    } else if (state.message && state.message !== 'پرداخت با موفقیت ویرایش شد') {
      toast.error(state.message);
    }
  }, [state, router])

  return (
    <>
      {/* دکمه سه نقطه */}
      <button
        onClick={handleClick}
        className="p-2 hover:bg-whiteColor rounded-full transition-all duration-200 group cursor-pointer"
      >
        <EllipsisVertical size={20} className="text-primary" />
      </button>

      {/* منوی اصلی */}
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
          onClick={handleVerifyPayments}
          className="!text-success !flex !gap-2 hover:!bg-lightSuccess/20"
        >
          <CalendarCheck size={18} />
          تایید کردن پرداخت
        </MenuItem>
        <MenuItem
          onClick={handleOpenEditModal}
          className="!text-primary !flex !gap-2 hover:!bg-lightPrimary"
        >
          <SquarePen size={18} />
          ویرایش پرداخت
        </MenuItem>
        <MenuItem
          onClick={handleDeletePayments}
          className="!text-red !flex !gap-2 hover:!bg-red-50"
        >
          <Trash2 size={18} />
          حذف پرداخت
        </MenuItem>
      </Menu>

      {/* مودال ویرایش پرداخت */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          },
        }}
      >
        <div className="flex items-center justify-between py-2">
          <DialogTitle className="text-[22px] font-bold text-primary">
            ویرایش پرداخت
          </DialogTitle>
          <IconButton className="!ml-3" onClick={() => setOpenEditModal(false)}>
            <X size={24} />
          </IconButton>
        </div>
        <DialogContent className="p-6">
          <form action={formAction} className="space-y-6">
            <Input
              value={amount}
              setState={setAmount}
              lable="مبلغ پرداخت (تومان)"
              placeholder="مثلاً: 250000"
              name="amount"
            />
            <Input
              value={description}
              setState={setDescription}
              lable="توضیحات پرداخت"
              placeholder="توضیحات پرداخت را وارد کنید"
              name="description"
            />
            <div className="space-y-2">
              <h3 className="font-bold text-dark text-[16px]">وضعیت پرداخت</h3>
              <select
                className="bg-lightGray w-full p-3 text-primary rounded-[40px]"
                name="status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                <option value="pending">در انتظار</option>
                <option value="completed">تایید شده</option>
              </select>
            </div>
            <input type="hidden" name="transactionId" value={""} />
            <input type="hidden" name="id" value={id} />
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setOpenEditModal(false)}
                className="w-[48%] py-3 border border-gray rounded-xl text-gray"
              >
                انصراف
              </button>
              <FillButton
                ButtonText="ذخیره تغییرات"
                className="w-[48%] rounded-xl"
                type="submit"
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentActionMenu;

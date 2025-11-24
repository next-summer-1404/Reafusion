'use client'
import { MarkAsAllReadAction } from "@/app/(Dashboard)/dashboard/notifications/MarkAsAllReadAction";
import FillButton from "@/components/Ui/Buttons/FillButton";
import { Dialog } from "@mui/material";
import { X } from "lucide-react";
import React, { FC, FormEvent } from "react";
import { toast } from "react-toastify";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const MarkAllReadModal: FC<IProps> = ({ open, handleClose }) => {

  const handleSubmit = async (e: FormEvent) => {
     e.preventDefault();
     try {
      const result = await MarkAsAllReadAction();  
      if (result.success) {
        toast.success("همه اعلان‌ها به عنوان خوانده شده علامت‌گذاری شدند.");
        handleClose();
      } else {
        toast.error(result.error || "خطایی رخ داد.");
      }
    } catch {
      toast.error("خطا در ارتباط با سرور.");
    }
  }
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={false}
      PaperProps={{
        className: "!w-[450px] m-auto !rounded-[24px] max-w-none py-6 px-5 dark:!bg-dark",
      }}
      fullWidth
    >
      <div className="flex justify-end">
        <button
          onClick={handleClose}
          className="size-[48px] rounded-full cursor-pointer bg-lightGray text-dark flex justify-center items-center"
        >
          <X />
        </button>
      </div>
      <h3 className="text-[24px] text-dark dark:text-whiteColor font-bold text-center pt-4 px-2">
        آیا مطمئن هستید که میخواهید همه مطالب سایت را به عنوان خوانده شده علامت
        بزنید؟
      </h3>
      <form onSubmit={handleSubmit} className="pt-6 flex justify-between">
        <button
          onClick={handleClose}
          className="text-gray border border-gray dark:border-lightGray dark:text-lightGray flex justify-center cursor-pointer items-center rounded-[16px] p-3 px-16"
        >
          انصراف
        </button>
        <FillButton type="submit" ButtonText="موافقت" className="p-3 px-16 !rounded-[16px]"/>
      </form>
    </Dialog>
  );
};

export default MarkAllReadModal;

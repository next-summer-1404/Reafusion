// components/Pages/DashboardPages/AllCategoriesManaenmentPage/AddCategoryModal.tsx
"use client";

import React, { useActionState, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { X } from "lucide-react";
import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import { useRouter } from "next/navigation";
import AddCategoryAction from "@/app/(Dashboard)/dashboard/AllCategoriesManagement/serverActions/AddCategoryAction";
import { toast } from "react-toastify";

interface Props {
  open: boolean;
  searchParams: Record<string, string>;
}

const AddCategoryModal: React.FC<Props> = ({ open, searchParams }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [state, formAction] = useActionState(AddCategoryAction, { message: '' });

  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");
    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    if (state.message === "دسته بندی با موفقیت ایجاد شد"){
      toast.success("دسته بندی با موفقیت ایجاد شد");
      router.refresh()
    } else if (state.message && state.message !== "دسته بندی با موفقیت ایجاد شد") {
      toast.error(state.message)
    }
  }, [state, router])

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
        },
      }}
    >
      <div className="flex items-center justify-between pl-3">
        <DialogTitle className="text-[20px] font-bold text-primary">
          افزودن دسته‌بندی جدید
        </DialogTitle>
        <IconButton onClick={handleClose}>
          <X size={24} />
        </IconButton>
      </div>

      <DialogContent className="p-6">
        <form action={formAction} className="space-y-6">
          <Input
            name="name"
            value={name}
            setState={setName}
            lable="نام دسته‌بندی"
            placeholder="نام دسته بندی مورد نظر را وارد کنید"
          />
          <div className="flex justify-between gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="w-[47%] py-3 border border-gray rounded-xl text-gray"
            >
              انصراف
            </button>
            <FillButton
              ButtonText="ایجاد دسته‌بندی"
              className="w-[47%] rounded-xl"
              type="submit"
            />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryModal;
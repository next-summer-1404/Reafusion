"use client";

import React, { FC, useActionState, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  EllipsisVertical,
  SquarePen,
  Trash2,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { DeleteCategory } from "@/core/Apis/Dashboard/DeleteCategory";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import EditCategoryAction from "@/app/(Dashboard)/dashboard/AllCategoriesManagement/serverActions/EditCategoryAction";

interface IProps {
  token: string;
  id: string;
  currentName?: string;
}

const CategoryActionMenu: FC<IProps> = ({ token, id, currentName = "" }) => {
  const [state, formAction] = useActionState(EditCategoryAction, { message: '' })
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [name, setName] = useState(currentName);

  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleOpenEditModal = () => {
    setName(currentName); // دوباره مقدار فعلی رو ست کن (در صورت نیاز)
    setOpenEditModal(true);
    handleClose();
  };

  const handleDeleteCategory = async () => {
    try {
      const response = await DeleteCategory(token, id);
      if (response) {
        toast.success("دسته‌بندی با موفقیت حذف شد");
        handleClose();
        router.refresh();
      }
    } catch (error) {
      toast.error("خطا در حذف دسته‌بندی");
      console.log(error);
    }
  };

  useEffect(() => {
    if (state.message === 'دسته بندی با موفقیت ویرایش شد') {
      toast.success('دسته بندی با موفقیت ویرایش شد');
      setOpenEditModal(false);
      router.refresh();
    } else if (state.message && state.message !== 'دسته بندی با موفقیت ویرایش شد') {
      toast.error(state.message)
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
          onClick={handleOpenEditModal}
          className="!text-primary !flex !gap-2 hover:!bg-lightPrimary"
        >
          <SquarePen size={18} />
          ویرایش دسته‌بندی
        </MenuItem>
        <MenuItem
          onClick={handleDeleteCategory}
          className="!text-red !flex !gap-2 hover:!bg-red-50"
        >
          <Trash2 size={18} />
          حذف دسته‌بندی
        </MenuItem>
      </Menu>

      {/* مودال ویرایش دسته‌بندی - فقط یک اینپوت */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
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
            ویرایش دسته‌بندی
          </DialogTitle>
          <IconButton onClick={() => setOpenEditModal(false)}>
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
              placeholder="نام دسته بندی خانه را وارد کنید"
            />
            <input type="hidden" name="id" value={id} />
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => setOpenEditModal(false)}
                className="w-[47%] py-3 border border-gray cursor-pointer rounded-xl text-gray"
              >
                انصراف
              </button>
              <FillButton
                ButtonText="ذخیره تغییرات"
                className="w-[47%] rounded-xl"
                type="submit"
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CategoryActionMenu;
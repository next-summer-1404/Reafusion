"use client";

import React, { FC, useActionState, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EllipsisVertical, SquarePen, Trash2, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { DeleteComments } from "@/core/Apis/Dashboard/DeleteComments";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import EditCommentsAction from "@/app/(Dashboard)/dashboard/CommentsManagement";

interface IProps {
  token: string;
  id: string;
  currentTitle?: string;
  currentCaption?: string; 
  currentRating?: string; 
}

const CommentActionMenu: FC<IProps> = ({
  token,
  id,
  currentTitle = "",
  currentCaption = "",
  currentRating = 0,
}) => {
  const [state, formAction] = useActionState(EditCommentsAction, { message: '' })
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  const [title, setTitle] = useState(currentTitle);
  const [caption, setCaption] = useState(currentCaption);
  const [rating, setRating] = useState(currentRating);

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

  const handleDeleteComments = async () => {
    try {
      const response = await DeleteComments(token, id);
      if (response) {
        toast.success("نظر با موفقیت حذف شد");
        handleClose();
        router.refresh();
      } else {
        toast.error("خطا در حذف نظر");
      }
    } catch (error) {
      toast.error("خطایی رخ داد");
      console.log(error);
    }
  };

  useEffect(() => {
    if (state.message === 'نظر با موفقیت ویرایش شد') {
      toast.success('نظر با موفقیت ویرایش شد');
      handleClose();
      router.refresh()
    } else if (state.message && state.message !== 'نظر با موفقیت ویرایش شد') {
      toast.error(state.message)
    }
  }, [state, router])

  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 hover:bg-whiteColor rounded-full transition-all duration-200 group cursor-pointer"
      >
        <EllipsisVertical
          size={20}
          className="text-primary transition-colors"
        />
      </button>
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
          ویرایش نظر
        </MenuItem>
        <MenuItem
          onClick={handleDeleteComments}
          className="!text-red !flex !gap-2 hover:!bg-red-50"
        >
          <Trash2 size={18} />
          حذف نظر
        </MenuItem>
      </Menu>

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
        <div className="flex items-center justify-between px-4 py-2">
          <DialogTitle className="text-[22px] font-bold text-primary">
            ویرایش نظر کاربر
          </DialogTitle>
          <IconButton onClick={() => setOpenEditModal(false)}>
            <X size={24} />
          </IconButton>
        </div>

        <DialogContent className="px-6 space-y-5">
          <form action={formAction} className="space-y-5">
            <input type="hidden" name="id" value={id} />
            <Input
              value={title}
              setState={setTitle}
              name="title"
              lable="عنوان نظر"
              placeholder="عنوان نظر را وارد کنید"
            />
            <Input
              value={caption}
              setState={setCaption}
              name="caption"
              lable="عنوان نظر"
              placeholder="عنوان نظر را وارد کنید"
            />
            <div>
              <label className="block text-[16px] font-medium text-dark mb-2">
                امتیاز (از ۱ تا ۵)
              </label>
              <select
                value={rating || '0'}
                name="rating"
                onChange={(e) => setRating(e.target.value)}
                className="w-full p-3 bg-lightGray rounded-xl text-primary outline-none focus:border-primary"
              > 
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="flex justify-between py-3">
              <button
                onClick={() => setOpenEditModal(false)}
                className="w-[47%] cursor-pointer py-3 border border-gray rounded-xl text-gray transition"
              >
                انصراف
              </button>
              <FillButton
                ButtonText="ذخیره تغییرات"
                className="w-[47%] rounded-xl"
                onClick={() => {
                  toast.info("در آینده API ویرایش اضافه میشه :)");
                  setOpenEditModal(false);
                }}
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CommentActionMenu;

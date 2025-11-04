'use client'
import EmptyButton from "@/components/Ui/Buttons/EmptyButton";
import React, { FC, useActionState, useEffect } from "react";
import { Dialog, Avatar } from "@mui/material";
import FillButton from "@/components/Ui/Buttons/FillButton";
import { X } from "lucide-react";
import { UpdateImageAction } from "@/app/(Dashboard)/dashboard/profile/UpdateImageAction";
import EmptyImage from "../../../../../assets/images/UnKnownUserImg/UnKnownUser.jpg";
import { toast } from "react-toastify";

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  handleClose: () => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedImage: string;
  ProfileImage: string;
}

const UpdateImageModal: FC<IProps> = ({ open, handleClose, setOpen, handleImageChange, selectedImage, ProfileImage }) => {
  const [imageState, imageAction] = useActionState(UpdateImageAction, { message: '' });
   
  useEffect(() => {
    if (imageState.message === 'عکس شما با موفقیت ثبت شد') {
       toast.success('عکس شما با موفقیت ثبت شد');
       setOpen(false)
    } else if (imageState.message && imageState.message !== 'عکس شما با موفقیت ثبت شد' ) {
      toast.error(imageState.error)
    }
  }, [imageState, setOpen])
   
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={false}
      PaperProps={{
        className: "!w-[450px] m-auto !rounded-[24px] max-w-none py-6 px-5",
      }}
      fullWidth
    >
      <div className="flex justify-between items-center">
        <h3 className="!text-[24px] !text-dark !font-bold">انتخاب پروفایل</h3>
        <button
          onClick={handleClose}
          className="flex justify-center items-center size-[48px] rounded-full bg-lightGray cursor-pointer hover:bg-gray-300 transition"
        >
          <X size={20} />
        </button>
      </div>
      <form
        action={imageAction}
        className="flex flex-col items-center space-y-6 mt-6"
      >
        <Avatar
          src={selectedImage || ProfileImage || EmptyImage.src}
          sx={{ width: 160, height: 160 }}
          className="!rounded-full"
        />
        <label htmlFor="upload-photo" className="cursor-pointer w-full">
          <input
            accept="image/*"
            id="upload-photo"
            type="file"
            name="picture"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <div className="flex justify-center flex-wrap gap-4 pt-4">
            <EmptyButton
              onClick={handleClose}
              ButtonText="انصراف"
              className="p-3 px-13 !border-gray !text-gray"
            />
            <FillButton
              ButtonText="انتخاب عکس"
              className="p-4 px-8 bg-thidary !text-dark"
              type="button"
              onClick={() => document.getElementById("upload-photo")?.click()}
            />
            <FillButton
              ButtonText="ثبت عکس"
              className="p-4 w-full"
              type="submit"
            />
          </div>
        </label>
      </form>
    </Dialog>
  );
};

export default UpdateImageModal;

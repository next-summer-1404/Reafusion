"use client";
import { Camera } from "lucide-react";
import Image from "next/image";
import React, { FC, useActionState, useEffect, useState } from "react";
import UserInput from "../UserInput";
import FillButton from "@/components/Ui/Buttons/FillButton";
import EmptyImage from "../../../../../assets/images/UnKnownUserImg/UnKnownUser.jpg";
import { UpdatePersonalInfoAction } from "@/app/(Dashboard)/dashboard/profile";
import { toast } from "react-toastify";
import UpdateImageModal from "./UpdateImageModal";

interface IProps {
  ProfileImage: string;
}

const UserPersonalInfo: FC<IProps> = ({ ProfileImage }) => {
  // the state for show modal and get the image as file
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // the state for show modal and get the image as file end
  // the useActionsState hook for manage serverAction
  const [state, formAction] = useActionState(UpdatePersonalInfoAction, { message: '' });
  // the useActionsState hook for manage serverAction end
  // manage response and show that to user
  useEffect(() => {
    if (state.message === "اطلاعات شما با موفقیت ثبت شد") {
      toast.success("اطلاعات شما با موفقیت ثبت شد");
    } else if (state.message && state.message !== "اطلاعات شما با موفقیت ثبت شد") {
      toast.error(state.error || 'خطا در ثبت اطلاعات')
    }
  }, [state])
  // manage response and show that to user end
  // manage modal functions
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    if (selectedImage && selectedImage.startsWith("blob:")) {
      URL.revokeObjectURL(selectedImage);
    }
    setOpen(false);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
    }
  };
  // manage modal functions end

  return (
    <>
      {/* userImage */}
      <div className="flex w-full justify-center items-center">
        <div className="rounded-full size-[160px] overflow-hidden group group-hover:opacity-80 relative">
          <Image
            onClick={handleOpen}
            src={selectedImage || ProfileImage || EmptyImage}
            alt="userImage"
            width={160}
            height={160}
            className="object-cover w-full h-full cursor-pointer"
          />
          <div className="absolute top-[34%] left-[35%] text-primary opacity-0 group-hover:opacity-100 bg-white p-2 transition-all duration-300 flex justify-center items-center rounded-full size-[50px]">
            <Camera size={40} />
          </div>
        </div>
      </div>
      {/* userImage end */}
      {/* change userInformation */}
      <form action={formAction} className="flex justify-between flex-wrap gap-8">
        <UserInput
          lable="نام"
          name="firstName"
          placeholder="نام خود رو وارد کنید"
        />
        <UserInput
          lable="نام خانوادگی"
          name="lastName"
          placeholder="نام خانوادگی خود را وارد کنید"
        />
        <UserInput
          lable="شماره تلفن"
          name="phoneNumber"
          placeholder="شماره تلفن خود را وارد کنید"
        />
        <UserInput
          lable="ایمیل"
          name="email"
          placeholder="ایمیل خود را وارد کنید"
        />
        <FillButton type="submit" ButtonText="اعمال تغییرات" className="p-3 px-4 max-sm:w-full !rounded-2xl" />
      </form>
      {/* change userInformation end */}
      {/* modal for change user image */}
      <UpdateImageModal
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
        handleImageChange={handleImageChange}
        selectedImage={selectedImage as string}
        ProfileImage={ProfileImage}
      />
      {/* modal for change user image end */}
    </>
  );
};

export default UserPersonalInfo;
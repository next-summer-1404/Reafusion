"use client";
import React, { useActionState, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  EllipsisVertical,
  Trash2,
  UserRoundCog,
  UserRoundPen,
  X,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { DeleteUserAcount } from "@/core/Apis/Dashboard/DeleteUserAcount";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import FillButton from "@/components/Ui/Buttons/FillButton";
import EditUserRoleAction from "@/app/(Dashboard)/dashboard/AllUsersManagement";
import Input from "@/components/Ui/Input";
import Image, { StaticImageData } from "next/image";
import EditUsersDataAction from "@/app/(Dashboard)/dashboard/AllUsersManagement/EditUsersDataAction";

interface IProps {
  userId: string;
  token: string;
  userRole: string;
  userName?: string;
  userEmail?: string;
  userPhone?: string;
  userFirstName?: string;
  userLastName?: string;
  userMemberShip?: string;
  emailVerified?: boolean;
  userPhoto?: string | StaticImageData;
}

const UserActionMenu: React.FC<IProps> = ({
  userId,
  token,
  userRole,
  userName,
  userEmail,
  userFirstName,
  userLastName,
  userPhone,
  userMemberShip,
  emailVerified,
  userPhoto,
}) => {
  const router = useRouter();
  const [state, formAction] = useActionState(EditUserRoleAction, {
    message: "",
  });
  const [state2, formAction2] = useActionState(EditUsersDataAction, { message: '' });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openRoleModal, setOpenRoleModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false); 
  const [username, setUsername] = useState(userName)
  const [useremail, setUseremail] = useState(userEmail);
  const [firstname, setFirstName] = useState(userFirstName);
  const [userlastName, setUserlastName] = useState(userLastName);
  const [userphone, setUserphone] = useState(userPhone);
  const [usermemberShip, setUsermemberShip] = useState(userMemberShip);
  const [emailverified, setEmailverified] = useState(emailVerified)

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleOpenRoleModal = () => {
    setOpenRoleModal(true);
    handleClose();
  };

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
    handleClose();
  };

  const handleDeleteUser = async () => {
    try {
      const response = await DeleteUserAcount(userId, token);
      if (response) {
        toast.success("کاربر با موفقیت حذف شد");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  useEffect(() => {
    if (
      state.message ===
      "نقش کاربر با موفقیت تغییر کرد , صبر کنید تا نشان داده شود"
    ) {
      toast.success("نقش کاربر با موفقیت تغییر کرد");
      setOpenRoleModal(false);
      router.refresh();
    } else if (
      state.message &&
      state.message !==
        "نقش کاربر با موفقیت تغییر کرد , صبر کنید تا نشان داده شود"
    ) {
      toast.error(state.message);
    }
  }, [state, router]);

   useEffect(() => {
    if (
      state2.message ===
      'اطلاعات کاربر با موفقیت تغییر کرد'
    ) {
      toast.success('اطلاعات کاربر با موفقیت تغییر کرد');
      setOpenEditModal(false);
      router.refresh();
    } else if (
      state2.message &&
      state2.message !==
       'اطلاعات کاربر با موفقیت تغییر کرد'
    ) {
      toast.error(state2.message);
    }
  }, [state2, router]);

  return (
    <>
      {/* دکمه سه نقطه */}
      <button
        onClick={handleClick}
        className="p-2 hover:bg-whiteColor cursor-pointer rounded-full transition-all duration-200 group"
      >
        <EllipsisVertical
          size={20}
          className="text-gray-500 group-hover:text-primary transition-colors"
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
          <UserRoundCog size={18} />
          ویرایش اطلاعات کاربر
        </MenuItem>

        <MenuItem
          onClick={handleOpenRoleModal}
          className="!text-primary !flex !gap-2 hover:!bg-lightPrimary"
        >
          <UserRoundPen size={18} />
          تغییر نقش کاربر
        </MenuItem>

        <MenuItem
          onClick={handleDeleteUser}
          className="!flex !gap-2 !text-red hover:!bg-red-50"
        >
          <Trash2 size={18} />
          حذف کاربر
        </MenuItem>
      </Menu>
      {/* for change user role */}
      <Dialog
        open={openRoleModal}
        onClose={() => setOpenRoleModal(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "40px",
            padding: "10px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            border: "2px solid transparent",
            backgroundColor: "#ffffff",
          },
        }}
      >
        <div className="flex items-center justify-between">
          <DialogTitle className="text-[20px] flex items-center text-primary gap-2 font-bold">
            تغییر نقش کاربر
          </DialogTitle>
          <button
            onClick={() => setOpenRoleModal(false)}
            className="ml-3 cursor-pointer size-[40px] bg-lightPrimary hover:bg-primary/20 flex justify-center items-center rounded-full transition"
          >
            <X size={20} />
          </button>
        </div>
        <DialogContent className="pt-6 space-y-6">
          <form action={formAction}>
            <input type="hidden" name="id" value={userId} />
            <div>
              <label className="block text-[18px] mb-2">انتخاب نقش جدید</label>
              <select
                name="role"
                defaultValue={userRole}
                className="w-full px-4 py-3 border border-borderColor outline-0 rounded-xl"
              >
                <option value="buyer">خریدار</option>
                <option value="seller">فروشنده</option>
                <option value="admin">ادمین</option>
              </select>
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => setOpenRoleModal(false)}
                className="px-5 py-2 w-[47%] cursor-pointer border border-gray rounded-xl"
              >
                لغو
              </button>
              <FillButton
                className="w-[47%] rounded-xl"
                ButtonText="تغییر نقش"
                type="submit"
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
      {/* for change userAcout datas */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "40px",
            overflow: "hidden",
            boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
          },
        }}
      >
        <div className="flex items-center justify-between p-2">
          <DialogTitle className="text-[22px] font-bold text-primary flex items-center gap-3">
            ویرایش اطلاعات کاربر
          </DialogTitle>
          <button
            onClick={() => setOpenEditModal(false)}
            className="ml-3 size-[40px] bg-lightPrimary cursor-pointer rounded-full flex justify-center items-center"
          >
            <X size={24} />
          </button>
        </div>
        <DialogContent className="p-8 space-y-6">
          <form action={formAction2} className="space-y-6">
            <div className="rounded-[25px] h-[200px] overflow-hidden !object-cover mb-4">
              <Image
                src={userPhoto as string}
                alt="userPhoto"
                width={300}
                height={100}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <Input
              value={useremail}
              setState={setUseremail}
              lable="ایمیل کاربر"
              placeholder="example@gmail.com"
              name="email"
            />
            <Input
              value={firstname}
              setState={setFirstName}
              lable="نام کاربر"
              placeholder="فلان"
              name="firstName"
            />
            <Input
              value={userlastName}
              setState={setUserlastName}
              lable="نام خانوادگی کاربر"
              placeholder="فلانی"
              name="lastName"
            />
            <Input
              value={username}
              setState={setUsername}
              lable="نام کامل"
              placeholder="فلان فلانی"
              name="fullName"
            />
            <Input
              value={userphone || ""}
              setState={setUserphone}
              lable="شماره تلفن"
              placeholder="09111111111"
              name="phoneNumber"
            />
            <Input
              value={usermemberShip ? usermemberShip : "2025-01-02"}
              setState={setUsermemberShip}
              lable="تاریخ عضویت"
              placeholder="09111111111"
              name="membershipDate"
            />
            <div className="space-y-2">
              <h3 className="font-bold text-dark text-[16px]">
                آیا ایمیل تایید شده است ؟
              </h3>
              <select
                defaultValue={emailverified === true ? "true" : "false"}
                onChange={(event) => setEmailverified(event.target.value === 'true')}
                className="bg-lightGray w-full p-3  text-primary rounded-[40px]"
                name="emailVerified"
              >
                <option value="true">بله</option>
                <option value="false">خیر</option>
              </select>
            </div>
            <input type="hidden" name="profilePicture" value={''} />
            <input type="hidden" name="id" value={userId} />
            <div className="flex justify-between pt-6">
              <button
                onClick={() => setOpenEditModal(false)}
                className="px-6 py-3 border w-[47%] border-gray rounded-xl cursor-pointer text-gray"
              >
                انصراف
              </button>
              <FillButton ButtonText="ذخیره تغییرات" className="px-8 w-[47%] font-normal rounded-xl" type="submit" />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserActionMenu;
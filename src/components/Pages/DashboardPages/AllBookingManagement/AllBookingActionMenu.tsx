"use client";
import React, { FC, useActionState, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  EllipsisVertical,
  CalendarCheck,
  Trash2,
  CircleOff,
  SquarePen,
} from "lucide-react";
import { DeleteBookingAdmin } from "@/core/Apis/Dashboard/DeleteBookingAdmin";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ConfrimBookingAdmin } from "@/core/Apis/Dashboard/ConfrimBookingAdmin";
import { CancelBookingAdmin } from "@/core/Apis/Dashboard/CancelBookingAdmin";

// مودال ویرایش رزرو (دقیقاً مثل مودال‌های قبلی)
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { X } from "lucide-react";
import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import { IBookingData } from "@/core/types/IBookingDatas";
import EditBookingAdminAction from "@/app/(Dashboard)/dashboard/AllBookingManagement";

interface IProps {
  token: string;
  bookingId: number;
  status: string;
  booking: IBookingData;
}

const AllBookingActionMenu: FC<IProps> = ({
  token,
  bookingId,
  status,
  booking,
}) => {
  const [state, formAction] = useActionState(EditBookingAdminAction, { message: '' })

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openEditModal, setOpenEditModal] = useState(false); 
  const [sharedEmail, setSharedEmail] = useState(booking?.sharedEmail || "")
  const [arrivalDate, setArrivalDate] = useState(booking.reservedDates?.[0]?.value || "-");
  const [departureDate, setDepartureDate] = useState(booking.reservedDates?.[1]?.value || "-")
  const [sharedMobile, setSharedMobile] = useState(booking?.sharedMobile || "");
  const [gender, setGender] = useState(booking.traveler_details[0].gender);
  const [firstName, setFirstName] = useState(booking.traveler_details[0].firstName);
  const [lastName, setLastName] = useState(booking.traveler_details[0].lastName);
  const [birthDate, setBirthDate] = useState(booking.traveler_details[0].birthDate);
  const [nationalId, setNationalId] = useState(booking.traveler_details[0].nationalId);
  const [userstatus, setUserstatuss] = useState(booking.status)
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleDeleteBooking = async () => {
    try {
      const response = await DeleteBookingAdmin(token, bookingId);
      if (response) {
        toast.success("رزرو با موفقیت حذف شد");
        handleClose();
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleContinueBooking = async () => {
    try {
      const response = await ConfrimBookingAdmin(token, bookingId);
      if (response) {
        toast.success("رزرو با موفقیت تایید شد");
        handleClose();
        router.refresh();
      } else {
        toast.error("خطا در تایید رزرو");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelBooking = async () => {
    try {
      const response = await CancelBookingAdmin(token, bookingId);
      if (response) {
        toast.success("رزرو با موفقیت لغو شد");
        handleClose();
        router.refresh();
      } else {
        toast.error("خطا در لغو رزرو");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenEdit = () => {
    setOpenEditModal(true);
    handleClose();
  };

  useEffect(() => {
    if (state.message === 'رزور با موفقیت ویرایش شد') {
      toast.success('رزور با موفقیت ویرایش شد');
      router.refresh()
      setOpenEditModal(false);
    } else if (state.message && state.message !== 'رزور با موفقیت ویرایش شد') {
      toast.error(state.message)
    }
  }, [state, router])

  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 hover:bg-whiteColor rounded-full transition-all duration-200 group cursor-pointer"
      >
        <EllipsisVertical size={20} className="text-primary" />
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
        {status !== "confirmed" && (
          <MenuItem
            onClick={handleContinueBooking}
            className="!text-success !flex !gap-2 hover:!bg-lightSuccess/20"
          >
            <CalendarCheck size={18} />
            تایید رزرو
          </MenuItem>
        )}
        {status === "pending" && (
          <MenuItem
            onClick={handleCancelBooking}
            className="!text-primary !flex !gap-2 hover:!bg-lightPrimary"
          >
            <CircleOff size={18} />
            لغو رزرو
          </MenuItem>
        )}
        <MenuItem
          onClick={handleOpenEdit} // فقط این عوض شد
          className="!text-primary !flex !gap-2 hover:!bg-lightPrimary"
        >
          <SquarePen size={18} />
          ویرایش رزرو
        </MenuItem>
        <MenuItem
          onClick={handleDeleteBooking}
          className="!text-red !flex !gap-2 hover:!bg-red-50"
        >
          <Trash2 size={18} />
          حذف رزرو
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
        <div className="flex items-center justify-between py-2">
          <DialogTitle className="text-[22px] font-bold text-primary">
            ویرایش اطلاعات رزرو
          </DialogTitle>
          <IconButton className="!ml-3" onClick={() => setOpenEditModal(false)}>
            <X size={24} />
          </IconButton>
        </div>

        <DialogContent className="p-6 space-y-6">
          <form action={formAction}>
            <input type="hidden" name="houseId" value={booking.houseId} />
            <input type="hidden" name="id" value={booking.id} />
            <Input
              name="sharedEmail"
              lable="ایمیل به اشتراک گذاشته شده"
              placeholder="example@gmail.com"
              value={sharedEmail}
              setState={setSharedEmail}
            />
            <Input
              name="arrivalDate"
              lable="تاریخ شروع رزرو"
              placeholder="تاریخ شروع رزرو را بنویسید"
              value={arrivalDate}
              setState={setArrivalDate}
            />
            <Input
              name="departureDate"
              lable="تاریخ پایان رزرو"
              placeholder="تاریخ پایان رزرو را بنویسید"
              value={departureDate}
              setState={setDepartureDate}
            />
            <Input
              name="phoneNumber"
              lable="شماره موبایل"
              placeholder="09123456789"
              value={sharedMobile}
              setState={setSharedMobile}
            />
            <div className="space-y-2">
              <h3 className="font-bold text-dark text-[16px]">جنسیت مسافر</h3>
              <select
                className="bg-lightGray w-full p-3 text-primary rounded-[40px]"
                name="gender"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
              >
                <option value="mail">مرد</option>
                <option value="femail">زن</option>
              </select>
            </div>
            <Input
              name="firstName"
              lable="نام مسافر"
              placeholder="09123456789"
              value={firstName}
              setState={setFirstName}
            />
            <Input
              name="lastName"
              lable="نام خانوادگی مسافر"
              placeholder="09123456789"
              value={lastName}
              setState={setLastName}
            />
            <Input
              name="birthDate"
              lable="تاریخ تولد مسافر"
              placeholder="09123456789"
              value={birthDate}
              setState={setBirthDate}
            />
            <Input
              name="nationalId"
              lable="کد ملی مسافر"
              placeholder="09123456789"
              value={nationalId}
              setState={setNationalId}
            />
            <div className="space-y-2">
              <h3 className="font-bold text-dark text-[16px]">وضعیت رزرو</h3>
              <select
                className="bg-lightGray w-full p-3 text-primary rounded-[40px]"
                name="status"
                value={userstatus}
                onChange={(event) => setUserstatuss(event.target.value)}
              >
                <option value="confirmed">تایید شده</option>
                <option value="pending">در انتظار</option>
                <option value="canceled">لغو شده</option>
              </select>
            </div>
            <div className="flex justify-end pt-4">
              <FillButton
                ButtonText="ویرایش اطلاعات"
                className="w-full rounded-xl p-3.5"
                type="submit"
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllBookingActionMenu;

'use client'
import FillButton from "@/components/Ui/Buttons/FillButton";
import React, { useState } from "react";
import MarkAllReadModal from "./MarkAllReadModal";

const NotificationTopBar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex max-sm:flex-col max-sm:gap-4 justify-between items-center">
      <h2 className="text-[24px] text-dark dark:text-whiteColor font-bold">لیست اعلانات شما</h2>
      <div className="flex max-sm:flex-col gap-5">
        <FillButton
          className="p-2.5 px-4"
          onClick={() => setOpen(true)}
          ButtonText="علامت گذاری به عنوان خوانده شده"
        />
      </div>
      <MarkAllReadModal open={open} handleClose={handleClose}/>
    </div>
  );
};

export default NotificationTopBar;

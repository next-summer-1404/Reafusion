'use client'
import React, { useActionState, useEffect } from "react";
import UserInput from "../UserInput";
import FillButton from "@/components/Ui/Buttons/FillButton";
import { UpdateUserPasswordAction } from "@/app/(Dashboard)/dashboard/profile/UpdateUserPasswordAction";
import { toast } from "react-toastify";

const UserSecurityInfo = () => {
  // the useActionsState hook for manage serverAction 
  const [state, formAction] = useActionState(UpdateUserPasswordAction, { message: '' })
  // the useActionsState hook for manage serverAction end
  // manage response and show that to user
  useEffect(() => {
    if (state.message === 'رمز عبور شما با موفقیت ثبت شد') {
      toast.success('رمز عبور شما با موفقیت ثبت شد')
    } else if (state.message && state.message !== 'رمز عبور شما با موفقیت ثبت شد') {
      toast.error(state.error || 'خطا در ثبت رمزعبور جدید')
    }
  }, [state])
  // manage response and show that to user end

  return (
    <form className="w-full" action={formAction}>
      <div className="flex w-full justify-between flex-wrap space-y-6">
        <UserInput
          lable="رمزعبور قبلی"
          name="currentPassword"
          placeholder="رمز عبور قبلی را وارد کنید"
        />
        <UserInput
          lable="رمزعبور جدید"
          name="newPassword"
          placeholder="رمز عبور جدید را وارد کنید"
        />
        <UserInput
          lable="تکرار رمزعبور جدید"
          placeholder="رمز عبور جدید را تکرار کنید"
        />
      </div>
      <FillButton type="submit" ButtonText="اعمال تغییرات" className="p-3 px-4 mt-7 !rounded-2xl"/>
    </form>
  );
};

export default UserSecurityInfo;

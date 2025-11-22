'use client'
import { MarkAsReadNotificationAction } from "@/app/(Dashboard)/dashboard/notifications";
import { CircleCheck } from "lucide-react";
import React, { FC, useActionState, useEffect } from "react";
import { toast } from "react-toastify";

interface IProps {
  title?: string;
  id: string;
  message?: string;
  isRead?: boolean;
}

const NotificationCard: FC<IProps> = ({ title, message, isRead, id }) => {
  const [state, formAction] = useActionState(MarkAsReadNotificationAction, { message: '' })
  console.log(state)

  useEffect(() => { 
    if (state.message === 'اعلان با موفقیت علامت گزاری شد') {
      toast.success('اعلان با موفقیت علامت گزاری شد');
    } else if (state.message && state.message !== 'اعلان با موفقیت علامت گزاری شد') {
      toast.error(state.message)
    }
  }, [state])

  return (
    <div className="flex max-sm:flex-col max-sm:gap-4 justify-between items-center text-[16px] text-dark border border-primary p-2 rounded-[16px]">
      <h3 className="w-[360px] max-sm:w-full max-sm:text-center">{title}</h3>
      <h3>{message}</h3>
      {isRead === false ? (
        <form action={formAction}>
          <input type="hidden" name="id" value={id} />
          <button type="submit" className="hover:bg-[#008C78] text-[#008C78] transition-all hover:text-whiteColor rounded-[16px] p-2 flex gap-2 cursor-pointer">
            <CircleCheck />
            علامت گذاری به عنوان خوانده شده
          </button>
        </form>     
      ) : (
        <h3 className="w-[220px] text-center">-----</h3>
      )}
    </div>
  );
};

export default NotificationCard;

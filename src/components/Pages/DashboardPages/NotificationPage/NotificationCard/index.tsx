'use client'
import { MarkAsReadNotificationAction } from "@/app/(Dashboard)/dashboard/notifications";
import { CircleCheck } from "lucide-react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  useEffect(() => { 
    if (state?.message === 'اعلان با موفقیت علامت گزاری شد') {
      toast.success('اعلان با موفقیت علامت گزاری شد');
      router.refresh()
    } else if (state?.message && state.message !== 'اعلان با موفقیت علامت گزاری شد') {
      toast.error(state.message)
    }
  }, [state, router])

  return (
    <div className="flex max-sm:flex-col max-sm:gap-4 justify-between items-center text-[16px] text-dark border border-primary dark:border-thidary p-2 rounded-[16px]">
      <h3 className="w-[360px] max-sm:w-full max-sm:text-center dark:text-whiteColor">{title}</h3>
      <h3 className="dark:text-whiteColor">{message}</h3>
      {isRead === false ? (
        <form action={formAction}>
          <input type="hidden" name="id" value={id} />
          <button type="submit" className="hover:bg-[#008C78] text-[#008C78] transition-all hover:text-whiteColor rounded-[16px] p-2 flex gap-2 cursor-pointer">
            <CircleCheck />
            علامت گذاری به عنوان خوانده شده
          </button>
        </form>     
      ) : (
        <h3 className="w-[220px] text-center dark:text-whiteColor">------------------------------</h3>
      )}
    </div>
  );
};

export default NotificationCard;

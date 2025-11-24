"use client";
import { BookingPaymentAction } from "@/app/(Dashboard)/dashboard/reservesManagment";
import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import { IBookingData } from "@/core/types/IBookingDatas";
import { Box, Modal } from "@mui/material";
import { X } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { FC, FormEvent, useActionState, useEffect } from "react";
import { toast } from "react-toastify";

interface IProps {
  booking: IBookingData[];
}

const BookingPaymentModal: FC<IProps> = ({ booking }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [state, formAction] = useActionState(BookingPaymentAction, { message: '' });
  console.log(state)

  useEffect(() => {
    if (state.message === 'پرداخت با موفقیت انجام شد') {
      toast.success('پرداخت با موفقیت انجام شد , منتظر تایید پرداخت باشید');
      router.replace("?", { scroll: false });
    } else if (state.message && state.message !== 'پرداخت با موفقیت انجام شد') (
      toast.error(state.message)
    )
  }, [state, router])

  const paymentId = searchParams.get("payment");
  const id = paymentId ? parseInt(paymentId, 10) : null;

  const bookingPrice = booking.find(b => b.id === id);
  const housePrice = bookingPrice?.house.price || '0';

  const closeModal = (e: FormEvent) => {
    e.preventDefault();
    router.replace("?", { scroll: false });
  };
  if (!id || isNaN(id)) return null;

  return (
    <Modal open={true} onClose={closeModal}>
      <Box
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[560px] bg-white dark:bg-dark flex flex-col rounded-3xl
          text-dark p-8 gap-8 overflow-y-auto max-h-[90%]
        "
      >
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-2xl text-primary dark:text-thidary">پرداخت رزرو</h3>
          <button
            onClick={closeModal}
            className="size-12 rounded-full flex justify-center items-center bg-lightGray hover:scale-110 transition-all cursor-pointer"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
        </div>
        <form action={formAction} className="space-y-10">
          <Input name='amount' lable="مبلغ پرداخت" type="text" value={housePrice} placeholder='مبلغ قابل پرداخت' />
          <Input lable="توضیحات پرداخت ( اختیاری )" type="text" name="description" placeholder='توضیحات پرداخت...' />
          <input type="hidden" name="callbackUrl" value="" />
          <input type="hidden" name="bookingId" value={id}/>
          <div className="flex justify-between">
            <FillButton type="submit" ButtonText="پرداخت" className="p-3 px-20 text-[20px]" />
            <button onClick={closeModal} className="p-3 px-20 text-[20px] border border-gray rounded-[40px] text-gray cursor-pointer">انصراف</button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingPaymentModal;

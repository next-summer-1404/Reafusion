'use client'
import EmptyButton from '@/components/Ui/Buttons/EmptyButton'
import FillButton from '@/components/Ui/Buttons/FillButton'
import React, { useActionState, useEffect } from 'react'
import okPaymentImg from '@/assets/images/Vectors/Successful purchase-pana.svg'
import Image from 'next/image';
import Link from 'next/link';
import { SendTicketAction } from '@/app/(Main)/reserveHouse/step3'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const Step3Holder = () => {
    const id = sessionStorage.getItem('reservationId');
    const houseId = sessionStorage.getItem('houseId')
    const arrivalDate = sessionStorage.getItem('arrivalDate');
    const departureDate = sessionStorage.getItem('departureDate'); 
    const sharedEmail = sessionStorage.getItem("sharedEmail");
    const phoneNumber = sessionStorage.getItem("phoneNumber");

    const [state, formAction] = useActionState(SendTicketAction, {message: ''})
    const router = useRouter();
    console.log(state)

    useEffect(() => {
      if (state.message === 'بلیط شما با موفقیت صادر و ارسال شد') {
        toast.success('بلیط شما با موفقیت صادر و ارسال شد');
        // router.push('')
      } else {
        toast.error('خطا در صدور بلیط')
      }
    }, [state, router])

    return (
        <div className='w-fit mx-auto flex flex-col justify-center items-center gap-8 mt-10 py-4 px-4'>
            <div className='w-[500px] h-[500px]'>
                <Image className='w-full h-full' src={okPaymentImg} alt='' width={500} height={500} />
            </div>
            {/* submit button */}
            <form action={formAction} className='flex justify-between w-full'>
                <input type="hidden" name='id' value={id as string}/>
                <input type="hidden" name='houseId' value={houseId as string}/>
                <input type="hidden" name='arrivalDate' value={arrivalDate as string}/>
                <input type="hidden" name='departureDate' value={departureDate as string}/>
                <input type="hidden" name='sharedEmail' value={sharedEmail as string}/>
                <input type="hidden" name='phoneNumber' value={phoneNumber as string}/>
                <Link href={'/'}>
                  <EmptyButton className='py-4 px-5 !rounded-2xl !border-gray !text-gray' ButtonText='بازگشت به صفحه اصلی' />
                </Link>
                <FillButton className='py-4 px-5 !rounded-2xl' ButtonText='صدور بلیط های من' type='submit' />
            </form>
            {/* submit button end */}
        </div>
    )
}

export default Step3Holder
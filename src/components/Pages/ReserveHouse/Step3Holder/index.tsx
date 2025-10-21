import EmptyButton from '@/components/Ui/Buttons/EmptyButton'
import FillButton from '@/components/Ui/Buttons/FillButton'
import React from 'react'
import okPaymentImg from '@/assets/images/Vectors/Successful purchase-pana.svg'
import Image from 'next/image';

const Step3Holder = () => {
    return (
        <div className='w-fit mx-auto flex flex-col justify-center items-center gap-8 mt-10 py-4 px-4'>
            <div className='w-[500px] h-[500px]'>
                <Image className='w-full h-full' src={okPaymentImg} alt='' width={500} height={500} />
            </div>


            {/* submit button */}
            <div className='flex justify-between w-full'>
                <EmptyButton className='py-4 px-5 !rounded-2xl !border-gray !text-gray' ButtonText='بازگشت به صفحه اصلی' />
                <FillButton className='py-4 px-5 !rounded-2xl' ButtonText='بلیط های من' />
            </div>
            {/* submit button end */}
        </div>
    )
}

export default Step3Holder
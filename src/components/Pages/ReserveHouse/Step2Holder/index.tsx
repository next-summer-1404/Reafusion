import React from 'react'
import SideCost from '../SideCost'
import InformTravel from '../InformTravel'
import DiscountCodeSection from '../DiscountCodeSection'
import FillButton from '@/components/Ui/Buttons/FillButton'
import EmptyButton from '@/components/Ui/Buttons/EmptyButton';
import PassengersDetailList from '../PassengersDetailList'

const Step2Holder = () => {
    return (
        <div className='flex flex-col gap-8 mt-10 py-8 px-4 bg-lightGray rounded-3xl'>
            <PassengersDetailList />

            <SideCost />

            <InformTravel />

            <DiscountCodeSection />

            {/* final price */}
            <div className='flex gap-2 items-center'>
                <h5 className='text-dark text-2xl font-bold'>قیمت کل :</h5>
                <span className='text-primary text-[32px] font-bold'>2,500,000</span>
                <span className='text-primary text-xl'>تومان</span>
            </div>

            {/* final price end */}

            {/* submit button */}
            <div className='flex justify-between w-full'>
                <EmptyButton className='py-4 px-5 !rounded-2xl !border-gray !text-gray' ButtonText='مرحله قبل' />
                <FillButton className='py-4 px-5 !rounded-2xl' ButtonText='پرداخت آنلاین' />
            </div>
            {/* submit button end */}
        </div>
    )
}

export default Step2Holder
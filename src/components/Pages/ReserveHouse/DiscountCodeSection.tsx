'use client'
import IconButton from '@/components/Ui/IconButton'
import CustomInputText from '@/components/Ui/ReusableInputs/InputText'
import React, { useState } from 'react'

const DiscountCodeSection = () => {
    const [offerCode, setOfferCode] = useState('');
    return (
        <div className='flex flex-col gap-8 justify-between p-4 rounded-3xl border border-borderColor bg-whiteColor dark:bg-dark box-border'>
            <h3 className='text-2xl max-md:text-xl text-dark dark:text-White font-bold'>کد تخفیف</h3>

            <div className='flex flex-wrap max-sm:flex-col justify-between items-end max-sm:gap-8'>
                <CustomInputText
                    labelText='کد تخفیف'
                    value={offerCode}
                    setState={setOfferCode}
                    placeholder='کد تخفیف را وارد کنید'
                />

                <IconButton title='اعمال کد تخفیف' iconName='checked' customClass='max-md:w-full max-md:justify-center'/>
            </div>
        </div>
    )
}

export default DiscountCodeSection
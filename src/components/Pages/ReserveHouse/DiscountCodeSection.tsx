import IconButton from '@/components/Ui/IconButton'
import CustomInputText from '@/components/Ui/ReusableInputs/InputText'
import React from 'react'

const DiscountCodeSection = () => {
    return (
        <div className='flex flex-col gap-8 justify-between p-4 rounded-3xl border border-borderColor bg-whiteColor box-border'>
            <h3 className='text-2xl max-md:text-xl text-dark font-bold'>کد تخفیف</h3>

            <div className='flex flex-wrap max-sm:flex-col justify-between items-end max-sm:gap-8'>
                <CustomInputText
                    labelText='کد تخفیف'
                    placeholder='کد تخفیف را وارد کنید'
                />

                <IconButton title='اعمال کد تخفیف' iconName='checked' />
            </div>
        </div>
    )
}

export default DiscountCodeSection
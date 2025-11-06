import CustomSelectOption from '@/components/Ui/ReusableInputs/SelectOption'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const TableSort = () => {
    return (
        <div className='flex justify-between px-6'>
            {/* pagination */}
            <div className='flex gap-6 items-center'>
                <button className='flex gap-2 items-center cursor-pointer text-gray'>
                    <ChevronRight size={18} strokeWidth={1.5} />
                    بعدی
                </button>

                <button className='rounded-full text-gray size-7 cursor-pointer'>2</button>

                <button className='rounded-full text-whiteColor bg-primary size-7 cursor-pointer'>1</button>

                <button className='flex gap-2 items-center cursor-pointer text-gray'>
                    قبلی
                    <ChevronLeft size={18} strokeWidth={1.5} />
                </button>
            </div>
            {/* pagination end */}

            {/* پویا اینم داخلش باید داده بزاری برای فیلتر */}
            {/* <CustomSelectOption labelText='تعداد نمایش' /> */}
        </div>
    )
}

export default TableSort
'use client'
import IconButton from '@/components/Ui/IconButton'
import React, { useState } from 'react'
import ReservesTable from './ReservesTable'
import FiltersModal from '../FiltersModal/index';
import CustomInputDate from '../../../Ui/ReusableInputs/InputDate/index';
import CustomSelectOption from '../../../Ui/ReusableInputs/SelectOption/index';

const Reserves = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleOpenFilter = () => setIsFilterOpen(true);
    const handleCloseFilter = () => setIsFilterOpen(false);

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-xl text-dark'>لیست رزرو های شما</h2>

                <div className='flex justify-between'>

                    <IconButton
                        title='فیلتر ها'
                        iconName='funnel'
                        onClick={handleOpenFilter}
                        customClass='bg-whiteColor !border-borderColor !text-dark hover:!bg-whiteColor hover:!text-dark' />
                </div>
            </div>

            <ReservesTable />

            <FiltersModal
                open={isFilterOpen}
                onClose={handleCloseFilter}
                filtersAction={() => console.log('پویا فانکشن فیلر هارو اینجا بده')}
            >
                <div className='flex justify-between !text-dark gap-8'>
                    <CustomInputDate labelText='تاریخ رفت' />
                    <CustomInputDate labelText='تاریخ برگشت' />
                </div>

                <div className='flex justify-between !text-dark gap-8'>
                    {/* پویا به این ها داده بده از کامنت درش بیار */}
                    {/* <CustomSelectOption labelText='نوع ملک' />
                    <CustomSelectOption labelText='وضعیت رزرو' /> */}
                </div>
            </FiltersModal>
        </div>
    )
}

export default Reserves
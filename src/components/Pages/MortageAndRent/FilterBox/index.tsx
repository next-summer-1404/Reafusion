import React from 'react'
import CustomInputSearch from './../../../Ui/ReusableInputs/InputSearch/index';
import CustomSelectOption from './../../../Ui/ReusableInputs/SelectOption/index';

const FilterBox = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex jus'>
                <span className='text-2xl font-bold text-[#1E2022]'>فیلتر ها</span>
                <span className='text-xl text-[#0d3b66]'>16 نتیجه</span>
            </div>


            <div className='flex flex-wrap gap-5 px-4 py-5 rounded-3xl border border-[#DDDDDD]'>
                {/* <CustomInputSearch
                    labelText='جستجو'
                    placeholder='جستجو کنید ...'
                    customClass='!w-[35%]'
                />

                <CustomSelectOption
                    labelText='مرتب سازی بر اساس'
                    customClass='!w-[20%]'
                />

                <CustomSelectOption
                    labelText='نوع ملک'
                    customClass='!w-[20%]'
                />

                <CustomSelectOption
                    labelText='نوع معامله'
                    customClass='!w-[20%]'
                />

                <CustomSelectOption
                    labelText='محل مورد نظر'
                    customClass='!w-[20%]'
                /> */}
            </div>
        </div>
    )
}

export default FilterBox
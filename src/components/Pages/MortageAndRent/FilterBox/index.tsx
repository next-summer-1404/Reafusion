"use client";
import CustomInputSearch from '@/components/Ui/ReusableInputs/InputSearch/index';
import CustomSelectOption from '@/components/Ui/ReusableInputs/CustomSelectOption/index';
import React, { useState, useEffect } from 'react';

interface IFilterBoxProps {
    onFilterChange: (filters: any) => void;
    totalCount?: number;
}

const FilterBox = ({ onFilterChange, totalCount }: IFilterBoxProps) => {
    const [filters, setFilters] = useState({
        transactionType: '',
        search: '',
        sort: '',
        propertyType: '',
        location: '',
        minPrice: '',
        maxPrice: '',
        minRent: '',
        maxRent: '',
        minMortgage: '',
        maxMortgage: '',
        minArea: '',
        maxArea: '',
    });

    const handleChange = (name: string, value: string) => {
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className='flex flex-col gap-8'>
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-bold text-[#1E2022]'>فیلترها</span>
                <span className='text-xl text-[#0d3b66]'>{totalCount} نتیجه</span>
            </div>

            <div className='flex flex-wrap gap-5 px-4 py-5 rounded-3xl border border-[#DDDDDD]'>
                <CustomInputSearch
                    labelText='جستجو'
                    placeholder='جستجو کنید ...'
                    name="search"
                    onChange={(e) => handleChange('search', e.target.value)}
                    customClass='!w-[35%]'
                />

                <CustomSelectOption
                    labelText='مرتب‌سازی بر اساس'
                    name="sort"
                    onChange={(e) => handleChange('sort', e.target.value)}
                    customClass='!w-[20%]'
                    options={[
                        { value: 'last_updated', label: 'آخرین بروزرسانی' },
                        { value: 'price', label: 'قیمت' },
                        { value: 'area', label: 'متراژ' },
                    ]}
                />

                <CustomSelectOption
                    labelText='نوع ملک'
                    name="propertyType"
                    onChange={(e) => handleChange('propertyType', e.target.value)}
                    customClass='!w-[20%]'
                    options={[
                        { value: 'villa', label: 'ویلا' },
                        { value: 'apartment', label: 'آپارتمان' },
                        { value: 'house', label: 'خانه' },
                    ]}
                />

                <CustomSelectOption
                    labelText='نوع معامله'
                    name="transactionType"
                    onChange={(e) => handleChange('transactionType', e.target.value)}
                    customClass='!w-[20%]'
                    options={[
                        { value: 'rental', label: 'اجاره' },
                        { value: 'mortgage', label: 'رهن' },
                        { value: 'sale', label: 'فروش' },
                    ]}
                />

                <CustomSelectOption
                    labelText='محل مورد نظر'
                    name="location"
                    onChange={(e) => handleChange('location', e.target.value)}
                    customClass='!w-[20%]'
                    options={[
                        { value: 'tehran', label: 'تهران' },
                        { value: 'mashhad', label: 'مشهد' },
                        { value: 'shiraz', label: 'شیراز' },
                    ]}
                />
            </div>
        </div>
    );
};

export default FilterBox;

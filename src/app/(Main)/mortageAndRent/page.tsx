'use client'
import Breadcrumb from '@/components/Ui/Breadcrumb';
import Container from '@/components/Ui/Container/Container';
import React from 'react';
import HouseListGrid from '@/components/Pages/MortageAndRent/HouseListGrid/index';
import CustomSelectOption from '@/components/Ui/ReusableInputs/SelectOption';
import CustomInputSearch from '../../../components/Ui/ReusableInputs/InputSearch/index';

const MortageAndRentPage = () => {
  return (
    <Container className='flex flex-col gap-10'>

      <div className='flex gap-5'>
        <CustomInputSearch
          labelText='جستجو'
          placeholder='جستجو کنید ...'
        />

        <CustomSelectOption
          labelText='مرتب سازی بر اساس'
        />
      </div>

      {/* breadcrumb */}
      <Breadcrumb
        homeElement={'خانه'}
        activeClasses='!text-[#1E2022] !font-bold'
        containerClasses='flex gap-4'
        listClasses='hover:text-[#1E2022] text-[#777777]'
        capitalizeLinks
      />
      {/* breadcrumb end */}

      {/* house list grid */}
      <HouseListGrid />
      {/* house list grid end */}

    </Container>
  );
};

export default MortageAndRentPage;
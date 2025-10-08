'use client'
import Breadcrumb from '@/components/Ui/Breadcrumb';
import Container from '@/components/Ui/Container/Container';
import React from 'react';
import HouseListGrid from '@/components/Pages/MortageAndRent/HouseListGrid/index';
import CustomPagination from '@/components/Ui/CustomPagination';

const MortageAndRentPage = () => {
  return (
    <Container className='flex flex-col gap-10'>
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
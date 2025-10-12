"use client";

import Breadcrumb from '@/components/Ui/Breadcrumb';
import Container from '@/components/Ui/Container/Container';
import React, { useState, useEffect } from 'react';
import HouseListGrid from '@/components/Pages/MortageAndRent/HouseListGrid';
import FilterBox from '@/components/Pages/MortageAndRent/FilterBox';
import { getHousesByFilter } from '@/core/Apis/GetHousesByFilter';

const MortageAndRentPage = () => {
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [houses, setHouses] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setLoading(true);
        const res = await getHousesByFilter(filters);
        setHouses(res.houses);
        setTotalCount(res.totalCount ?? 0);
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, [filters]);

  return (
    <Container className='flex flex-col gap-10'>
      <Breadcrumb
        homeElement={'خانه'}
        activeClasses='!text-[#1E2022] !font-bold'
        containerClasses='flex gap-4'
        listClasses='hover:text-[#1E2022] text-[#777777]'
        capitalizeLinks
      />

      {/* تعداد و محدوده قیمت رو به FilterBox بدیم */}
      <FilterBox
        onFilterChange={setFilters}
        totalCount={totalCount}
      />

      {loading ? (
        <div className='text-center text-gray-500'>در حال بارگذاری...</div>
      ) : (
        <HouseListGrid houses={houses} />
      )}
    </Container>
  );
};

export default MortageAndRentPage;

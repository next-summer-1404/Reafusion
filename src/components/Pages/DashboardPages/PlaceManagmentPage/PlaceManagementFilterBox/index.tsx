// PlaceManagementFilterBox.tsx
'use client';

import IconButton from "@/components/Ui/IconButton";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from 'next/navigation';
import HousingFiltersModal from "./HouseFilteringModal";
import { useEffect, useState } from "react";

const PlaceManagementFilterBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const isModalOpen = searchParams.get('modal') === 'filters';

  // search
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
     params.set('search', search);
    router.push(`?${params.toString()}`, { scroll: false });
  }, [search, router, searchParams]);

  // open filter modal
  const openFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.set('modal', 'filters');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // open add house steps
  const openAddProperty = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('modal');
    params.set('step', '1'); 
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="flex gap-4">
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="bg-whiteColor border border-borderColor rounded-[16px] w-[440px] p-3 indent-2 text-primary placeholder:text-gray outline-none"
            placeholder="جستجو..."
            dir="rtl"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray w-5 h-5 pointer-events-none" />
        </div>

        <IconButton
          title="فیلتر ها"
          iconName="funnel"
          onClick={openFilters}
          customClass="bg-whiteColor !border-borderColor !flex !items-center hover:!border-whiteColor !text-dark hover:!bg-primary hover:!text-whiteColor"
        />

        <IconButton
          title="افزودن ملک"
          iconName="plus"
          onClick={openAddProperty}
          customClass="bg-primary !flex !items-center !text-whiteColor"
        />
      </div>

      <HousingFiltersModal open={isModalOpen} />
    </>
  );
};

export default PlaceManagementFilterBox;
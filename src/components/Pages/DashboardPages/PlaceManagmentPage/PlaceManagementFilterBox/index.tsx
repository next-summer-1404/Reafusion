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
      <div className="flex xl:w-[70%] xl:justify-end max-sm:flex-wrap gap-4 max-lg:w-full">
        <div className="flex items-center max-sm:w-full border bg-whiteColor dark:bg-background dark:border-thidary border-borderColor
             rounded-[16px] p-3 xl:w-[60%] max-md:w-[50%] max-lg:w-[60%]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="w-full indent-2 text-primary dark:text-thidary
              placeholder:text-gray outline-none"
            placeholder="جستجو..."
            dir="rtl"
          />
          <Search className="text-gray dark:text-lightGray" size={20} />
        </div>

        <IconButton
          title="فیلتر ها"
          iconName="funnel"
          onClick={openFilters}
          customClass="bg-whiteColor dark:!bg-background dark:!border-thidary !border-borderColor dark:!text-lightGray !flex !items-center hover:!border-whiteColor !text-dark hover:!bg-primary hover:!text-whiteColor"
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
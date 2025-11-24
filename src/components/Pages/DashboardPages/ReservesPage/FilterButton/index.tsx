// components/FilterButton.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import IconButton from '@/components/Ui/IconButton';

const FilterButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get('modal') === 'filters';

  const toggleModal = () => {
    const params = new URLSearchParams(searchParams);
    if (isOpen) {
      params.delete('modal');
    } else {
      params.set('modal', 'filters');
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <IconButton
      title="فیلتر ها"
      iconName="funnel"
      onClick={toggleModal}
      customClass="bg-whiteColor dark:bg-background dark:!text-whiteColor !border-borderColor hover!border-whiteColor !text-dark hover:!bg-primary hover:!text-whiteColor"
    />
  );
}

export default FilterButton;
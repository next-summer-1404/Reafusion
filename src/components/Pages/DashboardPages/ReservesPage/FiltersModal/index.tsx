'use client';
import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import CustomSelectOption from '@/components/Ui/ReusableInputs/SelectOption';
interface IProps {
  open: boolean;
}

const FiltersModal: FC<IProps> = ({ open }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState(searchParams.get('status') || '');
  console.log(status)

  const closeModal = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('modal');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('status', status);
    router.push(`?${params.toString()}`);
    closeModal();
  };

  if (!open) return null;

  return (
    <Modal open={open} onClose={closeModal}>
      <Box
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          lg:w-[40%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] bg-white dark:bg-dark dark:text-whiteColor flex flex-col rounded-3xl
          text-dark p-8 gap-8
        "
      >
        {/* Header */}
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-2xl'>فیلتر ها</h3>
          <div
            onClick={closeModal}
            className='size-12 rounded-full flex justify-center items-center bg-lightGray cursor-pointer hover:scale-110 transition-all'
          >
            <X size={32} strokeWidth={1.5} className='dark:text-dark'/>
          </div>
        </div>
        <div className="flex justify-between !text-dark gap-8">
          <CustomSelectOption 
            customClass='w-full' 
            labelText="وضعیت رزرو" 
            value={status}
            setState={setStatus}
            options={
              [
                { value: 'confirmed', label: 'تایید شده' },
                { value: 'pending', label: 'در انتظار' },
                { value: 'canceled', label: 'لغو شده' },
              ]
            } 
          />
        </div>
        {/* Actions */}
        <div className='flex justify-between gap-6'>
          <button
            onClick={closeModal}
            className='rounded-2xl border border-gray text-gray p-3 cursor-pointer w-1/2'
          >
            انصراف
          </button>
          <button
            onClick={applyFilters}
            className='bg-primary rounded-2xl text-white p-3 cursor-pointer w-1/2'
          >
            اعمال فیلتر
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default FiltersModal;
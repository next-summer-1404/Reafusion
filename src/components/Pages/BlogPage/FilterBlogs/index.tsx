'use client'
import CustomInputSearch from '@/components/Ui/ReusableInputs/InputSearch'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const FilterBlogs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('title') || '');

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('title', search);
    router.push(`?${params.toString()}`)
  }, [searchParams, search, router])

  return (
    <div className='border border-borderColor dark:border-thidary dark:bg-dark rounded-[40px] px-6 py-6 w-full flex '>
        <CustomInputSearch
          labelText="جستجو"
          placeholder="نام مقاله مورد نظر ..."
          customClass="w-[378px]"
          value={search}
          setState={setSearch}
        />
    </div>
  )
}

export default FilterBlogs
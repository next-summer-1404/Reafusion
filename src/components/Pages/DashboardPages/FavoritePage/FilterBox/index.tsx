'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const FilterBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [order, setOrder] = useState(searchParams.get('order') || '');
  
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('order', order);
    router.push(`?${params.toString()}`)
  }, [searchParams, router, order])

  return (
    <div>
        <select value={order} onChange={(event) => setOrder(event.target.value)} className='bg-white dark:bg-background dark:text-whiteColor p-3 border border-borderColor rounded-[16px] cursor-pointer'>
            <option value="">دسته بندی ها</option>
            <option value="ASC">سعودی</option>
            <option value="DESC">نزولی</option>
        </select>
    </div>
  )
}

export default FilterBox
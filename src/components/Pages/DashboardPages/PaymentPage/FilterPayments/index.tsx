'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const FilterPayment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [order, setOrder] = useState(searchParams.get('order') || '');
  const [status, setStatus] = useState(searchParams.get('status') || '')

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('order', order);
    params.set('status', status as string)
    router.push(`?${params.toString()}`)
  }, [searchParams, order, router, status])

  return (
    <div className='flex gap-4'>
        <select value={status} onChange={(event) => setStatus(event.target.value)} className='bg-white dark:bg-background dark:text-whiteColor p-3 border border-borderColor rounded-[16px] cursor-pointer'>
           <option value="">وضعیت پرداخت</option>
           <option value="completed">تایید شده</option>
           <option value="pending">در انتظار</option>
           <option value="canceled">تایید نشده</option>
        </select>
        <select value={order} onChange={(event) => setOrder(event.target.value)} className='bg-white dark:bg-background dark:text-whiteColor p-3 border border-borderColor rounded-[16px] cursor-pointer'>
           <option value="">دسته بندی</option>
           <option value="ASC">سعودی</option>
           <option value="DESC">نزولی </option>
        </select>
    </div>
  )
}

export default FilterPayment;
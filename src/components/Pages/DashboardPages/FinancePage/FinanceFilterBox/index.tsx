'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const FinanceFilterBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('paymentStatus', paymentStatus) 
    router.push(`?${params.toString()}`)
  }, [searchParams, router, paymentStatus])

  return (
    <div className='flex gap-3'>
       <select value={paymentStatus} onChange={(event) => setPaymentStatus(event.target.value)} className='bg-white p-3 border border-borderColor rounded-[16px] cursor-pointer'>
           <option value="">وضعیت پرداخت</option>
           <option value="completed">تایید شده</option>
           <option value="pending">در انتظار</option>
       </select>
    </div>
  )
}

export default FinanceFilterBox
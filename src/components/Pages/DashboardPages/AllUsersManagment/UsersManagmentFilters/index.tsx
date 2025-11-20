'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const UsersManagmentFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [role, setRole] = useState('buyer')
  const [order, setOrder] = useState('DESC')
  
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('role', role)
    params.set("order", order)
    router.push(`?${params.toString()}`)
  }, [searchParams, role, order, router])

  return (
    <div className='flex gap-4'>
      <select value={order} onChange={(event) => setOrder(event.target.value)} className='bg-white p-3 border border-borderColor rounded-[16px] cursor-pointer'>
          <option value="ASC">سعودی</option>
          <option value="DESC">نزولی</option>
      </select>
      <select value={role} onChange={(event) => setRole(event.target.value)} className='bg-white p-3 border border-borderColor rounded-[16px] cursor-pointer'>
          <option value="buyer">خریدار</option>
          <option value="seller">فروشنده</option>
          <option value="admin">ادمین</option>
      </select>
    </div>
  )
}

export default UsersManagmentFilters
'use client'
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CommentFilterBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [order, setOrder] = useState('DESC');
  
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('order', order);
    router.push(`?${params.toString()}`);
  }, [order, router, searchParams])

  return (
    <select value={order} onChange={(event) => setOrder(event.target.value)} className="bg-white dark:bg-background dark:text-whiteColor p-3 border border-borderColor rounded-[16px] cursor-pointer">
      <option value="ASC">سعودی</option>
      <option value="DESC">نزولی</option>
    </select>
  );
};

export default CommentFilterBox;

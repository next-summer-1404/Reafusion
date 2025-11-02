'use client';
import CustomBadge from '@/components/Ui/CustomBadge'
import CustomSelectOption from '@/components/Ui/ReusableInputs/SelectOption'
import { CreditCard, EllipsisVertical, Info, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const DashboardTable = () => {
    // store each rows id
    const [openActionsMenuId, setOpenActionsMenuId] = useState<number | null>(null);
    // store each rows id end

    // table header
    const columns = [
        { header: 'نام اقامتگاه', className: 'w-[20%]' },
        { header: 'تاریخ رزرو', className: 'w-[15%]' },
        { header: 'قیمت', className: 'w-[15%]' },
        { header: 'اطلاعات مسافر', className: 'w-[15%]' },
        { header: 'وضعیت رزرو', className: 'w-[15%]' },
        { header: 'وضعیت پرداخت', className: 'w-[15%]' },
        { header: 'عملیات', className: 'w-16 text-center w-[5%]' },
    ]
    // table header end

    // data
    const rows = [
        { id: 1, name: 'هتل سراوان رانین رشت', date: '12 مرداد 1401 - 12:33', price: 2000000, guests: '2 نفر مسافر', status: 'pending', payment: 'fail' },
        { id: 2, name: 'هتل سراوان رانین رشت', date: '12 مرداد 1401 - 12:33', price: 2000000, guests: '2 نفر مسافر', status: 'pending', payment: 'fail' },
        // ... ردیف‌های دیگه
    ]
    // data end

    // toggle action menu
    const toggleActionsMenu = (id: number) => {
        setOpenActionsMenuId(prev => prev === id ? null : id);
    }
    // toggle action menu end

    return (
        <div className='bg-whiteColor rounded-3xl border border-lightGray py-6'>
            {/* Header */}
            <ul className='flex border-b border-borderColor px-6 text-dark font-bold'>
                {columns.map((col, index) => (
                    <li key={index} className={`${col.className} py-3`}>
                        {col.header}
                    </li>
                ))}
            </ul>

            {/* Rows */}
            <ul>
                {rows.map((row) => (
                    <li key={row.id} className='flex border-b border-borderColor py-2 px-6 even:bg-lightPrimary last:border-0'>
                        <div className={`${columns[0].className} truncate ps-2 box-border`}>{row.name}</div>
                        <div className={columns[1].className}>{row.date}</div>
                        <div className={columns[2].className}>
                            <span>{row.price.toLocaleString()}</span>
                            <span className="text-sm me-2">تومان</span>
                        </div>
                        <div className={columns[3].className}>{row.guests}</div>
                        <div className={columns[4].className}>
                            <CustomBadge status='pending' title='در انتظار' />
                        </div>
                        <div className={columns[5].className}>
                            <CustomBadge status='fail' title='پرداخت نشده' />
                        </div>
                        <div className={`${columns[6].className} relative`}>
                            <EllipsisVertical
                                className="mx-auto cursor-pointer"
                                onClick={() => toggleActionsMenu(row.id)}
                            />
                            {/* Action Menu - فقط برای این ردیف */}
                            {openActionsMenuId === row.id && (
                                <ul className='flex flex-col gap-1 p-2 absolute top-9 left-2.5 w-fit bg-whiteColor rounded-2xl border border-borderColor shadow z-10'>
                                    <li className='flex items-center py-1 px-2 hover:bg-lightPrimary hover:text-primary rounded-lg cursor-pointer transition-all text-sm gap-2 truncate'>
                                        <CreditCard size={20} strokeWidth={1.5} />
                                        <p>پرداخت کردن</p>
                                    </li>
                                    <li className='flex items-center py-1 px-2 hover:bg-lightPrimary hover:text-primary rounded-lg cursor-pointer transition-all text-sm gap-2 truncate'>
                                        <Info size={20} strokeWidth={1.5} />
                                        <p>جزئیات</p>
                                    </li>
                                    <li className='flex items-center py-1 px-2 hover:bg-lightPrimary hover:text-primary rounded-lg cursor-pointer transition-all text-sm gap-2 truncate'>
                                        <Trash2 size={20} strokeWidth={1.5} />
                                        <p>حذف</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DashboardTable
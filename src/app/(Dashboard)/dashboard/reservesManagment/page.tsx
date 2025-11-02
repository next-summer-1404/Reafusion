import DashboardTable from '@/components/Pages/DashboardPages/DashboardTable'
import React from 'react'

const ReservesManagment = () => {

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex'>
                <h2 className='font-bold text-xl text-dark'>لیست رزرو های شما</h2>
            </div>

            <DashboardTable />
        </div>
    )
}

export default ReservesManagment
import React, { FC } from 'react'
import Reserves from '@/components/Pages/DashboardPages/ReservesPage/Reserves';

interface ReservesManagmentProps {
  searchParams: { modal?: string };
}

const ReservesManagment: FC<ReservesManagmentProps> = ({ searchParams }) => {
    return (
        <Reserves searchParams={searchParams}/>
    )
}

export default ReservesManagment
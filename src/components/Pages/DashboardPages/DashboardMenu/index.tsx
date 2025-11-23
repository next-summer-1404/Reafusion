'use client'
import Image from 'next/image';
import React, { FC } from 'react';
import logo from '@/assets/images/ReafusionLogo/MainReafusionLogo.jpg';
import { Bell, Building, Building2, ChartBarDecreasing, ChartColumnStacked, CircleDollarSign, CreditCard, HandCoins, HeartPlus, LayoutDashboard, ListChecks, LogOut, MessageCircle, MessageCircleMore, ScrollText, UserRoundPen, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProps {
    role: string;
    className?: string;
}

const DashboardMenu: FC<IProps> = ({ role, className }) => {
    // get now url
    const pathname = usePathname();

    const hasManagementAccess = role === 'admin' || role === 'seller';
    const isBuyerUser = role === 'admin' || role === 'buyer';

    // link list with icon
    const menuItems = [
        { href: '/dashboard', label: 'داشبورد', icon: <LayoutDashboard size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/profile', label: 'مشخصات کاربری', icon: <UserRoundPen size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/notifications', label: 'اعلان‌ها', icon: <Bell size={24} strokeWidth={1.5} /> },
        ...(hasManagementAccess
        ? [
            { href: '/dashboard/placesManagement', label: 'مدیریت املاک', icon: <Building size={24} strokeWidth={1.5} /> },
            { href: '/dashboard/financialManagement', label: 'مدیریت مالی', icon: <HandCoins size={24} strokeWidth={1.5} /> },
            ]
        : []
        ),
        { href: '/dashboard/reservesManagment', label: 'مدیریت رزروها', icon: <ListChecks size={24} strokeWidth={1.5} /> },
        ...(isBuyerUser
        ? [
            { href: '/dashboard/paymentManagement', label: 'مدیریت پرداخت ها', icon: <CircleDollarSign size={24} strokeWidth={1.5} /> },
            { href: '/dashboard/favoriteManagement', label: 'علاقه مندی ها', icon: <HeartPlus size={24} strokeWidth={1.5} /> },
          ]
        : []),
        { href: '/dashboard/logout', label: 'خروج از حساب', icon: <LogOut size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/AllUsersManagement', label: 'مدیریت کاربران', icon: <Users size={24} strokeWidth={1.5} /> },
        { href: '', label: 'مدیریت کل رزروها', icon: <ChartBarDecreasing size={24} strokeWidth={1.5} /> },
        { href: '', label: 'مدیریت کل خانه ها', icon: <Building2 size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/CommentsManagement', label: 'مدیریت نظرات', icon: <MessageCircleMore size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/AllPaymentsManagments', label: 'مدیریت کل پرداخت ها', icon: <CreditCard size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/AllCategoriesManagement', label: 'مدیریت دسته بندی ها', icon: <ChartColumnStacked size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/AllDocumentsManagement', label: 'مدیریت سند ها', icon: <ScrollText size={24} strokeWidth={1.5} /> },
    ];
    // link list with icon end

    return (
        <div className={`flex flex-col gap-8 p-8 bg-lightGray border border-borderColor rounded-[40px] w-[20%] ${className}`}>
            {/* logo */}
            <div className="flex gap-4 items-center max-lg:flex-col">
                <Image className="rounded-full size-11" alt="" src={logo} width={32} height={32} />
                <span className="text-[32px] font-bold">ریفیوژن</span>
            </div>
            {/* logo end */}

            {/* menu */}
            <div className="flex flex-col gap-8 overflow-y-auto">
                {/* menu group */}
                <div className="flex flex-col gap-4">
                    <span className="text-sm text-primary">منو</span>
                    {/* navigation */}
                    <ul className="flex flex-col gap-6">
                        {menuItems.slice(0, 3).map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={`flex gap-4 items-center ${pathname === item.href
                                        ? 'font-bold text-primary'
                                        : 'text-dark'
                                        }`}
                                >
                                    <span className={pathname === item.href ? 'text-primary' : 'text-dark'}>{item.icon}</span>
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* navigation end */}
                </div>
                {/* menu group end */}

                {/* group */}
                <div className="flex flex-col gap-4">
                    <span className="text-sm text-primary">مدیریت</span>
                    {/* navigation */}
                    <ul className="flex flex-col gap-6">
                        {menuItems.slice(3, 9).map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={`flex gap-4 items-center ${pathname === item.href
                                        ? 'font-bold text-primary'
                                        : 'text-dark'
                                        }`}
                                >
                                    <span className={ pathname === item.href ? 'text-primary' : item.label === 'خروج از حساب' ? 'text-red' : 'text-dark'}>{item.icon}</span>
                                    <span className={ pathname === item.href ? 'text-primary' : item.label === 'خروج از حساب' ? 'text-red' : 'text-dark'}>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* navigation end */}
                </div>
                {/* menu group end */}
                  {/* group */}
                <div className="flex flex-col gap-4">
                    <span className="text-sm text-primary">مدیریت سایت ( ادمین ) </span>
                    {/* navigation */}
                    <ul className="flex flex-col gap-6">
                        {menuItems.slice(9).map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={`flex gap-4 items-center ${pathname === item.href
                                        ? 'font-bold text-primary'
                                        : 'text-dark'
                                        }`}
                                >
                                    <span className={pathname === item.href ? 'text-primary' : 'text-dark'}>{item.icon}</span>
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* navigation end */}
                </div>
                {/* menu group end */}
            </div>
            {/* menu end */}
        </div>
    );
};

export default DashboardMenu;
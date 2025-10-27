'use client'
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/ReafusionLogo/MainReafusionLogo.jpg';
import { Bell, Building, HandCoins, LayoutDashboard, ListChecks, LogOut, MessagesSquare, UserRoundPen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardMenu = () => {
    // get now url
    const pathname = usePathname();

    // link list with icon
    const menuItems = [
        { href: '/dashboard', label: 'داشبورد', icon: <LayoutDashboard size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/profile', label: 'مشخصات کاربری', icon: <UserRoundPen size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/notifications', label: 'اعلان‌ها', icon: <Bell size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/placesManagement', label: 'مدیریت املاک', icon: <Building size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/reservesManagment', label: 'مدیریت رزروها', icon: <ListChecks size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/financialManagement', label: 'مدیریت مالی', icon: <HandCoins size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/commentsManagement', label: 'مدیریت نظرات', icon: <MessagesSquare size={24} strokeWidth={1.5} /> },
        { href: '/dashboard/logout', label: 'خروج از حساب', icon: <LogOut size={24} strokeWidth={1.5} /> },
    ];
    // link list with icon end

    return (
        <div className="flex flex-col gap-8 p-8 bg-lightGray border border-borderColor rounded-[40px] w-[20%]">
            {/* logo */}
            <div className="flex gap-4 items-center">
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
                        {menuItems.slice(0, 3).map((item) => (
                            <li key={item.href}>
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
                        {menuItems.slice(3).map((item) => (
                            <li key={item.href}>
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
'use client';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/ReafusionLogo/MainReafusionLogo.jpg';
import {
    Bell,
    Building,
    HandCoins,
    LayoutDashboard,
    ListChecks,
    LogOut,
    MessagesSquare,
    UserRoundPen,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();

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

    return (
        <>
            {/* black back drop click to close*/}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-[#000000b0] z-40 lg:hidden"
                    onClick={onClose}
                />
            )}
            {/* black back drop click to close end */}

            {/* side menu */}
            <div
                className={`
          flex flex-col gap-8 p-8 max-xl:p-4 bg-lightGray border border-borderColor lg:rounded-[40px] w-[20%]
          max-lg:!rounded-bl-[40px] max-lg:!rounded-tl-[40px] max-lg:fixed max-lg:w-[25%] max-md:w-[30%] max-sm:w-[70%]
          max-lg:h-screen max-lg:top-0 max-lg:z-50 max-lg:right-0
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'max-lg:translate-x-0' : 'max-lg:translate-x-full'}
          lg:translate-x-0 lg:static lg:w-[20%]
        `}
            >
                {/* close button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 left-6 text-dark lg:hidden text-xl cursor-pointer"
                >
                    ✕
                </button>
                {/* close button end */}

                {/* logo */}
                <div className="flex max-xl:flex-col gap-4 items-center max-lg:flex-col mt-12 lg:mt-0">
                    <Image
                        className="rounded-full size-11 max-xl:size-20"
                        alt="لوگوی ریفیوژن"
                        src={logo}
                        width={32}
                        height={32}
                    />
                    <span className="text-[32px] font-bold">ریفیوژن</span>
                </div>
                {/* logo end */}

                {/* menu */}
                <div className="flex flex-col gap-8 overflow-y-auto">
                    {/* list */}
                    <div className="flex flex-col gap-4">
                        <span className="text-sm text-primary">منو</span>
                        <ul className="flex flex-col gap-6">
                            {menuItems.slice(0, 3).map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={onClose}
                                        className={`flex gap-4 items-center transition-colors ${pathname === item.href ? 'font-bold text-primary' : 'text-dark hover:text-primary'
                                            }`}
                                    >
                                        <span className={pathname === item.href ? 'text-primary' : 'text-dark'}>
                                            {item.icon}
                                        </span>
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* list end */}

                    {/* manage list */}
                    <div className="flex flex-col gap-4">
                        <span className="text-sm text-primary">مدیریت</span>
                        <ul className="flex flex-col gap-6">
                            {menuItems.slice(3).map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={onClose}
                                        className={`flex gap-4 items-center transition-colors ${pathname === item.href ? 'font-bold text-primary' : 'text-dark hover:text-primary'
                                            }`}
                                    >
                                        <span className={pathname === item.href ? 'text-primary' : 'text-dark'}>
                                            {item.icon}
                                        </span>
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* manage list end */}
                </div>
                {/* menu end */}
            </div>
            {/* side menu end */}
        </>
    );
};

export default DashboardMenu;
import { Building2, CircleCheck, ClockFading, Funnel, House, Menu, Plus, Sun, UserRoundCheck, UserRoundPen, UserRoundPlus } from 'lucide-react';
import React, { FC } from 'react'

interface IProps {
    title?: string;
    customClass?: string;
    iconName: 'building' | 'clock' | 'addUser' | 'checkedUser' | 'checked' | 'editUser' | 'house' | 'sun' | 'funnel' | 'plus' | 'menu';
    type?: 'submit';
    onClick?: () => void;
}

const icons = [
    { name: 'building', icon: <Building2 size={24} strokeWidth={1.5} /> },
    { name: 'clock', icon: <ClockFading size={24} strokeWidth={1.5} /> },
    { name: 'addUser', icon: <UserRoundPlus size={24} strokeWidth={1.5} /> },
    { name: 'checkedUser', icon: <UserRoundCheck size={24} strokeWidth={1.5} /> },
    { name: 'checked', icon: <CircleCheck size={24} strokeWidth={1.5} /> },
    { name: 'editUser', icon: <UserRoundPen size={24} strokeWidth={1.5} /> },
    { name: 'house', icon: <House size={24} strokeWidth={1.5} /> },
    { name: 'sun', icon: <Sun size={24} strokeWidth={1.5} /> },
    { name: 'funnel', icon: <Funnel size={20} strokeWidth={1.5} /> },
    { name: 'plus', icon: <Plus size={24} strokeWidth={1.5} /> },
    { name: 'menu', icon: <Menu size={24} strokeWidth={1.5} /> },
];

const IconButton: FC<IProps> = ({ title, iconName, customClass, type, onClick }) => {

    const selectedIcon = icons.find(i => i.name === iconName)?.icon;

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${customClass} flex gap-2 px-3 py-2 cursor-pointer border border-primary text-primary rounded-2xl w-fit hover:bg-primary hover:text-whiteColor transition-all`}>
            {selectedIcon}
            {title}

        </button>
    )
}

export default IconButton
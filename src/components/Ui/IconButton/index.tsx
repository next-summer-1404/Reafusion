import { Building2, CircleCheck, ClockFading, UserPlus, UserRoundCheck } from 'lucide-react';
import React, { FC } from 'react'

interface IProps {
    title: string;
    iconName: 'building' | 'clock' | 'addUser' | 'checkedUser' | 'checked';
}

const icons = [
    { name: 'building', icon: <Building2 size={24} strokeWidth={1.5} /> },
    { name: 'clock', icon: <ClockFading size={24} strokeWidth={1.5} /> },
    { name: 'addUser', icon: <UserPlus size={24} strokeWidth={1.5} /> },
    { name: 'checkedUser', icon: <UserRoundCheck size={24} strokeWidth={1.5} /> },
    { name: 'checked', icon: <CircleCheck size={24} strokeWidth={1.5} /> },
];

const IconButton: FC<IProps> = ({ title, iconName }) => {

    const selectedIcon = icons.find(i => i.name === iconName)?.icon;

    return (
        <div className='flex gap-2 px-3 py-2 cursor-pointer border border-primary text-primary rounded-2xl w-fit hover:bg-primary hover:text-whiteColor transition-all'>
            {selectedIcon}
            {title}
        </div>
    )
}

export default IconButton
import { ArrowRight, House } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {
    href: string;
    title: string;
    iconName: 'home' | 'back';
}

const BackBtn: FC<IProps> = ({ href, title, iconName }) => {
    // نگاشت نام آیکون به کامپوننت آیکون
    const iconComponents = {
        home: <House size={20} />,
        back: <ArrowRight size={20} />,
    };

    return (
        <div className="w-full">
            <Link href={href} className="flex gap-2 text-[#0D3B66] items-center">
                {iconComponents[iconName]}
                <span>{title}</span>
            </Link>
        </div>
    );
};

export default BackBtn;
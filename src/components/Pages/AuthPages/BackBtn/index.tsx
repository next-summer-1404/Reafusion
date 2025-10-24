import { ArrowRight, House } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {
    href: string;
    title: string;
    iconName?: 'home' | 'back';
}

const BackBtn: FC<IProps> = ({ href, title, iconName }) => {
    const iconComponents = {
        home: <House size={20} />,
        back: <ArrowRight size={20} />,
    };

    return (
        <div className="w-full">
            <Link href={href} className="flex gap-2 text-primary dark:text-white items-center w-fit">
                {iconName && iconComponents[iconName]}
                <span>{title}</span>
            </Link>
        </div>
    );
};

export default BackBtn;
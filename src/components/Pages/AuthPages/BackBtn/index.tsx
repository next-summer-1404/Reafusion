import { ArrowRight, House } from 'lucide-react';
import Link from 'next/link'
import React, { FC } from 'react'

interface IProps {
    href: string;
    title: string;
    iconName: string;
}

const BackBtn: FC<IProps> = ({ href, title, iconName }) => {
    return (
        <Link href={href} className='flex gap-2 text-[#0D3B66]' >
            {iconName === "home" ? (<House />) : (<ArrowRight />)}
            <span>{title}</span>
        </Link>
    )
}

export default BackBtn
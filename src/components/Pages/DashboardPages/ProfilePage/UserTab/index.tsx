'use client'
import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  className?: string;
  TabName: string;
  href: string
  active: boolean
}

const UserTab: FC<IProps> = ({ TabName, href, active }) => {
  return (
   <Link
      href={href}
      className={`p-3 border rounded-[14px] transition-colors ${
        active
          ? 'border-primary text-primary font-bold'
          : 'border-transparent text-gray hover:text-dark'
      }`}
    >
      {TabName}
    </Link>
  );
};

export default UserTab;

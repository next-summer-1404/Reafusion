"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import MainReafusionLogo from "../../../assets/images/ReafusionLogo/MainReafusionLogo.jpg";
import Container from "../Container/Container";
import FillButton from "../Buttons/FillButton";
import EmptyButton from "../Buttons/EmptyButton";
import UnKnownPersonImage from '../../../assets/images/UnKnownUserImg/UnKnownUser.jpg' 

const links = [
  { name: "خانه", href: "/" },
  { name: "رزرو سریع", href: "/FastReservePage" },
  { name: "رهن و اجاره", href: "/mortageAndRent" },
  { name: "مقالات", href: "/bbb" },
  { name: "درباره ما", href: "/ccc" },
];

interface IProps {
  userToken?: string | undefined;
}

const Header: FC<IProps> = ({ userToken }) => {
  const pathname = usePathname();

  return (
    <Container className="px-12 py-6 flex justify-between max-lg:block max-lg:space-y-7 items-center">
      <div className="text-[24px] text-center text-[#0D3B66] font-bold flex gap-2.5 max-lg:justify-center items-center">
        <Image
          src={MainReafusionLogo}
          alt="MainReafusionLogo"
          width={40}
          height={35}
        />
        ریفیوژن
      </div>
      <div className="h-[31px] flex justify-between gap-11 max-lg:gap-2 max-lg:px-20 max-md:px-0">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={
              pathname === link.href
                ? "text-[#0D3B66] font-bold border-b-2 border-[#0D3B66] text-[20px]"
                : "text-[#1E2022] text-[20px]"
            }
          >
            {link.name}
          </Link>
        ))}
      </div>
      {userToken ? (
        <div className="min-w-[110px] flex items-center gap-3 cursor-pointer">
            <h3>کاربر بدون نام</h3>
            <Image  
              src={UnKnownPersonImage}
              alt="userImage"
              width={40}
              height={35}
              className="rounded-full overflow-hidden"
            />
        </div>
      ) : (
        <div className="flex gap-5 max-lg: justify-center items-center">
          <Link href={"/login"}>
            <FillButton
              ButtonText={"ورود"}
              className={'px-7 max-lg:w-[200px] h-[43px] text-[20px] font-normal'}
            />
          </Link>
          <Link href={"/register/step1"}>
            <EmptyButton
              ButtonText={"ثبت نام"}
              className={'px-[33px] max-lg:w-[200px] h-[43px] font-normal'}
            />
          </Link>
        </div>
      )}
      
    </Container>
  );
};

export default Header;

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MainReafusionLogo from "../../../assets/images/ReafusionLogo/MainReafusionLogo.jpg";

import Container from "../Container/Container";
import FillButton from "../Buttons/FillButton";
import EmptyButton from "../Buttons/EmptyButton";

const links = [
  { name: "خانه", href: "/" },
  { name: "رزرو سریع", href: "/sss" },
  { name: "رهن و اجاره", href: "/aaa" },
  { name: "مقالات", href: "/bbb" },
  { name: "درباره ما", href: "/ccc" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <Container className="px-12 py-6 flex justify-between items-center">
      <div className="text-[24px] text-center text-[#0D3B66] font-bold flex gap-2.5">
        <Image
          src={MainReafusionLogo}
          alt="MainReafusionLogo"
          width={40}
          height={35}
        />
        ریفیوژن
      </div>
      <div className="h-[31px] flex gap-11">
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
      <div className="flex gap-5">
        <Link href={"/login"}>
          <FillButton
            ButtonText={"ورود"}
            className={"px-6 h-[43px] text-[20px]"}
          />
        </Link>
        <Link href={"/register/step1"}>
          <EmptyButton
            ButtonText={"ثبت نام"}
            className={"px-[33px] h-[43px]"}
          />
        </Link>
      </div>
    </Container>
  );
};

export default Header;

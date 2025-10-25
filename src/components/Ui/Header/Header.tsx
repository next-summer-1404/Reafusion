"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import MainReafusionLogo from "../../../assets/images/ReafusionLogo/MainReafusionLogo.jpg";
import Container from "../Container/Container";
import FillButton from "../Buttons/FillButton";
import EmptyButton from "../Buttons/EmptyButton";
import UnKnownPersonImage from '../../../assets/images/UnKnownUserImg/UnKnownUser.jpg' 
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const links = [
  { name: "خانه", href: "/" },
  { name: "رزرو سریع", href: "/FastReservePage" },
  { name: "رهن و اجاره", href: "/mortageAndRent" },
  { name: "مقالات", href: "/BlogPage" },
  { name: "درباره ما", href: "/ccc" },
];

interface IProps {
  userToken?: string | undefined;
}

const Header: FC<IProps> = ({ userToken }) => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<string>("light");

  // هنگام لود، تم ذخیره‌شده را از localStorage بخوانید
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // فانکشن برای تغییر تم
  const toggleTheme = (selectedTheme: string) => {
    if (selectedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Container className="px-12 py-6 flex justify-between max-lg:block max-lg:space-y-7 items-center">
      <div className="text-[24px] text-center dark:text-White text-primary font-bold flex gap-2.5 max-lg:justify-center items-center">
        <Image
          src={MainReafusionLogo}
          alt="MainReafusionLogo"
          width={40}
          height={35}
          className=" rounded-full overflow-hidden"
        />
        ریفیوژن
        <div className="w-[90px] h-[40px] px-2.5 rounded-[50px] bg-primary flex justify-between items-center relative">
          {/* دایره متحرک */}
          <div
            className="absolute size-[30px] bg-White rounded-full !transition-transform duration-300 ease-in-out"
            style={{
              transform: theme === "dark" ? "translateX(-43px)" : "translateX(3.5px)",
            }}
          />
          {/* دکمه خورشید */}
          <button
            onClick={() => toggleTheme("light")}
            className="z-10 relative text-secondary cursor-pointer"
          >
            <Sun size={23} />
          </button>
          {/* دکمه ماه */}
          <button
            onClick={() => toggleTheme("dark")}
            className="z-10 relative text-White dark:text-primary cursor-pointer"
          >
            <Moon size={23} />
          </button>
        </div>
      </div>
      
      <div className="h-[31px] flex justify-between gap-11 max-lg:gap-2 max-lg:px-20 max-md:px-0">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={
              pathname === link.href
                ? "text-primary font-bold border-b-2 border-primary text-[20px]"
                : "text-[#1E2022] dark:text-White text-[20px]"
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

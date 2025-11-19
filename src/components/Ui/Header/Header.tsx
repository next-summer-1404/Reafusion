"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import MainReafusionLogo from "../../../assets/images/ReafusionLogo/MainReafusionLogo.jpg";
import Container from "../Container/Container";
import FillButton from "../Buttons/FillButton";
import EmptyButton from "../Buttons/EmptyButton";
import UnKnownPersonImage from '../../../assets/images/UnKnownUserImg/UnKnownUser.jpg';
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
  UserName?: string;
  UserImage?: string;
}

const Header: FC<IProps> = ({ userToken, UserName = 'کاربر بدون نام', UserImage = UnKnownPersonImage }) => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<string>("light");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // تم از localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // تغییر تم
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

  // بستن منو با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement)?.closest(".user-dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <Container className="px-12 py-6 flex justify-between max-lg:block max-lg:space-y-7 items-center">
      {/* لوگو و سوییچ تم */}
      <div className="text-[24px] text-center dark:text-White text-primary font-bold flex gap-2.5 max-lg:justify-center items-center">
        <Image
          src={MainReafusionLogo}
          alt="MainReafusionLogo"
          width={40}
          height={35}
          className="rounded-full overflow-hidden"
        />
        ریفیوژن
        <div className="w-[90px] h-[40px] px-2.5 rounded-[50px] bg-primary flex justify-between items-center relative">
          <div
            className="absolute size-[30px] bg-White rounded-full !transition-transform duration-300 ease-in-out"
            style={{
              transform: theme === "dark" ? "translateX(-43px)" : "translateX(3.5px)",
            }}
          />
          <button onClick={() => toggleTheme("light")} className="z-10 relative text-secondary cursor-pointer">
            <Sun size={23} />
          </button>
          <button onClick={() => toggleTheme("dark")} className="z-10 relative text-White dark:text-primary cursor-pointer">
            <Moon size={23} />
          </button>
        </div>
      </div>

      {/* منوی اصلی */}
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

      {/* بخش کاربر یا ورود/ثبت‌نام */}
      {userToken ? (
        <div className="relative user-dropdown">
          {/* بخش قابل کلیک کاربر */}
          <div
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="min-w-[110px] flex items-center gap-3 cursor-pointer select-none"
          >
            <h3 className="text-lg font-medium">{UserName || "کاربر بدون نام"}</h3>
            <Image
              src={UserImage || UnKnownPersonImage}
              alt="userImage"
              width={40}
              height={35}
              className="rounded-full size-[45px] object-cover"
            />
          </div>

          {/* منوی کشویی */}
          {isDropdownOpen && (
            <div className="absolute top-full mt-3 left-1 w-[150px] bg-white dark:bg-dark rounded-xl shadow-2xl border-2 border-primary dark:border-thidary overflow-hidden z-50 !animate-in !fade-in !slide-in-from-top-2 !duration-700">
              <Link
                href="/dashboard"
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center gap-3 px-5 py-4 hover:bg-lightPrimary dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-primary dark:text-whiteColor font-medium">
                  داشبورد
                </span>
              </Link>

              <button
                onClick={() => {
                  document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                  localStorage.clear();
                  window.location.href = "/login";
                }}
                className="w-full text-right px-5 py-4 hover:bg-red-50 cursor-pointer dark:hover:bg-red-900/30 transition-colors text-red font-medium"
              >
                خروج از حساب
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-5 max-lg:justify-center items-center">
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
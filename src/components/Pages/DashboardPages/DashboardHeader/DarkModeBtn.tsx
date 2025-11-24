"use client";

import IconButton from "@/components/Ui/IconButton";
import React, { useState, useEffect } from "react";

const DarkModeBtn = () => {
  // ابتدا سعی می‌کنیم تم ذخیره‌شده رو بخونیم، اگه نبود بر اساس prefers-color-scheme سیستم تصمیم می‌گیریم
  const getInitialTheme = (): string => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState<string>(getInitialTheme);

  // وقتی تم تغییر کرد، کلاس dark رو به html اضافه/حذف کن و در localStorage ذخیره کن
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <IconButton
      onClick={toggleTheme}
      iconName={theme === "dark" ? "sun" : "moon"} 
      customClass="!size-[40px] !p-0 flex items-center justify-center rounded-full bg-whiteColor dark:bg-primary text-yellow hover:!text-yellow border-0 dark:text-yellow-400 transition-all duration-300"
    />
  );
};

export default DarkModeBtn;
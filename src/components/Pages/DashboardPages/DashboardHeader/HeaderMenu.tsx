"use client";
import React, { useState } from "react";
import DashboardMenu from "../DashboardMenu";
import IconButton from "@/components/Ui/IconButton";

const HeaderMenu = ({ role }: { role?: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden">
        <IconButton
          iconName="menu"
          onClick={() => setMobileMenuOpen(true)}
          customClass="!size-[40px] !p-0 items-center justify-center rounded-full bg-primary text-white"
        />
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-[70%] sm:w-[40%] md:w-[30%] bg-white shadow-2xl overflow-y-auto !transition-all !duration-500">
            <DashboardMenu className="!w-full !block" role={role as string} />
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderMenu;
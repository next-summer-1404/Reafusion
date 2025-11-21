"use client";
import React, { useState } from "react";
import DashboardMenu from "../DashboardMenu";
import IconButton from "@/components/Ui/IconButton";

const HeaderMenu = ({ role }: { role?: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <IconButton
          iconName="menu"
          onClick={() => setMobileMenuOpen(true)}
          customClass="!size-[40px] !p-0 items-center justify-center rounded-full bg-primary text-white !p-0"
        />
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-[320px] bg-white shadow-2xl overflow-y-auto">
            <DashboardMenu className='!w-full !max-md:block' role={role as string} />
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderMenu;
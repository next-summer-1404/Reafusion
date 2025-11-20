// components/HeaderMenu.tsx
"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { IconButton } from "@mui/material";
import DashboardMenu from "../DashboardMenu";

const HeaderMenu = ({ role }: { role?: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <IconButton
          onClick={() => setMobileMenuOpen(true)}
          sx={{
            width: 40,
            height: 40,
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "50%",
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          <Menu size={24} />
        </IconButton>
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
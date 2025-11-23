"use client";

import React, { FC, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EllipsisVertical, Trash2 } from "lucide-react";
import { DeleteDocuments } from "@/core/Apis/Dashboard/DeleteDocuments";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface IProps {
  documentId: string;   
  token: string;         
}

const DocumentActionMenu: FC<IProps> = ({ documentId, token }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleDeleteDocuments = async () => {
    try {
      const response = await DeleteDocuments(documentId as string, token as string);
      if (response) {
        toast.success('سند با موفقیت حذف شد');
        handleClose();
        router.refresh();
      } else {
        toast.error('خطا در حذف سند')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* دکمه سه نقطه */}
      <button
        onClick={handleClick}
        className="p-2 hover:bg-whiteColor rounded-full transition-all duration-200 group cursor-pointer"
      >
        <EllipsisVertical size={20} className="text-primary" />
      </button>

      {/* منوی کشویی */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            mt: 1,
          },
        }}
      >
        <MenuItem
          onClick={handleDeleteDocuments}
          className="!text-red !flex !gap-2 hover:!bg-red-50"
        >
          <Trash2 size={18} />
          حذف سند
        </MenuItem>
      </Menu>
    </>
  );
};

export default DocumentActionMenu;
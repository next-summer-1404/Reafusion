"use client";

import React, { FC, useActionState, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EllipsisVertical, LandPlot, SquarePen, Trash2, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import { DeleteLocationAdmin } from "@/core/Apis/Dashboard/DeleteLocationAdmin";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// Leaflet
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import UpdateLocarionAction from "@/app/(Dashboard)/dashboard/AllLocationsManagements/ServerActions/UpdateLocarionAction";

// Fix آیکون‌های پیش‌فرض Leaflet در Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface IProps {
  id?: string;
  currentName?: string;
  token?: string;
  lat?: string;
  lng?: string;
}

// مارکر قابل جابجایی در حالت ویرایش
function DraggableMarker({
  position,
  setPosition,
}: {
  position: [number, number];
  setPosition: (pos: [number, number]) => void;
}) {
  const [markerPos, setMarkerPos] = useState(position);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setMarkerPos([lat, lng]);
      setPosition([lat, lng]);
    },
  });

  return (
    <Marker
      position={markerPos}
      draggable={true}
      eventHandlers={{
        dragend: (e) => {
          const marker = e.target;
          const pos = marker.getLatLng();
          setMarkerPos([pos.lat, pos.lng]);
          setPosition([pos.lat, pos.lng]);
        },
      }}
    />
  );
}

const LocationActionMenu: FC<IProps> = ({
  id,
  currentName = "",
  token,
  lat = "35.6892",
  lng = "51.3890",
}) => {
  const router = useRouter();
  const [state, formAction] = useActionState(UpdateLocarionAction, {
    message: "",
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openViewMapModal, setOpenViewMapModal] = useState(false);

  const [name, setName] = useState(currentName);
  const [position, setPosition] = useState<[number, number]>([
    Number(lat),
    Number(lng),
  ]);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleOpenEditModal = () => {
    setName(currentName);
    setPosition([Number(lat), Number(lng)]);
    setOpenEditModal(true);
    handleClose();
  };

  const handleOpenViewMap = () => {
    setOpenViewMapModal(true);
    handleClose();
  };

  const handleDeleteLocation = async () => {
    try {
      const response = await DeleteLocationAdmin(id as string, token as string);
      if (response) {
        toast.success("مقصد با موفقیت حذف شد");
        handleClose();
        router.refresh();
      } else {
        toast.error("خطا در حذف مقصد");
      }
    } catch (error) {
      toast.error("خطایی رخ داد");
      console.error(error);
    }
  };

  useEffect(() => {
    if (state.message === "مقصد با موفقیت ویرایش شد") {
      toast.success("مقصد با موفقیت ویرایش شد");
      setOpenEditModal(false);
      router.refresh();
    } else if (state.message && state.message !== "مقصد با موفقیت ویرایش شد") {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <>
      {/* دکمه سه نقطه */}
      <button
        onClick={handleClick}
        className="p-2 hover:bg-whiteColor rounded-full transition-all duration-200 group cursor-pointer"
      >
        <EllipsisVertical
          size={20}
          className="text-primary dark:!text-thidary"
        />
      </button>

      {/* منوی عملیات */}
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
          onClick={handleOpenViewMap}
          className="!text-primary !flex !gap-2 hover:!bg-lightPrimary"
        >
          <LandPlot size={19} />
          دیدن مقصد در نقشه
        </MenuItem>
        <MenuItem
          onClick={handleOpenEditModal}
          className="!text-primary !flex !gap-2 hover:!bg-lightPrimary"
        >
          <SquarePen size={18} />
          ویرایش مقصد
        </MenuItem>
        <MenuItem
          onClick={handleDeleteLocation}
          className="!text-red !flex !gap-2 hover:!bg-red-50"
        >
          <Trash2 size={18} />
          حذف مقصد
        </MenuItem>
      </Menu>

      {/* مودال فقط نمایش نقشه – خیلی گرد */}
      <Dialog
        open={openViewMapModal}
        onClose={() => setOpenViewMapModal(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          },
        }}
      >
        <div className="dark:!bg-dark">
          <DialogTitle className="text-xl font-bold text-primary dark:text-thidary pt-6">
            موقعیت مقصد روی نقشه
          </DialogTitle>
          <IconButton
            onClick={() => setOpenViewMapModal(false)}
            sx={{ position: "absolute", left: 12, top: 12 }}
          >
            <X size={24} className="dark:text-white" />
          </IconButton>
        </div>
        <DialogContent sx={{ height: "520px", p: 0 }}>
          <MapContainer
            center={[Number(lat), Number(lng)]}
            zoom={14}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[Number(lat), Number(lng)]} />
          </MapContainer>
        </DialogContent>
      </Dialog>

      {/* مودال ویرایش – خیلی گرد */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          },
        }}
      >
        <div className="flex items-center justify-between px-6 pt-6 dark:bg-dark">
          <DialogTitle className="text-[20px] font-bold text-primary dark:text-thidary">
            ویرایش مقصد
          </DialogTitle>
          <IconButton onClick={() => setOpenEditModal(false)}>
            <X size={24} className="dark:!text-whiteColor" />
          </IconButton>
        </div>

        <DialogContent className="p-6 dark:bg-dark">
          <form action={formAction} className="space-y-6">
            <Input
              name="area_name"
              value={name}
              setState={setName}
              lable="نام ناحیه"
              placeholder="مثلاً: تهران - شمال"
            />
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="lat" value={position[0]} />
            <input type="hidden" name="lng" value={position[1]} />
            {/* نقشه قابل ویرایش */}
            <div className="border border-borderColor rounded-2xl overflow-hidden h-[300px]">
              <MapContainer
                center={position}
                zoom={14}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <DraggableMarker
                  position={position}
                  setPosition={setPosition}
                />
              </MapContainer>
            </div>
            <div className="flex justify-between pt-4 gap-3">
              <button
                type="button"
                onClick={() => setOpenEditModal(false)}
                className="w-full py-3 border border-gray rounded-xl text-gray"
              >
                انصراف
              </button>
              <FillButton
                ButtonText="ذخیره تغییرات"
                className="w-full rounded-xl"
                type="submit"
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LocationActionMenu;

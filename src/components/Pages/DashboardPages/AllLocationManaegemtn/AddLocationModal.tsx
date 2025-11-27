"use client";

import React, { FC, useState, useEffect, useActionState } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { X } from "lucide-react";
import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter, useSearchParams } from "next/navigation";
import AddLocationAction from "@/app/(Dashboard)/dashboard/AllLocationsManagements/ServerActions/AddLocationAction";
import { toast } from "react-toastify";

// Fix آیکون Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

function DraggableMarker({ position, setPosition }: { position: [number, number]; setPosition: (pos: [number, number]) => void }) {
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
          const pos = e.target.getLatLng();
          setMarkerPos([pos.lat, pos.lng]);
          setPosition([pos.lat, pos.lng]);
        },
      }}
    />
  );
}

const AddLocationModal: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, formAction] = useActionState(AddLocationAction, { message: '' })

  const isOpen = searchParams.get("add") === "true";

  const [name, setName] = useState("");
  const [position, setPosition] = useState<[number, number]>([35.6892, 51.3890]);

  // وقتی مودال بسته شد → URL رو تمیز کن
  useEffect(() => {
    if (!isOpen) {
      setName("");
      setPosition([35.6892, 51.3890]);
    }
  }, [isOpen]);

  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("add");
    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (state.message === 'مقصد با موفقیت اضافه شد') {
      toast.success('مقصد با موفقیت اضافه شد')
      router.refresh()
    }
    else if (state.message && state.message !== 'مقصد با موفقیت اضافه شد') {
      toast.error(state.message)
    }
  }, [state, router])

  if (!isOpen) return null;

  return (
    <Dialog
      open={true}
      onClose={closeModal}
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
      <div className="flex items-center justify-between pl-5 pt-2 dark:bg-dark">
        <DialogTitle className="text-[20px] font-bold text-primary dark:text-thidary">
          افزودن مقصد جدید
        </DialogTitle>
        <IconButton onClick={closeModal}>
          <X size={24} className="dark:text-white" />
        </IconButton>
      </div>

      <DialogContent className="p-6 dark:bg-dark">
        <form action={formAction} className="space-y-6">
          <Input
            name="area_name"
            value={name}
            setState={setName}
            lable="نام ناحیه"
            placeholder="نام ناحیه مودر نظر را وارد کنید"
          />
          <input type="hidden" name="lat" value={position[0]} />
          <input type="hidden" name="lng" value={position[1]} />
          <div className="border border-borderColor rounded-2xl overflow-hidden h-[300px]">
            <MapContainer center={position} zoom={14} style={{ height: "100%", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <DraggableMarker position={position} setPosition={setPosition} />
            </MapContainer>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={closeModal}
              className="w-full py-3 border border-gray rounded-xl text-gray"
            >
              انصراف
            </button>
            <FillButton ButtonText="افزودن مقصد" className="w-full rounded-xl" type="submit" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddLocationModal;
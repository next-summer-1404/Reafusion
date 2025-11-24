"use client";

import React, { FC, useActionState, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { X } from "lucide-react";
import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import Image from "next/image";
import EmptyImage from "../../../../assets/images/EmptyImages/House Card.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import EditAllHousesAction from "@/app/(Dashboard)/dashboard/AllHousesManagement";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// رفع مشکل آیکون Leaflet
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
  open: boolean;
  onClose: () => void;
  house?: {
    id?: string;
    title?: string;
    address?: string;
    price?: string | number;
    photos?: string[];
    location?: { lat: number; lng: number };
    capacity?: number;
    rooms?: number;
    bathrooms?: number;
    parkings?: number;
    yard_type?: string;
    transaction_type?: string;
    category?: string;
    caption?: string;
    rate?: number | null;
    tags?: string[];
  };
}

function MapClickHandler({
  setPosition,
}: {
  setPosition: (pos: { lat: number; lng: number }) => void;
}) {
  useMapEvents({
    click(e) {
      setPosition({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
  return null;
}

const EditAllHouseModal: FC<IProps> = ({ open, onClose, house }) => {
  const [state, formAction] = useActionState(EditAllHousesAction, { message: '' })
  const router = useRouter();
  const [position, setPosition] = useState<{ lat: number; lng: number }>(
    house?.location || { lat: 35.6892, lng: 51.389 }
  );
  const [title, setTitle] = useState(house?.title || "");
  const [address, setAddress] = useState(house?.address || "");
  const [price, setPrice] = useState(house?.price?.toString() || "");
  const [capacity, setCapacity] = useState(house?.capacity?.toString() || "");
  const [rooms, setRooms] = useState(house?.rooms?.toString() || "");
  const [bathrooms, setBathrooms] = useState(
    house?.bathrooms?.toString() || ""
  );
  const [parkings, setParkings] = useState(house?.parkings?.toString() || "");
  const [yardType, setYardType] = useState(house?.yard_type || "");
  const [transactionType, setTransactionType] = useState(
    house?.transaction_type || ""
  );
  const [category, setCategory] = useState(house?.category || "مسکونی");
  const [caption, setCaption] = useState(house?.caption || "");

  useEffect(() => {
    if (state.message && state.message === "خانه با موفیت ویرایش شد") {
        toast.success("خانه با موفیت ویرایش شد");
        router.refresh();
    } else if (state.message && state.message !== "خانه با موفیت ویرایش شد") {
        toast.error(state.message);
    }
  }, [state, router]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] max-h-[90vh] overflow-y-auto bg-whiteColor dark:bg-dark rounded-3xl p-6 shadow-2xl">
        <h3 className="text-primary dark:text-thidary text-[24px] font-bold">
          ویرایش خانه
        </h3>
        <button
          onClick={onClose}
          className="absolute top-4 left-4 size-[58px] bg-lightGray cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-300 transition"
        >
          <X size={30} className="text-gray" />
        </button>
        <form action={formAction}>
          <div className="mt-7 space-y-5">
            {/* عکس خانه */}
            <div>
              <h3 className="font-bold text-dark text-[16px] mb-2">عکس خانه</h3>
              <div className="border border-borderColor rounded-[20px] h-[150px] relative overflow-hidden">
                <Image
                  src={house?.photos?.[0] || EmptyImage}
                  alt="house"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <Input
              name="title"
              lable="نام ملک"
              value={title}
              setState={setTitle}
              placeholder="نام ملک را وارد کنید"
            />
            <Input
              name="address"
              lable="آدرس"
              value={address}
              setState={setAddress}
              placeholder="آدرس ملک را وارد کنید"
            />
            <Input
              name="price"
              lable="قیمت (تومان)"
              value={price}
              setState={setPrice}
              placeholder="مثلاً 25000000"
            />
            <Input
              name="capacity"
              lable="ظرفیت"
              value={capacity}
              setState={setCapacity}
              placeholder="تعداد نفر"
            />
            <Input
              name="rooms"
              lable="اتاق‌ها"
              value={rooms}
              setState={setRooms}
              placeholder="تعداد اتاق"
            />
            <Input
              name="bathrooms"
              lable="حمام‌ها"
              value={bathrooms}
              setState={setBathrooms}
              placeholder="تعداد حمام"
            />
            <Input
              lable="پارکینگ"
              name="parking"
              value={parkings}
              setState={setParkings}
              placeholder="تعداد پارکینگ"
            />
            <div>
              <h3 className="font-bold text-dark text-[16px] mb-2">
                موقعیت جغرافیایی
              </h3>
              <div className="border border-borderColor rounded-[20px] h-[200px] overflow-hidden z-0">
                <MapContainer
                  key={`${position.lat}-${position.lng}`}
                  center={[position.lat, position.lng]}
                  zoom={15}
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={false}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[position.lat, position.lng]} />
                  <MapClickHandler setPosition={setPosition} />
                </MapContainer>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-dark text-[16px] dark:text-whiteColor">دسته‌بندی</h3>
              <select
                name="categories"
                className="bg-lightGray dark:bg-gray dark:text-whiteColor w-full p-3 text-primary rounded-[40px]"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="مسکونی">مسکونی</option>
                <option value="ویلایی">ویلایی</option>
                <option value="کلبه">کلبه</option>
                <option value="خانه ساحلی">خانه ساحلی</option>
                <option value="کاخ">کاخ</option>
              </select>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-dark text-[16px] dark:text-whiteColor">نوع حیاط</h3>
              <select
                name="yard_type"
                className="bg-lightGray dark:bg-gray dark:text-whiteColor w-full p-3 text-primary rounded-[40px]"
                value={yardType}
                onChange={(e) => setYardType(e.target.value)}
              >
                <option value="باغچه ای">باغچه ای</option>
                <option value="حیاط کوچک">حیاط کوچک</option>
                <option value="حیاط بزرگ">حیاط بزرگ</option>
              </select>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-dark text-[16px] dark:text-whiteColor">نوع معامله</h3>
              <select
                name="transaction_type"
                className="bg-lightGray dark:bg-gray dark:text-whiteColor w-full p-3 text-primary rounded-[40px]"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="rental">اجاره</option>
                <option value="mortgage">رهن</option>
                <option value="reservation">رزرو</option>
              </select>
            </div>
            <Input
              name="caption"
              lable="توضیحات"
              value={caption}
              setState={setCaption}
              placeholder="توضیحات خانه..."
            />
            <input type="hidden" name="id" value={house?.id} />
            <input
              type="hidden"
              name="tags"
              value={JSON.stringify(house?.tags || [])}
            />
            <input type="hidden" name="rate" value={Number(house?.rate)} />
            <input
              type="hidden"
              name="photos"
              value={JSON.stringify(house?.photos || [])}
            />
            <input type="hidden" name="lat" value={position.lat} />
            <input type="hidden" name="lng" value={position.lng} />
            <FillButton
              className="w-full p-3.5"
              ButtonText="ذخیره تغییرات"
              type="submit"
            />
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default EditAllHouseModal;

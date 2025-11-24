"use client";
import React, { FC, useActionState, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { X } from "lucide-react";
import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import Image from "next/image";
import EmptyImage from "../../../../../assets/images/EmptyImages/House Card.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import EditHouseAction from "@/app/(Dashboard)/dashboard/placesManagement/ServerActions/EditHouseAction";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// رفع مشکل آیکون پیش‌فرض Leaflet در Next.js
delete L.Icon.Default.prototype._getIconUrl;
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
  houseId?: string;
  houseImg?: string[];
  houseTitle?: string;
  houseAddress?: string;
  housePrice?: string;
  transactionsType?: string;
  houseRate?: number;
  houseLastUpdate?: string;
  houselocation?: {
    lat: number;
    lng: number;
  };
  houseCategory: {
    name: string;
  };
  capacity?: number;
  rooms?: number;
  bathrooms?: number;
  parkings?: number;
  yardType?: string;
  tags?: string[];
  caption?: string;
}

function MapClickHandler({
  setPosition,
}: {
  setPosition: (pos: { lat: number; lng: number }) => void;
}) {
  useMapEvents({
    click(e) {
      setPosition({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });
  return null;
}

const EditHouseModal: FC<IProps> = ({
  open,
  onClose,
  houseTitle = "",
  houseAddress = "",
  housePrice = "",
  houseRate,
  houseLastUpdate,
  houseImg,
  houselocation = { lat: 35.6892, lng: 51.389 },
  capacity = 0,
  rooms = 0,
  bathrooms = 0,
  parkings = 0,
  yardType = "",
  caption = "",
  transactionsType = "",
  houseCategory,
  tags,
  houseId,
}) => {
  const [position, setPosition] = useState<{ lat: number; lng: number }>(
    houselocation
  );
  const [title, setTitle] = useState(houseTitle);
  const [address, setAddress] = useState(houseAddress);
  const [price, setPrice] = useState(housePrice);
  const [rate, setRate] = useState(houseRate?.toString() ?? "");
  const [last_updated, setLast_updated] = useState(
    houseLastUpdate?.slice(0, 10)
  );
  const [houseCapacity, setHouseCapacity] = useState(capacity.toString());
  const [room, setRoom] = useState(rooms.toString());
  const [bathroom, setBathroom] = useState(bathrooms.toString());
  const [parking, setParking] = useState(parkings.toString());
  const [category, setCategory] = useState(houseCategory.name);
  const [houseYardType, setHouseYardType] = useState(yardType);
  const [transactionType, setTransactionType] = useState(transactionsType);
  const [captions, setCaptions] = useState(caption);
  const router = useRouter()
  const [state, formAction] = useActionState(EditHouseAction, { message: "" });

  useEffect(() => {
    if (open && houselocation) {
      setPosition(houselocation);
    }
  }, [open, houselocation, state, onClose]);

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
      <Box
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[520px] max-h-[90vh] overflow-y-auto bg-whiteColor dark:bg-dark rounded-3xl p-6 shadow-2xl
        "
      >
        <h3 className="text-primary text-[24px] font-bold dark:text-thidary">
          ویرایش خانه
        </h3>
        <button
          onClick={onClose}
          className="absolute top-4 left-4 size-[58px] bg-lightGray cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-300 transition"
        >
          <X size={30} className="text-gray" />
        </button>
        <form action={formAction} className="mt-7 space-y-5">
          <div>
            <h3 className="font-bold text-dark text-[16px] mb-2">عکس خانه</h3>
            <div className="border border-borderColor rounded-[20px] h-[150px] relative overflow-hidden">
              <Image
                src={houseImg && houseImg[0] ? houseImg[0] : EmptyImage}
                alt="house image"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <Input
            lable="نام ملک"
            placeholder="نام ملک را وارد کنید"
            name="title"
            value={title}
            setState={setTitle}
          />
          <Input
            lable="آدرس"
            placeholder="آدرس ملک را وارد کنید"
            name="address"
            value={address}
            setState={setAddress}
          />
          <Input
            lable="امتیاز"
            placeholder="امتیاز ملک را وارد کنید"
            name="rate"
            value={rate}
            setState={setRate}
          />
          <Input
            lable="قیمت (تومان)"
            placeholder="قیمت ملک را وارد کنید"
            name="price"
            value={price}
            setState={setPrice}
          />
          <Input
            lable="تاریخ آخرین ویرایش"
            name="last_updated"
            placeholder="تاریخ آخرین ویرایش"
            value={last_updated}
            setState={setLast_updated}
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
          <Input
            lable="ظرفیت خانه"
            placeholder="تعداد نفر"
            name="capacity"
            value={houseCapacity}
            setState={setHouseCapacity}
          />
          <Input
            lable="اتاق ها"
            placeholder="تعداد اتاق"
            value={room}
            setState={setRoom}
          />
          <Input
            lable="حمام ها"
            placeholder="تعداد حمام"
            value={bathroom}
            setState={setBathroom}
          />
          <Input
            lable="پارکینگ ها"
            placeholder="تعداد پارکینگ"
            value={parking}
            setState={setParking}
          />
          <div className="space-y-2">
            <h3 className="font-bold text-dark text-[16px]">دسته بندی</h3>
            <select
              className="bg-lightGray dark:bg-gray dark:text-whiteColor w-full p-3 text-primary rounded-[40px]"
              name="categories"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="مسکونی">مسکونی</option>
              <option value="ویلایی">ویلایی</option>
              <option value="کلبه">کلبه</option>
              <option value="خانه صاحلی">خانه صاحلی</option>
              <option value="کاخ">کاخ</option>
            </select>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-dark text-[16px]">نوع حیاط</h3>
            <select
              className="bg-lightGray dark:bg-gray dark:text-whiteColor w-full p-3 text-primary rounded-[40px]"
              name="yard_type"
              value={houseYardType}
              onChange={(event) => setHouseYardType(event.target.value)}
            >
              <option value="باغچه ای">باغچه ای</option>
              <option value="حیاط کوچک">حیاط کوچک</option>
              <option value="حیاط بزرگ">حیاط بزرگ</option>
            </select>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-dark text-[16px]">نوع معامله</h3>
            <select
              className="bg-lightGray dark:bg-gray dark:text-whiteColor w-full p-3 text-primary rounded-[40px]"
              name="transaction_type"
              value={transactionType}
              onChange={(event) => setTransactionType(event.target.value)}
            >
              <option value="mortgage">رهن</option>
              <option value="rental">اجاره</option>
              <option value="reservation">رزرو</option>
            </select>
          </div>
          <input type="hidden" name="tags" value={JSON.stringify(tags || [])} />
          <input type="hidden" name="id" value={houseId} />
          <input
            type="hidden"
            name="photos"
            value={JSON.stringify(houseImg || [])}
          />
          <input type="hidden" name="lat" value={position.lat} />
          <input type="hidden" name="lng" value={position.lng} />
          <Input
            lable="توضیحات"
            placeholder="توضیحات خانه را وارد کنید"
            value={captions}
            name="caption"
            setState={setCaptions}
          />
          <FillButton
            className="w-full p-3.5"
            ButtonText="ویرایش اطلاعات"
            type="submit"
          />
        </form>
      </Box>
    </Modal>
  );
};

export default EditHouseModal;

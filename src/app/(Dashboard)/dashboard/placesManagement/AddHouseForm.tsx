"use client";
import React, { useActionState, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Banknote, BathIcon, Bed, ChevronLeft, ChevronRight, HouseIcon, LocationEditIcon, ParkingCircleIcon, Plus, Theater, Upload, Users, X }
  from "lucide-react";
import FillButton from "@/components/Ui/Buttons/FillButton";
import AddPlaceFormInput from "@/components/Pages/DashboardPages/PlaceManagmentPage/AddPlaceFormInput";
import AddPlaceFromSelectOption from "@/components/Pages/DashboardPages/PlaceManagmentPage/AddPlaceFromSelectOption";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LeafletMouseEvent } from "leaflet";
import TagsInputMUI from "@/components/Pages/DashboardPages/PlaceManagmentPage/InputTag";
import Image from "next/image";
import AddHouseAction from "./ServerActions";
import { toast } from "react-toastify";
import AddPhotosActions from "./ServerActions/AddPhotosActions";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const steps = [
  { id: 1, title: "مشخصات اولیه" },
  { id: 2, title: "موقعیت مکانی" },
  { id: 3, title: "امکانات ملک" },
  { id: 4, title: "تایید و ساخت" },
  { id: 5, title: "ساخت تصویر" },
];

function MapClickHandler({
  onSelect,
}: {
  onSelect: (lat: number, lng: number) => void;
}) {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  useMapEvents({
    click(e: LeafletMouseEvent) {
      setPosition(e.latlng);
      onSelect(e.latlng.lat, e.latlng.lng);
    },
  });

  return position ? <Marker position={position} /> : null;
}

const AddHouseForm = () => {
  // the hook and state for add house and add photos for that
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, formAction] = useActionState(AddHouseAction, { message: '' });
  const [imageState, ImageAction] = useActionState(AddPhotosActions, { message: '' });
  console.log(imageState)
  const currentStep = parseInt(searchParams.get("step") || "1");
  const [selectedLatLng, setSelectedLatLng] = useState<{ lat: number; lng: number; } | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [title, setTitle] = useState('');
  const [capacity, setCapacity] = useState('')
  const [transactiontype, setTransactiontype] = useState('')
  const [price, setPrice] = useState('')
  const [categories, setCategories] = useState('')
  const [rate, setRate] = useState('')
  const [caption, setCaption] = useState('')
  const [address, setAddress] = useState('')
  const [rooms, setRooms] = useState('')
  const [bathrooms, setBathrooms] = useState('')
  const [parking, setParking] = useState('')
  const [yard_type, setYard_type] = useState('')
  const newHouseId = sessionStorage.getItem('newHouseId') as string;
  // the hook and state for add house and add photos for that end
  // manage response and show that to user
  useEffect(() => {
    if (state.message === 'خانه شما با موفقیت شاخته شد') {
      toast.success('خانه شما با موفقیت شاخته شد');
      sessionStorage.setItem('newHouseId', state.newHouseId as string)
    } else if (state.message && state.message !== 'خانه شما با موفقیت شاخته شد') {
      toast.error(state.error)
    }
    if (imageState.message === 'عکس ها با موفقیت ثبت شد') {
      toast.success('عکس ها با موفقیت ثبت شد')
    } else if (imageState.message && imageState.message !== 'عکس ها با موفقیت ثبت شد') {
      toast.error(imageState.message)
    }
  }, [state, imageState])
  // manage response and show that to user end
  // go to step func 
  const goToStep = (step: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", step.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };
  // go to next step func
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentStep < 5) goToStep(currentStep + 1);
  };
  // go to prev step func
  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentStep > 1) goToStep(currentStep - 1);
  };
  // close add house steps 
  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("step");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <ScrollReveal>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-dark dark:text-whiteColor">مدیریت املاک</h2>
        <button
          onClick={handleClose}
          className="text-primary dark:text-thidary flex gap-3 cursor-pointer"
        >
          رفتن به لیست املاک
          <ChevronLeft size={24} />
        </button>
      </div>
      {/* steps */}
      <div className="w-full flex sm:flex-wrap max-sm:flex-col justify-center gap-2 mb-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center ${index < steps.length - 1 ? "flex-1" : ""
              }`}
          >
            <div
              className={`min-w-[124px] min-h-[48px] max-sm:w-full rounded-[16px] flex justify-center items-center ${currentStep >= step.id
                ? "text-primary dark:text-thidary border-2 border-primary dark:border-thidary"
                : "text-gray dark:text-lightGray border border-gray dark:border-lightGray"
                }`}
            >
              {step.title}
            </div>
            {index < steps.length - 1 && (
              <div className="w-full h-0.5 bg-gray dark:bg-lightGray mx-2 max-sm:hidden"></div>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-4">
        {currentStep === 1 && (
          <div className="flex justify-between flex-wrap space-y-6">
            <AddPlaceFormInput
              value={title}
              setState={setTitle}
              type="text"
              label="نام ملک"
              placeHolder="نام ملک خود را بنویسید..."
            />
            <AddPlaceFormInput
              value={capacity}
              setState={setCapacity}
              type="text"
              label="ظرفیت"
              placeHolder="تعداد نفرات را بنویسید..."
            />
            <AddPlaceFromSelectOption
              value={transactiontype}
              setState={setTransactiontype}
              label="نوع معامله"
              options={[
                { value: "reservation", label: "رزرو" },
                { value: "mortgage", label: "رهن" },
                { value: "rental", label: "اجاره" },
              ]}
            />
            <AddPlaceFormInput
              value={price}
              setState={setPrice}
              type="text"
              label="قیمت"
              placeHolder="واحد قیمت تومان میباشد"
            />
            <AddPlaceFromSelectOption
              value={categories}
              setState={setCategories}
              label="نوع ملک"
              options={[
                { value: "مسکونی", label: "مسکونی" },
                { value: "ویلایی", label: "ویلایی" },
                { value: "کلبه", label: "کلبه" },
                { value: "ساحلی", label: "ساحلی" },
              ]}
            />
            <AddPlaceFormInput
              value={rate}
              setState={setRate}
              type="text"
              label="امتیاز خانه"
              placeHolder="امتیاز خانه را بنویسید (1-5)"
            />
            <textarea
              value={caption}
              onChange={(event) => setCaption(event.target.value)}
              className="bg-whiteColor dark:bg-background dark:text-thidary rounded-[16px] outline-0 text-primary placeholder:text-gray border border-borderColor p-3 w-full min-h-[150px]"
              placeholder="توضیحات خانه خود را بنویسید..."
            />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <AddPlaceFormInput
              value={address}
              setState={setAddress}
              type="text"
              label="آدرس"
              placeHolder="آدرس محل سکونت خود را بنویسید..."
              className="!w-full"
            />
            <div className="w-full h-[380px] border border-borderColor rounded-[24px] mt-8 overflow-hidden">
              <MapContainer
                center={[36.5633, 53.0586]}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MapClickHandler
                  onSelect={(lat, lng) => setSelectedLatLng({ lat, lng })}
                />
              </MapContainer>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className="flex justify-between flex-wrap space-y-5">
            <AddPlaceFormInput
              value={rooms}
              setState={setRooms}
              type="text"
              label="تعداد اتاق"
              placeHolder="تعداد اتاق خانه خود را بنویسید..."
            />
            <AddPlaceFormInput
              value={bathrooms}
              setState={setBathrooms}
              type="text"
              label="تعداد حمام"
              placeHolder="تعداد حمام خانه خود را بنویسید..."
            />
            <AddPlaceFormInput
              value={parking}
              setState={setParking}
              type="text"
              label="تعداد پارکینگ"
              placeHolder="تعداد پارکینگ خانه خود را بنویسید..."
            />
            <AddPlaceFromSelectOption
              value={yard_type}
              setState={setYard_type}
              label="نوع حیاط ملک"
              options={[
                { value: "باغچه ای", label: "باغچه ای" },
                { value: "حیات بزرگ", label: "حیات بزرگ" },
                { value: "حیات کوچک", label: "حیات کوچک" },
              ]}
            />
            <TagsInputMUI
              value={tags}
              onChange={setTags}
              label="برچسب های ملک"
              placeholder="مثلاً: استخر، ویو دریا، باربیکیو..."
            />
          </div>
        )}
        {currentStep === 4 &&
          <div className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-dark dark:text-whiteColor font-bold text-[20px]">{title || '---'}</h3>
              <h3 className="flex gap-1 text-gray dark:text-lightGray text-[16px]"><LocationEditIcon size={19} /> {address}</h3>
              <p className="text-dark dark:text-whiteColor text-[16px] text-justify">{caption}</p>
              <h3 className="text-dark dark:text-whiteColor text-[24px]  font-bold">{price} <span className="font-normal text-[16px]">تومان</span></h3>
            </div>
            <div className="space-y-5">
              <h3 className="text-[16px] text-dark dark:text-whiteColor font-bold">برچسب ها :</h3>
              {tags.map((items, index) => (
                <span key={index} className="bg-secondary px-4 py-2 mx-1 rounded-[8px] text-whiteColor">
                  {items}
                </span>
              ))}
            </div>
            <div className="space-y-5 my-8">
              <h3 className="text-[16px] text-dark dark:text-whiteColor font-bold">سایر مشخصات ها :</h3>
              <div className="flex flex-wrap justify-start gap-3">
                <div className="flex gap-1 bg-secondary px-4 py-2 rounded-[8px] text-whiteColor">
                  <Bed />
                  خوابه  {rooms}
                </div>
                <div className="flex gap-1 bg-secondary px-4 py-2 rounded-[8px] text-whiteColor">
                  <BathIcon />
                  حمام{bathrooms}
                </div>
                <div className="flex gap-1 bg-secondary px-4 py-2 rounded-[8px] text-whiteColor">
                  <ParkingCircleIcon />
                  {parking}  پارکینگ
                </div>
                <div className="flex gap-1 bg-secondary px-4 py-2 rounded-[8px] text-whiteColor">
                  <Users />
                  {capacity} نفر ظرفیت
                </div>
                <div className="flex gap-1 bg-secondary px-4 py-2 rounded-[8px] text-whiteColor">
                  <HouseIcon />
                  {yard_type}
                </div>
                <div className="flex gap-1 bg-secondary px-4 py-2 rounded-[8px] text-whiteColor">
                  <Theater />
                  {categories}
                </div>
                <div className="flex gap-1 bg-secondary px-4 py-2 rounded-[8px] text-whiteColor">
                  <Banknote />
                  {transactiontype}
                </div>
              </div>
            </div>
          </div>
        }
        {currentStep === 5 && (
          <div className="space-y-8">
            <form action={ImageAction} className="grid grid-cols-3 gap-6">
              <label className="cursor-pointer block">
                <div className="relative w-full h-96 border-3 dark:border-whiteColor border-dashed rounded-3xl flex flex-col items-center justify-center gap-4">
                  <div className="border-2 border-dark dark:border-whiteColor p-4 rounded-full">
                    <Plus size={36} className="text-dark dark:text-whiteColor" />
                  </div>
                  <span className="text-dark dark:text-whiteColor text-[20px] font-semibold">
                    افزدون عکس
                  </span>
                </div>
                <input type="hidden" name="id" value={newHouseId} />
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  // multiple
                  name="photos"
                  className="hidden"
                  onChange={(e) => {
                    const newFiles = Array.from(e.target.files || []);
                    if (newFiles.length > 0) {
                      setUploadedFiles((prev) =>
                        [...prev, ...newFiles].slice(0, 10)
                      );
                    }
                  }}
                />
              </label>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={URL.createObjectURL(file)}
                    width={100}
                    height={384}
                    alt={`آپلود ${index + 1}`}
                    className="w-full h-96 object-cover rounded-3xl border border-borderColor"
                  />
                  {index === 0 && (
                    <FillButton
                      ButtonText="تصویر اصلی"
                      className="absolute bottom-4 left-4 px-10 py-2"
                    />
                  )}
                  <button
                    onClick={() =>
                      setUploadedFiles((prev) =>
                        prev.filter((_, i) => i !== index)
                      )
                    }
                    className="absolute top-4 right-4 cursor-pointer bg-whiteColor p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <X size={22} />
                  </button>
                </div>
              ))}
              {Array.from({ length: 2 - uploadedFiles.length }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="w-full h-96 border-3 border-dashed border-borderColor rounded-3xl bg-lightGray dark:bg-background flex items-center justify-center"
                >
                  <div className="text-borderColor">
                    <Upload size={48} />
                  </div>
                </div>
              ))}
              <div></div>
              <FillButton
                ButtonText="ساخت عکس برای خانه"
                className="px-8 py-4 !rounded-[14px]"
                type="submit"
              />
            </form>
          </div>
        )}
      </div>
      {/* actions */}
      <div className="flex max-sm:flex-col justify-between">
        {currentStep > 1 ? (
          <button
            onClick={handlePrev}
            className={`px-6 py-3 rounded-xl flex items-center bg-gray gap-2 cursor-pointer text-whiteColor max-sm:my-4`}
          >
            <ChevronRight size={20} />
            مرحله قبل
          </button>
        ) : (
          <p></p>
        )}
        {currentStep < 4 ? (
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-primary text-whiteColor cursor-pointer rounded-xl flex items-center gap-2 hover:bg-primary/90 transition mt-4"
          >
            مرحله بعد
            <ChevronLeft size={20} />
          </button>
        ) : currentStep === 4 ? (
          <div className="flex max-sm:flex-col gap-3">
            <button onClick={handleNext} className="p-4 !rounded-[14px] border border-primary dark:border-thidary dark:text-thidary text-primary font-semibold cursor-pointer">
              ایجاد عکس پس از ساخت خانه
            </button>
            <form action={formAction}>
              <input type="hidden" name="title" value={title} />
              <input type="hidden" name="address" value={address} />
              <input type="hidden" name="price" value={price} />
              <input type="hidden" name="capacity" value={capacity} />
              <input type="hidden" name="rate" value={rate} />
              <input type="hidden" name="rooms" value={rooms} />
              <input type="hidden" name="bathrooms" value={bathrooms} />
              <input type="hidden" name="parking" value={parking} />
              <input type="hidden" name="yard_type" value={yard_type} />
              <input type="hidden" name="categories" value={categories} />
              <input type="hidden" name="transaction_type" value={transactiontype} />
              <input type="hidden" name="caption" value={caption || ""} />
              <input type="hidden" name="lat" value={selectedLatLng?.lat || ""} />
              <input type="hidden" name="lng" value={selectedLatLng?.lng || ""} />
              <FillButton
                ButtonText="تایید و ساخت خانه"
                className="px-8 !rounded-[14px] py-4 max-sm:w-full"
                type="submit"
              />
            </form>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </ScrollReveal>
  );
};

export default AddHouseForm;
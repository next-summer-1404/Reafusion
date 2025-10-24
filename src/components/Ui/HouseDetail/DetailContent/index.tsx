'use client'
import React, { FC, useState } from "react";
import ActiveButton from "../StepButtons/ActiveButton";
import NormalButton from "../StepButtons/NormalButton";
import { MapPinHouse } from "lucide-react";
import FacilitiesCard from "../FacilitiesCard";
import HouseComments from "../HouseComments";
import { IProps } from "@/core/types/IDetailContent";
import ReservationForm from "./ReservationForm";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // استایل‌های leaflet
import L from "leaflet";
import Mortagehouse from "./Mortagehouse";

const customIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const DetailContent: FC<IProps> = ({ houseName, houseAddress, houseCaption, houseType, houseCapacity,
  yardType, sellerName, BathroomsLength, parkingLength, roomLength, id, CommnetList, CommentCount,
  userId, userName, userProfile, price, discounted_price, isMortageDetail, lat, lng
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'facilities' | 'comments' | 'houseLocation'>('about');

  const discountPercentage = discounted_price
    ? Math.round(
      (Number(discounted_price) - Number(price) / Number(discounted_price)) * 100
    )
      .toFixed(0)
      .slice(0, 2)
    : 0;

  return (
    <div className="flex justify-between">
      <div className="w-[1000px]">
        {/* house Name & Address */}
        <h1 className="text-[32px] text-dark font-bold ">{houseName}</h1>
        <p className="text-[16px] text-gray flex gap-2 py-4"><MapPinHouse size={20} /> {houseAddress}</p>
        {/* house Name & Address end */}
        {/* tab of house content */}
        <div className="flex gap-6 mt-4">
          {activeTab === 'about' ? (
            <ActiveButton ButtonText="درباره ملک" />
          ) : (
            <NormalButton ButtonText="درباره ملک" onClick={() => setActiveTab('about')} />
          )}
          {activeTab === 'facilities' ? (
            <ActiveButton ButtonText="امکانات اقامتگاه" />
          ) : (
            <NormalButton ButtonText="امکانات اقامتگاه" onClick={() => setActiveTab('facilities')} />
          )}
          {isMortageDetail && (
            activeTab === "houseLocation" ? (
              <ActiveButton ButtonText="موقعیت ملک" />
            ) : (
              <NormalButton ButtonText="موقعیت ملک" onClick={() => setActiveTab("houseLocation")} />
            )
          )}
          {activeTab === 'comments' ? (
            <ActiveButton ButtonText="نظرات کاربران" />
          ) : (
            <NormalButton ButtonText="نظرات کاربران" onClick={() => setActiveTab('comments')} />
          )}
        </div>
        {/* tab of house content end */}
        {/* content of the About Tab */}
        {activeTab === 'about' && (
          <div className="pt-8">
            <h2 className="text-dark text-[24px] font-bold "> چرا {houseName} رو انتخاب کنیم ؟</h2>
            <p className="text-dark text-[16px] text-justify leading-9 pt-3">{houseCaption || 'توضیحاتی ندارد'}</p>
          </div>
        )}
        {/* content of the About Tab */}
        {/* content of the facilities Tab */}
        {activeTab === 'facilities' && (
          <div className="pt-8 flex justify-start gap-6 flex-wrap ">
            <FacilitiesCard lable={'نوع بنا'} title={houseType} />
            <FacilitiesCard lable={'ظرفیت بنا'} title={houseCapacity + ' نفر'} />
            <FacilitiesCard lable={'حمام'} title={BathroomsLength + ' حمام'} />
            <FacilitiesCard lable={'تعداد پارکینک'} title={parkingLength > 0 ? parkingLength + ' پارکینگ' : ' ندارد'} />
            <FacilitiesCard lable={'اتاق خواب'} title={roomLength + ' خوابه'} />
            <FacilitiesCard lable={'نوع حیاط'} title={yardType} />
            <FacilitiesCard lable={'نام فروشنده'} title={sellerName} />
          </div>
        )}
        {/* content of the facilities Tab end */}
        {/* content of the houseLocation Tab */}
        {isMortageDetail && activeTab === "houseLocation" && (
          <div className="pt-8 space-y-7">
            <h2 className="text-dark text-[24px] font-bold">موقعیت {houseName}</h2>
            <div className="h-[230px] w-full rounded-[24px]">
              <MapContainer
                center={[lat, lng]}
                zoom={12}
                style={{ height: "230px", width: "100%", borderRadius: "24px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {lat && lng && (
                  <Marker position={[lat, lng]} icon={customIcon}>
                    <Popup>{houseName}</Popup>
                  </Marker>
                )}
              </MapContainer>
            </div>
          </div>
        )}
        {/* content of the houseLocation Tab end */}
        {/* content of the comment Tab */}
        {activeTab === 'comments' && (
          <HouseComments
            id={id}
            CommnetList={CommnetList}
            CommentCount={CommentCount}
            userId={userId}
            userName={userName}
            userProfile={userProfile}
          />
        )}
        {/* content of the comment Tab end */}
      </div>
      {/* reservetions form */}
      {isMortageDetail ? (
        <Mortagehouse />
      ) : (
        <ReservationForm
          discountPercentage={discountPercentage}
          discounted_price={discounted_price}
          price={price}
          houseId={id}
        />
      )}
      {/* reservetions form end */}
    </div>
  );
};

export default DetailContent;
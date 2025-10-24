import Image from "next/image";
import React from "react";
import image from "../../../../../assets/images/UserOpenianImgs/openianImg.svg";
import personImg from "../../../../../assets/images/UserOpenianImgs/person.svg";

const UserOpenianCard = () => {
  return (
    <div className="border border-[#DDDDDD] dark:border-thidary dark:bg-white w-[427px] max-sm:w-[400px] min-h-[281px] rounded-[24px] px-6 py-6 space-y-5">
      <div className="flex justify-between items-center">
        <Image
          src={personImg}
          alt="personImage"
          width={100}
          height={100}
          className="rounded-[8px]"
        />
        <Image
          src={image}
          alt="personImage"
          width={52}
          height={52}
          className="rounded-[8px]"
        />
      </div>
      <p className="text-[#1E2022] text-[16px] text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم
      </p>
      <div className="flex gap-2 text-[#777777] text-[14px]">
        <h4 className=" text-black font-bold">اما واتسون</h4>-
        <h4>16 شهریور 1404</h4>
      </div>
    </div>
  );
};

export default UserOpenianCard;

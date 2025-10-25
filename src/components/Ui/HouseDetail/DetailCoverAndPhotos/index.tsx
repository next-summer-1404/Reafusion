import Image from "next/image";
import React, { FC } from "react";
import HouseImage from "../../../../assets/images/EmptyImages/House Card.png";

interface IProps {
  houseImages: string[];
  houseName: string;
}

const DetailCoverAndPhotos: FC<IProps> = ({ houseImages, houseName }) => {
  return (
    <div className="h-[440px] flex justify-between max-md:flex-col max-md:h-fit max-md:gap-8">
      <Image
        className="rounded-[24px] max-md:w-full"
        width={1000}
        height={440}
        src={houseImages === null ? HouseImage : (houseImages[0] || HouseImage)}
        alt={houseName}
      />
      <div className="space-y-8  max-md:flex-col">
        <Image
          className="rounded-[24px] h-[203px]"
          width={388}
          height={203}
          src={houseImages === null ? HouseImage : (houseImages[1] || HouseImage)}
          alt={houseName}
        />
        <div className="relative">
          <Image
            className="rounded-[24px] h-[203px] filter brightness-70"
            width={388}
            height={203}
            src={houseImages === null ? HouseImage : (houseImages[2] || HouseImage)}
            alt={houseName}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="border border-whiteColor text-[16px] text-whiteColor p-2.5 rounded-[40px] px-4 cursor-pointer">
              2+ مشاهده بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCoverAndPhotos;

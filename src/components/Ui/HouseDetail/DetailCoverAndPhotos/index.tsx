import Image from "next/image";
import React, { FC } from "react";
import HouseImage from "../../../../assets/images/EmptyImages/House Card.png";

interface IProps {
  houseImages: string[];
  houseName: string;
}

const DetailCoverAndPhotos: FC<IProps> = ({ houseImages, houseName }) => {
  return (
    <div className="h-[440px] flex justify-between max-lg:flex-col max-lg:h-fit gap-8">
      <Image
        className="rounded-[24px] max-md:w-full max-lg:h-[350px]"
        width={1000}
        height={440}
        src={houseImages === null ? HouseImage : (houseImages[0] || HouseImage)}
        alt={houseName}
      />

      <div className="flex gap-8 flex-col max-lg:flex-row max-sm:flex-col">
        <Image
          className="rounded-[24px] h-[203px] max-lg:w-[50%] w-full max-sm:w-full"
          width={388}
          height={203}
          src={houseImages === null ? HouseImage : (houseImages[1] || HouseImage)}
          alt={houseName}
        />
        <div className="relative max-lg:w-[50%] w-full max-sm:w-full">
          <Image
            className="rounded-[24px] h-[203px] filter brightness-70 w-full"
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

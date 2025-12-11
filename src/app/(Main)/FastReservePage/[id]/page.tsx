import Breadcrumb from "@/components/Ui/Breadcrumb";
import Container from "@/components/Ui/Container/Container";
import { GetHouseDetail } from "@/core/Apis/GetHouseDetail";
import React, { FC } from "react";
import DetailCoverAndPhotos from "@/components/Ui/HouseDetail/DetailCoverAndPhotos";
import DetailContent from "@/components/Ui/HouseDetail/DetailContent";
import EmptyButton from "@/components/Ui/Buttons/EmptyButton";
import { GetSpecialVilas } from "@/core/Apis/GetSpecialVilas";
import Slider from "@/components/Pages/Landing/Sections/BestHouses/Slider";
import { GetHousesComments } from "@/core/Apis/GetHousesComment";
import { cookies } from "next/headers";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";
import { Metadata } from "next";

interface IProps {
  params: { id: string };
}

export const generateMetadata = async ({ params }: IProps): Promise<Metadata> => {
  const id = params.id
  const response = (await GetHouseDetail(id));
  return {
    title: `${response.title}` || 'جزعیات خانه',
    description: `${response.caption}` || 'این صفحه جزعیات خانه را مشاهده می کنید و اطلاعات تکمیلی خانه را برسی میکنید',
    keywords: [`${response.tags}`, `${response.title}`,],
  }
}


const FastReserveDetailPage: FC<IProps> = async ({ params }) => {
  // call Api and send data and get the value from that
  const id = params.id;
  const response = (await GetHouseDetail(id));
  const Housedata = await GetSpecialVilas();
  const { houses } = Housedata;
  const CommentResponse = await GetHousesComments(id);
  const { data, totalCount } = CommentResponse;
  const houseName = response.title;
  const houseImages = response.photos;
  const houseAddress = response.address;
  const houseCaption = response.caption;
  const houseType = response.categories.name;
  const houseCapacity = response.capacity;
  const BathroomsLength = response.bathrooms;
  const parkingLength = response.parking;
  const roomLength = response.rooms;
  const yardType = response.yard_type;
  const sellerName = response.sellerName;
  const price = response.price;
  const discounted_price = response.discounted_price;
  const similarHouses = houses.slice(0, 4);
  // call Api and send data and get the value from that end
  // get the token value and decode that
  const cookieStore = await cookies()
  const token = cookieStore.get('token');
  const tokenValue = token?.value as string
  const decodToken = JSON.parse(
    Buffer.from(tokenValue.split(".")[1], "base64url").toString("utf-8")
  );
  // get the token value and decode that end

  return (
    <Container className="space-y-10">
      <ScrollReveal>
        <Breadcrumb
          homeElement={"خانه"}
          activeClasses="!text-[#1E2022] !font-bold dark:!text-thidary"
          containerClasses="flex gap-4 dark:text-thidary"
          listClasses="hover:text-[#1E2022] text-[#777777] dark:text-white"
          capitalizeLinks
          currentItem={houseName}
        />
        <DetailCoverAndPhotos houseImages={houseImages} houseName={houseName} />
      </ScrollReveal>
      <ScrollReveal>
         <DetailContent
            id={id}
            houseName={houseName}
            houseAddress={houseAddress}
            houseCaption={houseCaption}
            houseType={houseType}
            houseCapacity={houseCapacity}
            BathroomsLength={BathroomsLength}
            parkingLength={parkingLength}
            roomLength={roomLength}
            yardType={yardType}
            sellerName={sellerName}
            price={price}
            discounted_price={discounted_price}
            CommnetList={data}
            CommentCount={totalCount}
            userId={decodToken.id}
            userProfile={decodToken.profilePicture}
            userName={decodToken.name}
            isMortageDetail={false}
          />
      </ScrollReveal>
      <ScrollReveal>
          <div className="flex justify-between dark:text-white">
            <h2 className="text-dark text-[24px] font-bold dark:text-white">آگهی های مشابه</h2>
            <EmptyButton ButtonText="مشاهده همه" className="p-2 px-5" />
          </div>
          <Slider filterData={similarHouses} />
      </ScrollReveal>
    </Container>
  );
};

export default FastReserveDetailPage;
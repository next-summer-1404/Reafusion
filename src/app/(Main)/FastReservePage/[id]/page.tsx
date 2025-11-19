import Breadcrumb from "@/components/Ui/Breadcrumb";
import Container from "@/components/Ui/Container/Container";
import { GetHouseDetail } from "@/core/Apis/GetHouseDetail";
import { AxiosResponse } from "axios";
import React, { FC } from "react";
import DetailCoverAndPhotos from "@/components/Ui/HouseDetail/DetailCoverAndPhotos";
import DetailContent from "@/components/Ui/HouseDetail/DetailContent";
import EmptyButton from "@/components/Ui/Buttons/EmptyButton";
import { GetSpecialVilas } from "@/core/Apis/GetSpecialVilas";
import Slider from "@/components/Pages/Landing/Sections/BestHouses/Slider";
import { GetHousesComments } from "@/core/Apis/GetHousesComment";
import { cookies } from "next/headers";
import { IHouseDetailData } from "@/core/Types/IHouseDetailData";
import { IApiResponse } from "@/core/Types/IApiResForGetHouses";
import { IComment } from "@/core/Types/ICommentResponse";
import ScrollReveal from "@/components/Ui/Animations/ScrollReveal";

interface IProps {
  params: { id: string };
}
export interface ICommentResponse {
  data: IComment[];
  totalCount: number;
}

const FastReserveDetailPage: FC<IProps> = async ({ params }) => {
  // call Api and send data and get the value from that
  const id = params.id;
  const response = (await GetHouseDetail(id)) as AxiosResponse<IHouseDetailData>;
  const Housedata = await GetSpecialVilas() as AxiosResponse<IApiResponse>;
  const { houses } = Housedata.data;
  const CommentResponse = await GetHousesComments(id) as AxiosResponse<ICommentResponse>;
  const { data, totalCount } = CommentResponse.data;
  const houseName = response.data.title;
  const houseImages = response.data.photos;
  const houseAddress = response.data.address;
  const houseCaption = response.data.caption;
  const houseType = response.data.categories.name;
  const houseCapacity = response.data.capacity;
  const BathroomsLength = response.data.bathrooms;
  const parkingLength = response.data.parking;
  const roomLength = response.data.rooms;
  const yardType = response.data.yard_type;
  const sellerName = response.data.sellerName;
  const price = response.data.price;
  const discounted_price = response.data.discounted_price;
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
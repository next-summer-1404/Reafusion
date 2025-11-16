import Slider from '@/components/Pages/Landing/Sections/BestHouses/Slider';
import Breadcrumb from '@/components/Ui/Breadcrumb';
import EmptyButton from '@/components/Ui/Buttons/EmptyButton';
import Container from '@/components/Ui/Container/Container';
import DetailContent from '@/components/Ui/HouseDetail/DetailContent';
import DetailCoverAndPhotos from '@/components/Ui/HouseDetail/DetailCoverAndPhotos';
import { GetHouseDetail } from '@/core/Apis/GetHouseDetail';
import { GetHousesComments } from '@/core/Apis/GetHousesComment';
import { GetSpecialVilas } from '@/core/Apis/GetSpecialVilas';
import { IApiResponse } from '@/core/types/IApiResForGetHouses';
import { IComment } from '@/core/types/ICommentResponse';
import { IHouseDetailData } from '@/core/types/IHouseDetailData';
import { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';
import React, { FC } from 'react'

interface IProps {
  params: {
    id: string,
  }
}
export interface ICommentResponse {
  data: IComment[];
  totalCount: number;
}

const MortageAndRentDetail: FC<IProps> = async ({ params }) => {
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
  const lat = response.data.location.lat;
  const lng = response.data.location.lng;
  const similarHouses = houses.slice(0, 4);
  // call Api and send data and get the value from that end
  // get the token value and decode that
  const cookieStore = await cookies()
  const token = cookieStore.get('token');
  const tokenValue = token?.value as string
  const decodToken = tokenValue 
  ? JSON.parse(Buffer.from(tokenValue.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'),'base64').toString())
  : null;
  // get the token value and decode that end

  return (
    <Container className="space-y-10">
      <Breadcrumb
        homeElement={"خانه"}
        activeClasses="!text-[#1E2022] !font-bold dark:!text-thidary"
        containerClasses="flex gap-4"
        listClasses="hover:text-[#1E2022] text-[#777777] dark:text-white dark:hover:text-borderColor"
        capitalizeLinks
        currentItem={houseName}
      />
      <DetailCoverAndPhotos houseImages={houseImages} houseName={houseName} />
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
        lat={lat}
        lng={lng}
        isMortageDetail={true}
      />
      <div className="flex justify-between">
        <h2 className="text-dark text-[24px] font-bold dark:text-white">آگهی های مشابه</h2>
        <EmptyButton ButtonText="مشاهده همه" className="p-2 px-5" />
      </div>
      <Slider filterData={similarHouses} />
    </Container>
  );
}

export default MortageAndRentDetail
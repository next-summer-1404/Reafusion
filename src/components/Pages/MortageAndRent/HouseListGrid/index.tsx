import HouseCard from '@/components/Ui/HouseCard';
import { getHousesByFilter } from '@/core/Apis/GetHousesByFilter';
import { IApiResponse } from '@/core/Types/IApiResForGetHouses';
import { AxiosResponse } from 'axios';

const HouseListGrid = async () => {
  let response;
  try {
    response = await getHousesByFilter() as AxiosResponse<IApiResponse>;
  } catch (error) {
    console.error('خطا در دریافت داده‌ها:', error);
    return <div className='text-center text-red-500'>خطایی در بارگذاری داده‌ها رخ داده است.</div>;
  }

  const { houses } = response.data;

  if (!houses || houses.length === 0) {
    return <div className='text-center'>داده‌ای برای نمایش وجود ندارد.</div>;
  }

  return (
    <div className='flex flex-col gap-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {houses.map((item) => (
          <HouseCard
            key={item.id}
            HomeName={item.title}
            HomeAddress={item.address}
            HomePrice={item.price}
            HomeOffer={item.discounted_price}
            HomeImage={item.photos}
            HomeBathroomCount={item.bathrooms}
            HomeParkingCount={item.parking}
            HomeCapacityCount={item.capacity}
            HomeRoomCount={item.rooms}
          />
        ))}
      </div>
    </div>
  );
};

export default HouseListGrid;
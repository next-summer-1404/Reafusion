import Box from '@mui/material/Box';
import { X, BedDouble, SoapDispenserDroplet, Warehouse, UsersRound, House, MapPin, ListChecks, CreditCard, SquarePen, Flower2 } from 'lucide-react';
import Image from 'next/image';
import DetailImg from '@/assets/images/Dashboard/detail.jpg';
import Link from 'next/link';
import { IHouseDetailData } from '@/core/types/IHouseDetailData';
import ReservesListModal from '../ReservesListModal';
import PassengersModal from '../PassengersModal';
import PaymentsModal from '../PaymentsModal';
import EditHistoryModal from '../EditHistoryModal';
import { IBookingResponse } from '@/core/types/IBookingDatas';

const icons = [
  { name: 'bed', icon: <BedDouble size={22} strokeWidth={1.5} /> },
  { name: 'bath', icon: <SoapDispenserDroplet size={22} strokeWidth={1.5} /> },
  { name: 'parking', icon: <Warehouse size={22} strokeWidth={1.5} /> },
  { name: 'capacity', icon: <UsersRound size={22} strokeWidth={1.5} /> },
  { name: 'house', icon: <House size={22} strokeWidth={1.5} /> },
  { name: 'yardType', icon: <Flower2 size={22} strokeWidth={1.5} /> },
];

interface IProps {
  houseId?: string;
  activeSubModal?: string;
  houseDetail?: IHouseDetailData;
  BookingList?: IBookingResponse;
}

export default function HouseDetailModal({ houseId, activeSubModal, houseDetail, BookingList }: IProps) {
  if (!houseId || !houseDetail) return null;

  const isSubModalOpen = (type: string) => activeSubModal === type;

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 bg-gray-500/50 z-50 flex justify-center items-center">
        <Box className="w-[80%] h-[90%] max-h-[90%] bg-white dark:bg-dark flex flex-col rounded-3xl text-dark py-8 gap-8 overflow-hidden">
          {/* Header */}
          <div className='flex justify-between items-center px-8'>
            <h3 className='font-bold text-2xl text-primary dark:text-thidary'>جزئیات اقامتگاه</h3>
            <Link
              href="?"
              className='size-12 rounded-full flex justify-center items-center bg-lightGray hover:scale-110 transition-all'
            >
              <X size={32} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Body */}
          <div className='flex flex-col gap-8 px-8 overflow-y-auto'>
            {/* Image + Info */}
            <div className='flex justify-between gap-8'>
              <Image
                src={houseDetail.photos[0] || DetailImg}
                alt={houseDetail.title}
                width={400}
                height={300}
                className='w-[40%] h-[300px] rounded-3xl border border-borderColor object-cover'
              />
              <div className='w-[60%] flex flex-col gap-3'>
                <h2 className='truncate font-bold dark:text-lightGray text-xl'>{houseDetail.title}</h2>
                <div className='flex items-center gap-2 text-gray dark:text-lightGray'>
                  <MapPin size={20} strokeWidth={1.5} />
                  <p className='truncate'>{houseDetail.address}</p>
                </div>
                <p className='line-clamp-6 leading-[32px] text-justify dark:text-lightGray'>
                  {houseDetail.caption}
                </p>
                <div className='flex gap-2 items-center justify-end text-primary  dark:text-thidary'>
                  <span className='font-bold text-2xl'>{houseDetail.price.toLocaleString()}</span>
                  <span>تومان</span>
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className='flex flex-col gap-4'>
              <p className='font-bold'>برچسب ها :</p>
              <ul className='flex gap-4'>
                {houseDetail.tags?.map((tag, i) => (
                  <li key={i} className='px-2 py-1.5 rounded-lg bg-secondary text-whiteColor'>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className='flex flex-col gap-4'>
              <p className='font-bold'>ویژگی‌ها :</p>
              <ul className='flex gap-4 flex-wrap'>
                {icons.map((item, index) => (
                  <li key={index} className='flex items-center gap-2 px-2 py-1.5 rounded-lg bg-secondary text-whiteColor'>
                    <span>{item.icon}</span>
                    <span>
                      {item.name === 'bed' ? `${houseDetail.rooms} خوابه` :
                       item.name === 'bath' ? `${houseDetail.bathrooms} حمامه` :
                       item.name === 'parking' ? (houseDetail.parking ? 'پارکینگ' : 'بدون پارکینگ') :
                       item.name === 'capacity' ? `${houseDetail.capacity} نفر ظرفیت` :
                       item.name === 'house' ? `${houseDetail.categories.name}` : 
                       item.name === "yardType" ? `${houseDetail.yard_type}` : ''
                      }
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className='flex flex-col gap-4'>
              <p className='font-bold'>انجام عملیات :</p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href={`?detail=${houseId}&submodal=reserves`}
                  className="flex gap-2 p-3 rounded-2xl bg-primary text-whiteColor hover:opacity-90 transition"
                >
                  <ListChecks size={22} strokeWidth={1.5} />
                  رزرو ها
                </Link>
                <Link
                  href={`?detail=${houseId}&submodal=passengers`}
                  className="flex gap-2 p-3 rounded-2xl bg-primary text-whiteColor hover:opacity-90 transition"
                >
                  <UsersRound size={22} strokeWidth={1.5} />
                  مسافر ها
                </Link>
                <Link
                  href={`?detail=${houseId}&submodal=payments`}
                  className="flex gap-2 p-3 rounded-2xl bg-primary text-whiteColor hover:opacity-90 transition"
                >
                  <CreditCard size={22} strokeWidth={1.5} />
                  پرداختی ها
                </Link>
                <Link
                  href={`?detail=${houseId}&submodal=edit`}
                  className="flex gap-2 p-3 rounded-2xl bg-primary text-whiteColor hover:opacity-90 transition"
                >
                  <SquarePen size={22} strokeWidth={1.5} />
                  تاریخچه تغییرات
                </Link>
              </div>
            </div>
          </div>
        </Box>
      </div>
      
     <ReservesListModal open={isSubModalOpen('reserves')} houseId={parseInt(houseId)} BookingList={BookingList}/> 
     <PassengersModal open={isSubModalOpen('passengers')} houseId={parseInt(houseId)} BookingList={BookingList}/>
     <PaymentsModal open={isSubModalOpen('payments')} houseId={parseInt(houseId)}/>
     <EditHistoryModal open={isSubModalOpen('edit')} houseId={parseInt(houseId)} BookingList={BookingList}/>
    </>
  );
}
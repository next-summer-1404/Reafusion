import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Banknote, BedDouble, Building, CreditCard, House, HouseHeart, ListChecks, MapPin, SoapDispenserDroplet, SquarePen, UsersRound, Warehouse, X } from 'lucide-react';
import Image from 'next/image';
import DetailImg from '@/assets/images/Dashboard/detail.jpg';
import PassengersModal from '../PassengersModal';
import ReservesListModal from '../ReservesListModal';
import PaymentsModal from '../PaymentsModal';
import EditHistoryModal from '../EditHistoryModal';

interface IProps {
    open: boolean;
    onClose: () => void;
}

const icons = [
    { name: 'bed', icon: <BedDouble size={22} strokeWidth={1.5} /> },
    { name: 'bath', icon: <SoapDispenserDroplet size={22} strokeWidth={1.5} /> },
    { name: 'parking', icon: <Warehouse size={22} strokeWidth={1.5} /> },
    { name: 'capacity', icon: <UsersRound size={22} strokeWidth={1.5} /> },
    { name: 'roof', icon: <HouseHeart size={22} strokeWidth={1.5} /> },
    { name: 'house', icon: <House size={22} strokeWidth={1.5} /> },
    { name: 'apartment', icon: <Building size={22} strokeWidth={1.5} /> },
    { name: 'mortage', icon: <Banknote size={22} strokeWidth={1.5} /> },

];

const HouseDetailModal: FC<IProps> = ({ open, onClose }) => {

    // reserves list modal
    const [isReservesListOpen, setIsReservesListOpen] = useState(false);
    const handleOpenReservesList = () => setIsReservesListOpen(true);
    const handleCloseReservesList = () => setIsReservesListOpen(false);
    // reserves list modal end

    // passengers modal
    const [isPassengersOpen, setIsPassengersOpen] = useState(false);
    const handleOpenPassengers = () => setIsPassengersOpen(true);
    const handleClosePassengers = () => setIsPassengersOpen(false);
    // passengers modal end

    // payments modal
    const [isPeymentsOpen, setIsPeymentsOpen] = useState(false);
    const handleOpenPeyments = () => setIsPeymentsOpen(true);
    const handleClosePeyments = () => setIsPeymentsOpen(false);
    // payments modal end

    // edit history modal
    const [isEditHistoryOpen, setIsEditHistoryOpen] = useState(false);
    const handleOpenEditHistory = () => setIsEditHistoryOpen(true);
    const handleCloseEditHistory = () => setIsEditHistoryOpen(false);
    // edit history modal end

    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    className="
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[80%] h-[90%] max-h-[90%] bg-white flex flex-col rounded-3xl
                    text-dark py-8 gap-8
                "
                >
                    {/* modal header */}
                    <div className='flex justify-between items-center px-8'>
                        <h3 className='font-bold text-2xl'>جزئیات اقامتگاه</h3>
                        <div
                            onClick={onClose}
                            className='size-12 rounded-full flex justify-center items-center bg-lightGray cursor-pointer hover:scale-110 transition-all'
                        >
                            <X size={32} strokeWidth={1.5} />
                        </div>
                    </div>
                    {/* modal header end */}

                    {/* modal body */}
                    <div className='flex flex-col gap-8 px-8 overflow-y-scroll'>
                        <div className='flex justify-between gap-8'>
                            <Image
                                src={DetailImg}
                                alt=''
                                height={100}
                                width={100}
                                className='w-[40%] h-[300px] rounded-3xl border border-borderColor'
                            />

                            {/* detail */}
                            <div className='w-[60%] flex flex-col gap-2'>
                                {/* name */}
                                <h2 className='truncate font-bold text-xl'>آپارتمان لوکس زعفرانیه</h2>
                                {/* name end */}
                                {/* address */}
                                <div className='flex items-center gap-2 text-gray'>
                                    <MapPin size={20} strokeWidth={1.5} />
                                    <p className='truncate'>خیابان ولیعصر، تهران، منطقه مرکزی</p>
                                </div>
                                {/* address end */}
                                {/* desc */}
                                <p className='line-clamp-6 leading-[32px] text-justify'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه  درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان  خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید  داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات  پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                                {/* desc end */}
                                {/* price */}
                                <div className='flex gap-2 items-center justify-end'>
                                    <span className='font-bold text-2xl'>2,500,000</span>
                                    <span>تومان</span>
                                </div>
                                {/* price end */}
                            </div>
                            {/* detail end */}
                        </div>

                        {/* labels */}
                        <div className='flex flex-col gap-4'>
                            <p className='font-bold'>برچسب ها :</p>
                            <ul className='flex gap-4'>
                                <li className='flex px-2 py-1.5 rounded-lg bg-secondary text-whiteColor'>مدرن</li>
                                <li className='flex px-2 py-1.5 rounded-lg bg-secondary text-whiteColor'>آپارتمان</li>
                                <li className='flex px-2 py-1.5 rounded-lg bg-secondary text-whiteColor'>آسانسور دار</li>
                            </ul>
                        </div>
                        {/* labels  end */}

                        {/* other detail */}
                        <div className='flex flex-col gap-4'>
                            <p className='font-bold'>ویژگی‌ها :</p>
                            <ul className='flex gap-4'>
                                {icons.map((item, index) => (
                                    <li
                                        key={index}
                                        className='flex items-center gap-2 px-2 py-1.5 rounded-lg bg-secondary text-whiteColor'
                                    >
                                        <span>{item.icon}</span>
                                        <span>
                                            {item.name === 'bed' ? 'خوابه' :
                                                item.name === 'bath' ? 'حمامه' :
                                                    item.name === 'parking' ? 'پارکینگ' :
                                                        item.name === 'capacity' ? 'نفر ظرفیت' :
                                                            item.name === 'roof' ? 'بالکن' :
                                                                item.name === 'house' ? 'مسکونی' :
                                                                    item.name === 'apartment' ? 'آپارتمانی' :
                                                                        item.name === 'mortage' ? 'رهن و اجاره' : item.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* other detail end */}

                        {/* actions */}
                        <div className='flex flex-col gap-4'>
                            <p className='font-bold'>انجام عملیات :</p>
                            <div className="flex gap-4">
                                <button onClick={handleOpenReservesList} className="flex gap-2 p-3 rounded-2xl bg-primary text-whiteColor cursor-pointer">
                                    <ListChecks size={22} strokeWidth={1.5} />
                                    رزرو ها
                                </button>
                                <button onClick={handleOpenPassengers} className="flex gap-2 p-3 rounded-2xl bg-primary text-whiteColor cursor-pointer">
                                    <UsersRound size={22} strokeWidth={1.5} />
                                    مسافر ها
                                </button>
                                <button onClick={handleOpenPeyments} className="flex gap-2 p-3 rounded-2xl bg-primary text-whiteColor cursor-pointer">
                                    <CreditCard size={22} strokeWidth={1.5} />
                                    پرداختی ها
                                </button>
                                <button onClick={handleOpenEditHistory} className="flex gap-2 p-3 rounded-2xl bg-primary text-whiteColor cursor-pointer">
                                    <SquarePen size={22} strokeWidth={1.5} />
                                    تاریخچه تغییرات
                                </button>
                            </div>
                        </div>
                        {/* actions */}
                    </div>
                    {/* modal body end */}

                </Box>
            </Modal>

            {/* reserves list modal */}
            <ReservesListModal open={isReservesListOpen} onClose={handleCloseReservesList} />
            {/* reserves list modal end */}

            {/* passengers modal */}
            <PassengersModal open={isPassengersOpen} onClose={handleClosePassengers} />
            {/* passengers modal end */}

            {/* payments modal */}
            <PaymentsModal open={isPeymentsOpen} onClose={handleClosePeyments} />
            {/* payments modal end */}

            {/* edit history modal */}
            <EditHistoryModal open={isEditHistoryOpen} onClose={handleCloseEditHistory} />
            {/* edit history modal end */}
        </>
    )
}

export default HouseDetailModal
"use client";

import React, { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import CustomSelectOption from "@/components/Ui/ReusableInputs/SelectOption";
import FillButton from "@/components/Ui/Buttons/FillButton";
import PriceRangeComponent from "@/components/Pages/FastReservePage/PriceRangeComponent";
import { toast } from "react-toastify";

interface IProps {
  open: boolean;
}

const HousingFiltersModal: FC<IProps> = ({ open }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [transactionType, setTransactionType] = useState("");
  const [order, setOrder] = useState("");
  const [minPrice, setMinPrice] = useState(100000);
  const [maxPrice, setMaxPrice] = useState(200000000);

  useEffect(() => {
    if (open) {
      setTransactionType(searchParams.get("transactionType") || "");
      setOrder(searchParams.get("order") || "");
      setMinPrice(Number(searchParams.get("minPrice") || 100000));
      setMaxPrice(Number(searchParams.get("maxPrice") || 200000000));
    }
  }, [open, searchParams]);

  const handlePriceRangeChanged = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleAddFilters = () => {
    const params = new URLSearchParams();
    if (transactionType) params.set("transactionType", transactionType);
    if (order) params.set("order", order);
    params.set("minPrice", minPrice.toString());
    params.set("maxPrice", maxPrice.toString());
    searchParams.forEach((value, key) => {
      if (!["transactionType", "order", "minPrice", "maxPrice", "modal"].includes(key)) {
        params.set(key, value);
      }
    });
    router.push(`?${params.toString()}`, { scroll: false });
    toast.info('فیلتر ها اعمال شد')
  };

  if (!open) return null;

  return (
    <Modal open={open} onClose={closeModal}>
      <Box
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          lg:w-[40%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] bg-white flex flex-col rounded-3xl
          text-dark p-8 gap-8 shadow-2xl
        "
        dir="rtl"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-2xl">فیلتر ها</h3>
          <div
            onClick={closeModal}
            className="size-12 rounded-full flex justify-center items-center bg-lightGray cursor-pointer hover:scale-110 transition-all"
          >
            <X size={32} strokeWidth={1.5} />
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-between">
          <CustomSelectOption
            value={transactionType}
            setState={setTransactionType}
            customClass="!w-[45%]"
            labelText="وضعیت ملک"
            options={[
              { value: "mortgage", label: "رهن" },
              { value: "rental", label: "اجاره" },
              { value: "reservation", label: "رزور" },
            ]}
          />
          <CustomSelectOption
            value={order}
            setState={setOrder}
            customClass="!w-[45%]"
            labelText="دسته بندی"
            options={[
              { value: "ASC", label: "سعودی" },
              { value: "DESC", label: "نزولی" },
            ]}
          />
        </div>

        <PriceRangeComponent
          setPriceRange={handlePriceRangeChanged}
          className="w-full"
          value01={1000000}
          value02={200000000}
          priceRangeName="رنج قیمت"
        />

        {/* Actions */}
        <div className="flex justify-between gap-6">
          <button
            onClick={closeModal}
            className="rounded-2xl border border-gray text-gray p-3 cursor-pointer w-1/2 hover:bg-gray-50 transition"
          >
            انصراف
          </button>
          <FillButton
            onClick={handleAddFilters}
            ButtonText=" اعمال فیلتر"
            className="!rounded-2xl p-3 cursor-pointer w-1/2"
            type="button"
          />
        </div>
      </Box>
    </Modal>
  );
};

export default HousingFiltersModal;
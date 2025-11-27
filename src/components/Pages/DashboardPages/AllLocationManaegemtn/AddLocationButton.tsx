"use client";

import { useSearchParams, useRouter } from "next/navigation";
import FillButton from "@/components/Ui/Buttons/FillButton";

const AddLocationButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("add", "true");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <FillButton
      ButtonText="افزودن مقصد"
      className="p-3 px-6 !rounded-[15px]"
      onClick={handleClick}
    />
  );
}

export default AddLocationButton
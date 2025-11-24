import React, { FC } from "react";

interface IProps {
  lable: string;
  placeholder: string;
  name?: string;
  customClass?: string;
}

const UserInput: FC<IProps> = ({ lable, placeholder, name, customClass }) => {
  return (
    <div className="flex flex-col gap-4 w-[48.5%] 2xl:w-[48.2%] max-2xl:w-[48.2%] max-xl:w-[47.5%] max-lg:w-[47.7%] max-md:w-[47.1%] max-sm:w-full">
      <h3 className="text-dark text-[16px]">{lable}</h3>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={`text-dark p-2.5 outline-0 indent-2 bg-whiteColor dark:bg-background dark:border-thidary dark:text-whiteColor rounded-[16px] border border-borderColor w-full 
          ${customClass}
          `}
      />
    </div>
  );
};

export default UserInput;

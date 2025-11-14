import React, { FC } from "react";

interface IProps {
  lable: string;
  placeholder: string;
  name?: string;
}

const UserInput: FC<IProps> = ({ lable, placeholder, name }) => {
  return (
    <div className="flex flex-col gap-4 w-[47%] xl:w-[48%] max-sm:w-full">
      <h3 className="text-dark text-[16px]">{lable}</h3>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="text-dark p-2.5 outline-0 indent-2 bg-whiteColor rounded-[16px] border border-borderColor"
      />
    </div>
  );
};

export default UserInput;
